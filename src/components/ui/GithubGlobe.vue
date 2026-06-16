<template>
  <div
    ref="containerRef"
    class="ai-orb-container"
    @mousedown="onMouseDown"
    @touchstart.prevent="onTouchStart"
  >
    <canvas ref="canvasRef" class="ai-orb-canvas" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

defineProps({
  globeConfig: { type: Object, default: () => ({}) },
  data: { type: Array, default: () => [] },
})

const containerRef = ref(null)
const canvasRef = ref(null)

let renderer, scene, camera, animId
let masterGroup
let isDragging = false
let prevPointer = { x: 0, y: 0 }
let velX = 0
let velY = 0.003
const AUTO_ROT = 0.003
let clock = 0

// ── palette — vibrant neon gradients ──────────────────────────────────────────
const NODE1 = 0x00f2fe    // cyan
const NODE2 = 0x4facfe    // bright blue
const NODE3 = 0xc471ed    // neon purple
const WIRE  = 0x3b82f6    // rich blue wireframe
const EDGE  = 0x8b5cf6    // violet edges
const RING1 = 0x06b6d4    // cyan ring
const RING2 = 0xa855f7    // purple ring
const RING3 = 0xec4899    // pink ring

// ── refs for animated objects ─────────────────────────────────────────────────
let coreWireframe
let ring1Group, ring2Group, ring3Group
let neuralNodes = [] // { dot, halo, pos, phase }
let edgeLines = []   // { line, i, j }
let pulseParticles   // flowing dots on surface

// ── helpers ───────────────────────────────────────────────────────────────────
function rnd(a, b) { return a + Math.random() * (b - a) }

function fibSphere(count, radius) {
  // Fibonacci spiral points — evenly distributed on sphere
  const pts = []
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = goldenAngle * i
    pts.push(new THREE.Vector3(
      r * Math.cos(theta) * radius,
      y * radius,
      r * Math.sin(theta) * radius,
    ))
  }
  return pts
}

// ── thin orbit ring (line loop) ───────────────────────────────────────────────
function makeOrbitRing(radius, color, opacity = 0.35) {
  const segments = 128
  const pts = []
  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * Math.PI * 2
    pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius))
  }
  const geo = new THREE.BufferGeometry().setFromPoints(pts)
  const mat = new THREE.LineBasicMaterial({
    color, transparent: true, opacity, depthWrite: false,
  })
  return new THREE.LineLoop(geo, mat)
}

// ── small orbiting dot on a ring ──────────────────────────────────────────────
function makeOrbitDot(color) {
  const geo = new THREE.SphereGeometry(0.018, 8, 8)
  const mat = new THREE.MeshBasicMaterial({ color })
  return new THREE.Mesh(geo, mat)
}

