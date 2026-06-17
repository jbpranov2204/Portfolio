<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-36 pb-20">


    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8 animate-slideInLeft text-center lg:text-left" v-show="true">
          <div class="space-y-4">
            <h1 class="font-bold leading-tight">
              <span class="block text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-2">Hi, I'm</span>
              <span class="text-3xl sm:text-4xl md:text-5xl gradient-text-light">{{ name }}</span>
            </h1>
            
            <div class="h-16 flex items-center justify-center lg:justify-start">
              <h2 class="text-xl md:text-2xl font-medium">
                <DecryptedText
                  ref="decryptedRef"
                  :text="currentTitle"
                  :speed="40"
                  :max-iterations="20"
                  :sequential="true"
                  reveal-direction="start"
                  :use-original-chars-only="false"
                  animate-on="hover"
                  class-name="decrypted-char"
                  encrypted-class-name="encrypted-char"
                  parent-class-name="decrypted-title"
                  @animation-complete="onDecryptComplete"
                />
              </h2>
            </div>

            <p class="text-gray-400 text-lg max-w-lg leading-relaxed mx-auto lg:mx-0">
              {{ description }}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 animate-fadeInUp justify-center lg:justify-start" style="animation-delay: 0.15s">
            <button
              @click="downloadResume"
              class="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-pulseGlow"
            >
              Download Resume
            </button>
            <a
              href="#contact"
              class="px-8 py-3 glass rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex items-center gap-6 pt-4 animate-fadeInUp justify-center lg:justify-start" style="animation-delay: 0.25s">
            <span class="text-gray-500">Follow me:</span>
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-110 group"
              :title="social.name"
            >
              <span class="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" v-html="getSvgIcon(social.icon)"></span>
            </a>
          </div>
        </div>

        <!-- Right Content - Avatar/Image -->
        <div class="relative h-96 lg:h-auto lg:self-center flex items-center justify-center animate-fadeInUp" style="animation-delay: 0.2s">
          <GithubGlobe :globe-config="globeConfig" :data="sampleArcs" />

          <!-- Floating Badge: AI/ML — top-left -->
          <div class="floating-badge badge-top-left" style="animation-delay: 0s">
            <div class="badge-icon badge-icon--purple">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93"/>
                <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93"/>
                <path d="M15.75 9.93A4 4 0 0 1 18 14c0 2.21-1.79 4-4 4"/>
                <path d="M8.25 9.93A4 4 0 0 0 6 14c0 2.21 1.79 4 4 4"/>
                <path d="M12 18v4"/>
                <path d="M8 22h8"/>
              </svg>
            </div>
            <span class="badge-label">AI/ML</span>
          </div>

          <!-- Floating Badge: AI Agents — bottom-left -->
          <div class="floating-badge badge-bottom-left" style="animation-delay: 1.5s">
            <div class="badge-icon badge-icon--cyan">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 8h6"/>
                <path d="M9 12h6"/>
                <path d="M9 16h4"/>
              </svg>
            </div>
            <span class="badge-label">AI Agents</span>
          </div>

          <!-- Floating Badge: Full Stack — bottom-right -->
          <div class="floating-badge badge-bottom-right" style="animation-delay: 3s">
            <div class="badge-icon badge-icon--blue">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <span class="badge-label">Full Stack</span>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { portfolioData, downloadResume } from '../utils/data'
import GithubGlobe from './ui/GithubGlobe.vue'
import DecryptedText from './ui/DecryptedText.vue'

const globeConfig = {
  pointSize: 1,
  globeColor: '#0b43bd',
  showAtmosphere: true,
  atmosphereColor: '#FFFFFF',
  atmosphereAltitude: 0.1,
  emissive: '#062056',
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: 'rgba(255,255,255,1)',
  ambientLight: '#38bdf8',
  directionalLeftLight: '#ffffff',
  directionalTopLight: '#ffffff',
  pointLight: '#ffffff',
  arcTime: 1000,
  arcLength: 1,
  rings: 1,
  maxRings: 10,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 2.5,
}

const colors = [
  '#eae547',
  '#9347ea',
  '#d4ea47',
  '#ddea47',
  '#47ea70',
  '#eab447',
  '#eaa647',
  '#c747ea',
  '#52ea47',
  '#4754ea',
]

const sampleArcs = [
  { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
  { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
  { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
  { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
  { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
  { order: 2, startLat: -15.785493, startLng: -47.909029, endLat: 36.162809, endLng: -115.119411, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
  { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
  { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
  { order: 3, startLat: -6.2088, startLng: 106.8456, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[Math.floor(Math.random() * (colors.length - 1))] },
]

const name = ref(portfolioData.name)
const description = ref(portfolioData.description)
const socialLinks = ref(portfolioData.social)

const titles = [
  'AI Engineer',
  'Agentic AI Developer',
  'Application Developer',
]
let currentTitleIndex = 0
const currentTitle = ref(titles[0])
const decryptedRef = ref(null)
let cycleTimeout = null

const onDecryptComplete = () => {
  // After animation completes, wait 2.5s then switch to next title
  cycleTimeout = setTimeout(() => {
    currentTitleIndex = (currentTitleIndex + 1) % titles.length
    currentTitle.value = titles[currentTitleIndex]
    // Trigger the animation on the new title
    nextTick(() => {
      if (decryptedRef.value) {
        decryptedRef.value.triggerAnimation()
      }
    })
  }, 2500)
}

const getSvgIcon = (iconName) => {
  const icons = {
    github: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  }
  return icons[iconName] || icons.github
}

onMounted(() => {
  // Start the first decrypt animation after a short delay
  setTimeout(() => {
    if (decryptedRef.value) {
      decryptedRef.value.triggerAnimation()
    }
  }, 500)
})

onUnmounted(() => {
  if (cycleTimeout) {
    clearTimeout(cycleTimeout)
  }
})
</script>

<style scoped>
.gradient-text-light {
  @apply bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-400 bg-clip-text text-transparent;
}

.decrypted-title {
  cursor: default;
}

:deep(.decrypted-char) {
  color: #22d3ee;
  transition: color 0.3s ease;
}

:deep(.encrypted-char) {
  color: #6366f1;
  opacity: 0.8;
}

/* ── Floating Badges ── */
.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 9999px;
  background: rgba(15, 15, 30, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  animation: badgeFloat 5s ease-in-out infinite;
  z-index: 10;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.floating-badge:hover {
  transform: scale(1.08);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

/* Badge positions */
.badge-top-left {
  top: 8%;
  left: 2%;
}

.badge-bottom-left {
  bottom: 18%;
  left: -4%;
}

.badge-bottom-right {
  bottom: 10%;
  right: -2%;
}

/* Icon container */
.badge-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.badge-icon--purple {
  background: rgba(139, 92, 246, 0.25);
  color: #a78bfa;
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.badge-icon--cyan {
  background: rgba(34, 211, 238, 0.2);
  color: #22d3ee;
  border: 1px solid rgba(34, 211, 238, 0.3);
}

.badge-icon--blue {
  background: rgba(59, 130, 246, 0.25);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

/* Label */
.badge-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e2e8f0;
  white-space: nowrap;
  letter-spacing: 0.02em;
}

/* Staggered floating keyframes */
@keyframes badgeFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}
</style>
