<template>
  <div class="particles" ref="particlesContainer">
    <!-- Particles will be dynamically added here -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const particlesContainer = ref(null)

const createParticle = () => {
  const particle = document.createElement('div')
  particle.className = 'particle'
  
  const size = Math.random() * 100 + 50
  const x = Math.random() * 100
  const y = Math.random() * 100
  const duration = Math.random() * 20 + 10
  
  particle.style.width = size + 'px'
  particle.style.height = size + 'px'
  particle.style.left = x + '%'
  particle.style.top = y + '%'
  particle.style.opacity = Math.random() * 0.5 + 0.1
  particle.style.animation = `float ${duration}s ease-in-out infinite`
  particle.style.animationDelay = Math.random() * 5 + 's'
  
  return particle
}

onMounted(() => {
  if (particlesContainer.value) {
    for (let i = 0; i < 10; i++) {
      const particle = createParticle()
      particlesContainer.value.appendChild(particle)
    }
  }
})
</script>

<style scoped>
.particles {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0) 70%);
  border-radius: 50%;
  filter: blur(40px);
}
</style>