// ── init ──────────────────────────────────────────────────────────────────────
function init() {
  const canvas = canvasRef.value
  const container = containerRef.value
  const W = container.clientWidth
  const H = container.clientHeight

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(W, H)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)   // fully transparent — site bg shows through

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(44, W / H, 0.01, 80)
  camera.position.z = 3.2

  // ─ lighting ─
  scene.add(new THREE.AmbientLight(0x445566, 1.0))
  const key = new THREE.DirectionalLight(0x88aacc, 0.7)
  key.position.set(3, 2, 4)
  scene.add(key)

  masterGroup = new THREE.Group()
  scene.add(masterGroup)

  // ─ 1. Core wireframe sphere — denser geodesic look ─
  const coreGeo = new THREE.IcosahedronGeometry(0.88, 3) // Increased detail from 2 to 3
  const coreMat = new THREE.MeshBasicMaterial({
    color: WIRE,
    wireframe: true,
    transparent: true,
    opacity: 0.35, // Slightly more opaque
  })
  coreWireframe = new THREE.Mesh(coreGeo, coreMat)
  masterGroup.add(coreWireframe)

  // ─ 2. Neural nodes — denser distribution ─
  const nodePositions = fibSphere(48, 0.92) // Increased nodes from 22 to 48
  const nodeColors = [NODE1, NODE2, NODE3]

  nodePositions.forEach((pos, i) => {
    const col = nodeColors[i % nodeColors.length]
    // dot
    const dotGeo = new THREE.SphereGeometry(0.018, 8, 8)
    const dotMat = new THREE.MeshBasicMaterial({ color: col })
    const dot = new THREE.Mesh(dotGeo, dotMat)
    dot.position.copy(pos)
    masterGroup.add(dot)

    // soft halo
    const haloGeo = new THREE.SphereGeometry(0.04, 8, 8)
    const haloMat = new THREE.MeshBasicMaterial({
      color: col, transparent: true, opacity: 0.22, depthWrite: false,
    })
    const halo = new THREE.Mesh(haloGeo, haloMat)
    halo.position.copy(pos)
    masterGroup.add(halo)

    neuralNodes.push({ dot, halo, pos: pos.clone(), phase: rnd(0, Math.PI * 2) })
  })

  // ─ 3. Edges — connect nearby nodes with thin lines ─
  const CONNECT_DIST = 0.55 // Adjusted for denser node distribution
  for (let i = 0; i < nodePositions.length; i++) {
    for (let j = i + 1; j < nodePositions.length; j++) {
      if (nodePositions[i].distanceTo(nodePositions[j]) < CONNECT_DIST) {
        const geo = new THREE.BufferGeometry().setFromPoints([
          nodePositions[i], nodePositions[j],
        ])
        const mat = new THREE.LineBasicMaterial({
          color: EDGE,
          transparent: true,
          opacity: 0.18,
          depthWrite: false,
        })
        const line = new THREE.Line(geo, mat)
        masterGroup.add(line)
        edgeLines.push({ line, mat, i, j })
      }
    }
  }

  // ─ 4. Three clean orbital rings at different tilts ─
  ring1Group = new THREE.Group()
  ring1Group.add(makeOrbitRing(1.18, RING1, 0.35))
  ring1Group.add(makeOrbitDot(RING1))
  ring1Group.rotation.x = Math.PI * 0.38
  ring1Group.rotation.z = Math.PI * 0.05
  masterGroup.add(ring1Group)

  ring2Group = new THREE.Group()
  ring2Group.add(makeOrbitRing(1.35, RING2, 0.25))
  ring2Group.add(makeOrbitDot(RING2))
  ring2Group.rotation.x = -Math.PI * 0.28
  ring2Group.rotation.z = Math.PI * 0.22
  masterGroup.add(ring2Group)

  ring3Group = new THREE.Group()
  ring3Group.add(makeOrbitRing(1.52, RING3, 0.18))
  ring3Group.add(makeOrbitDot(RING3))
  ring3Group.rotation.x = Math.PI * 0.15
  ring3Group.rotation.y = Math.PI * 0.4
  masterGroup.add(ring3Group)

  // ─ 5. Surface pulse particles — denser, flowing ─
  const pCount = 150 // Increased from 60 to 150
  const pPositions = new Float32Array(pCount * 3)
  const pPhases = new Float32Array(pCount)
  for (let i = 0; i < pCount; i++) {
    const v = fibSphere(1, rnd(0.90, 0.96))[0] || new THREE.Vector3(
      rnd(-1, 1), rnd(-1, 1), rnd(-1, 1),
    ).normalize().multiplyScalar(rnd(0.90, 0.96))
    // randomise on sphere
    const theta = rnd(0, Math.PI * 2)
    const phi = Math.acos(rnd(-1, 1))
    const r = rnd(0.90, 0.96)
    pPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    pPositions[i * 3 + 1] = r * Math.cos(phi)
    pPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    pPhases[i] = rnd(0, Math.PI * 2)
  }
  const pGeo = new THREE.BufferGeometry()
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3))
  const pMat = new THREE.PointsMaterial({
    color: EDGE,
    size: 0.018,
    transparent: true,
    opacity: 0.50,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  pulseParticles = new THREE.Points(pGeo, pMat)
  pulseParticles.userData.phases = pPhases
  masterGroup.add(pulseParticles)

  // ─ resize ─
  const ro = new ResizeObserver(() => {
    const w = container.clientWidth
    const h = container.clientHeight
    renderer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  })
  ro.observe(container)

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
  window.addEventListener('touchmove', onTouchMove, { passive: false })
  window.addEventListener('touchend', onMouseUp)
}

// ── animation ─────────────────────────────────────────────────────────────────
function animate() {
  animId = requestAnimationFrame(animate)
  clock += 0.016

  // auto-rotate
  if (!isDragging) {
    velX *= 0.90
    velY = velY * 0.96 + AUTO_ROT * 0.04
    if (Math.abs(velY) < AUTO_ROT * 0.8) velY = AUTO_ROT
  }
  masterGroup.rotation.y += velY
  masterGroup.rotation.x += velX
  masterGroup.rotation.x = Math.max(-0.45, Math.min(0.45, masterGroup.rotation.x))

  // core wireframe slow counter-spin
  coreWireframe.rotation.y -= 0.001
  coreWireframe.rotation.x += 0.0005

  // node breathing
  neuralNodes.forEach(({ dot, halo, pos, phase }) => {
    const t = clock * 1.0 + phase
    const s = 1 + Math.sin(t) * 0.08
    dot.position.copy(pos).multiplyScalar(s)
    halo.position.copy(dot.position)
    halo.material.opacity = 0.06 + Math.sin(t) * 0.06
  })

  // edge pulse
  edgeLines.forEach(({ mat }, idx) => {
    mat.opacity = 0.04 + Math.abs(Math.sin(clock * 1.2 + idx * 0.9)) * 0.10
  })

  // orbit ring rotation + moving dot
  const moveDot = (group, speed, radius) => {
    group.rotation.z += speed
    const dot = group.children[1]
    if (dot) {
      const a = clock * speed * 60
      dot.position.set(Math.cos(a) * radius, 0, Math.sin(a) * radius)
    }
  }
  moveDot(ring1Group, 0.002, 1.18)
  moveDot(ring2Group, -0.0015, 1.35)
  moveDot(ring3Group, 0.001, 1.52)

  // surface particles gentle drift
  {
    const pos = pulseParticles.geometry.attributes.position
    const ph = pulseParticles.userData.phases
    for (let i = 0; i < ph.length; i++) {
      const t = clock * 0.4 + ph[i]
      const r = 0.92 + Math.sin(t) * 0.03
      // slowly rotate each particle's theta
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i)
      const len = Math.sqrt(x * x + y * y + z * z) || 1
      pos.setXYZ(i, (x / len) * r, (y / len) * r, (z / len) * r)
    }
    pos.needsUpdate = true
    pulseParticles.rotation.y += 0.0008
  }

  renderer.render(scene, camera)
}

