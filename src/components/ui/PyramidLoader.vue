<template>
  <div
    :class="['pyramid-loader', className, isInteracting ? 'is-interacting' : '']"
    @pointermove="handlePointerMove"
    @pointerenter="handlePointerEnter"
    @pointerleave="handlePointerLeave"
  >
    <div class="wrapper" :style="wrapperStyle">
      <span class="side side1"></span>
      <span class="side side2"></span>
      <span class="side side3"></span>
      <span class="side side4"></span>
      <span class="shadow"></span>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  className: {
    type: String,
    default: '',
  },
})

const isInteracting = ref(false)
const rotationX = ref(-20)
const rotationY = ref(0)
const glowX = ref('50%')
const glowY = ref('50%')

const targetRotationX = ref(-20)
const targetRotationY = ref(0)
const targetGlowX = ref(50)
const targetGlowY = ref(50)
let animationFrameId = null

const wrapperStyle = computed(() => ({
  '--rotation-x': `${rotationX.value}deg`,
  '--rotation-y': `${rotationY.value}deg`,
  '--glow-x': glowX.value,
  '--glow-y': glowY.value,
}))

const handlePointerEnter = (event) => {
  isInteracting.value = true
  updatePointerState(event)
  startAnimationLoop()
}

const handlePointerMove = (event) => {
  updatePointerState(event)
}

const handlePointerLeave = () => {
  isInteracting.value = false
  targetRotationX.value = -20
  targetRotationY.value = 0
  targetGlowX.value = 50
  targetGlowY.value = 50
  startAnimationLoop()
}

const updatePointerState = (event) => {
  const target = event.currentTarget
  if (!target) {
    return
  }

  const bounds = target.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width
  const y = (event.clientY - bounds.top) / bounds.height

  targetRotationY.value = (x - 0.5) * 28
  targetRotationX.value = -20 - (y - 0.5) * 14
  targetGlowX.value = x * 100
  targetGlowY.value = y * 100
}

const startAnimationLoop = () => {
  if (animationFrameId !== null) {
    return
  }

  const step = () => {
    const easing = isInteracting.value ? 0.08 : 0.05

    rotationX.value += (targetRotationX.value - rotationX.value) * easing
    rotationY.value += (targetRotationY.value - rotationY.value) * easing

    const currentGlowX = Number.parseFloat(glowX.value)
    const currentGlowY = Number.parseFloat(glowY.value)
    const nextGlowX = currentGlowX + (targetGlowX.value - currentGlowX) * easing
    const nextGlowY = currentGlowY + (targetGlowY.value - currentGlowY) * easing

    glowX.value = `${nextGlowX}%`
    glowY.value = `${nextGlowY}%`

    const atRest =
      Math.abs(targetRotationX.value - rotationX.value) < 0.08 &&
      Math.abs(targetRotationY.value - rotationY.value) < 0.08 &&
      Math.abs(targetGlowX.value - currentGlowX) < 0.08 &&
      Math.abs(targetGlowY.value - currentGlowY) < 0.08

    if (isInteracting.value || !atRest) {
      animationFrameId = requestAnimationFrame(step)
    } else {
      animationFrameId = null
    }
  }

  animationFrameId = requestAnimationFrame(step)
}

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
.pyramid-loader {
  position: relative;
  width: min(720px, 94vw);
  height: min(720px, 94vw);
  display: block;
  transform-style: preserve-3d;
  transform: rotateX(-20deg);
  cursor: grab;
  touch-action: none;
}

.pyramid-loader.is-interacting {
  cursor: grabbing;
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: spin 8s linear infinite;
  transform: rotateX(var(--rotation-x, -20deg)) rotateY(var(--rotation-y, 0deg));
  transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

@keyframes spin {
  100% {
    transform: rotateX(var(--rotation-x, -20deg)) rotateY(calc(var(--rotation-y, 0deg) + 360deg));
  }
}

.side {
  width: clamp(108px, 26vw, 176px);
  height: clamp(108px, 26vw, 176px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: center top;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.side1 {
  transform: rotateZ(-30deg) rotateY(90deg);
  background: conic-gradient(#22d3ee, #3b82f6, #8b5cf6, #22d3ee);
}

.side2 {
  transform: rotateZ(30deg) rotateY(90deg);
  background: conic-gradient(#0f172a, #3b82f6, #22d3ee, #8b5cf6);
}

.side3 {
  transform: rotateX(30deg);
  background: conic-gradient(#8b5cf6, #22d3ee, #3b82f6, #0f172a);
}

.side4 {
  transform: rotateX(-30deg);
  background: conic-gradient(#22d3ee, #8b5cf6, #3b82f6, #22d3ee);
}

.shadow {
  width: clamp(110px, 24vw, 160px);
  height: clamp(110px, 24vw, 160px);
  background: radial-gradient(circle, rgba(34, 211, 238, 0.45), rgba(59, 130, 246, 0.22), rgba(139, 92, 246, 0.08));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotateX(90deg) translateZ(-40px);
  filter: blur(18px);
}

.pyramid-loader::before {
  content: '';
  position: absolute;
  inset: 14%;
  border-radius: 50%;
  background: radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(34, 211, 238, 0.28), rgba(59, 130, 246, 0.12) 35%, transparent 70%);
  filter: blur(18px);
  pointer-events: none;
  transform: translateZ(-1px);
}

@media (prefers-reduced-motion: reduce) {
  .wrapper {
    animation: none;
    transition: none;
  }
}
</style>