// ── pointer handling ──────────────────────────────────────────────────────────
function onMouseDown(e) {
  isDragging = true
  prevPointer = { x: e.clientX, y: e.clientY }
  velX = 0; velY = 0
}
function onMouseMove(e) {
  if (!isDragging) return
  velY = (e.clientX - prevPointer.x) * 0.004
  velX = (e.clientY - prevPointer.y) * 0.003
  prevPointer = { x: e.clientX, y: e.clientY }
}
function onMouseUp() { isDragging = false }
function onTouchStart(e) {
  if (e.touches.length === 1) {
    isDragging = true
    prevPointer = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    velX = 0; velY = 0
  }
}
function onTouchMove(e) {
  if (!isDragging || e.touches.length !== 1) return
  e.preventDefault()
  velY = (e.touches[0].clientX - prevPointer.x) * 0.004
  velX = (e.touches[0].clientY - prevPointer.y) * 0.003
  prevPointer = { x: e.touches[0].clientX, y: e.touches[0].clientY }
}

// ── lifecycle ─────────────────────────────────────────────────────────────────
onMounted(() => { init(); animate() })
onUnmounted(() => {
  cancelAnimationFrame(animId)
  renderer?.dispose()
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchend', onMouseUp)
})
</script>

<style scoped>
.ai-orb-container {
  position: relative;
  width: min(28rem, 85vw);
  aspect-ratio: 1;
  cursor: grab;
  user-select: none;
  touch-action: none;
}

.ai-orb-container:active {
  cursor: grabbing;
}

.ai-orb-canvas {
  width: 100% !important;
  height: 100% !important;
  display: block;
}
</style>