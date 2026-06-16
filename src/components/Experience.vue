<template>
  <section id="experience" ref="sectionRef" class="py-24 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="text-center mb-20" v-if="isVisible">
        <p class="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3 animate-fadeInUp">Career</p>
        <h2 class="text-3xl md:text-5xl font-bold mb-4 animate-fadeInUp" style="animation-delay: 0.05s">
          <span class="gradient-text">Professional Experience</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-xl mx-auto animate-fadeInUp" style="animation-delay: 0.1s">
          Building impactful AI solutions in production environments
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative" v-if="isVisible">

        <!-- Vertical Timeline Rail -->
        <div class="absolute left-6 md:left-10 top-0 bottom-0 w-px timeline-rail"></div>

        <!-- Experience Cards -->
        <div class="space-y-12">
          <div
            v-for="(item, index) in experienceItems"
            :key="index"
            class="relative pl-16 md:pl-24 animate-fadeInUp"
            :style="{ animationDelay: `${0.15 + index * 0.15}s` }"
          >
            <!-- Timeline Node -->
            <div class="absolute left-6 md:left-10 top-8 -translate-x-1/2 z-10">
              <div class="timeline-node" :class="item.current ? 'timeline-node--active' : ''">
                <div class="timeline-node-inner" :class="item.current ? 'timeline-node-inner--active' : ''"></div>
              </div>
              <!-- Pulse ring for current role -->
              <div v-if="item.current" class="timeline-pulse"></div>
            </div>

            <!-- Card -->
            <ElectricBorder
              :color="item.current ? '#22d3ee' : '#3b82f6'"
              :speed="item.current ? 1.5 : 2"
              :chaos="0.15"
              :thickness="1"
              :style="{ borderRadius: '1rem' }"
              class="experience-card"
            >
              <div class="exp-card-inner text-left">
                <!-- Card Header -->
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <!-- Type Badge -->
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider mb-3"
                      :class="getBadgeClass(item.type)">
                      <span class="w-1.5 h-1.5 rounded-full" :class="getDotClass(item.type)"></span>
                      {{ item.type }}
                    </div>

                    <!-- Title -->
                    <h3 class="text-xl md:text-2xl font-bold text-white leading-tight mb-1">
                      {{ item.title }}
                    </h3>

                    <!-- Company -->
                    <div class="flex items-center gap-2 text-cyan-400 font-medium text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                      {{ item.company }}
                    </div>
                  </div>

                  <!-- Date & Duration -->
                  <div class="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                    <span class="text-gray-400 text-xs font-medium flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {{ item.year }}
                    </span>
                  </div>
                </div>

                <!-- Description -->
                <p class="text-gray-300 text-sm leading-relaxed mb-5">{{ item.description }}</p>

                <!-- Highlights -->
                <div v-if="item.highlights && item.highlights.length" class="space-y-2 mb-5">
                  <div
                    v-for="(hl, hi) in item.highlights"
                    :key="hi"
                    class="flex items-start gap-2.5 text-sm"
                  >
                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" :class="getDotClass(item.type)"></span>
                    <span class="text-gray-400">{{ hl }}</span>
                  </div>
                </div>

                <!-- Tech Tags -->
                <div v-if="item.tech && item.tech.length" class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in item.tech"
                    :key="tag"
                    class="tech-tag"
                  >{{ tag }}</span>
                </div>
              </div>
            </ElectricBorder>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../composables/useAnimations'
import { portfolioData } from '../utils/data'
import ElectricBorder from './ui/ElectricBorder.vue'

const { isVisible, setupObserver } = useScrollReveal()

// Enhanced experience data with highlights and tech tags
const experienceItems = ref([
  {
    type: 'experience',
    title: portfolioData.experience[0].title,
    company: portfolioData.experience[0].company,
    year: portfolioData.experience[0].year,
    description: portfolioData.experience[0].description,
    current: true,
    highlights: [
      'Architected end-to-end AIOps ML pipeline for OIC system classification',
      'Deployed scalable OCI Functions for real-time inference execution',
      'Integrated API Gateways and cloud security best practices',
    ],
    tech: ['Python', 'OCI', 'Machine Learning', 'AIOps', 'Serverless'],
  },
  {
    type: 'internship',
    title: portfolioData.experience[1].title,
    company: portfolioData.experience[1].company,
    year: portfolioData.experience[1].year,
    description: portfolioData.experience[1].description,
    current: false,
    highlights: [
      'Contributed to core technical development and system integrations',
      'Gained deep expertise in the cloud-native tech stack',
      'Transitioned to full-time role based on performance',
    ],
    tech: ['Python', 'Cloud', 'REST APIs', 'System Integration'],
  },
])

const getBadgeClass = (type) => {
  const classes = {
    experience: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
    internship: 'bg-blue-500/15 text-blue-400 border border-blue-500/25',
    achievement: 'bg-purple-500/15 text-purple-400 border border-purple-500/25',
  }
  return classes[type] || 'bg-gray-500/15 text-gray-400 border border-gray-500/25'
}

const getDotClass = (type) => {
  const classes = {
    experience: 'bg-emerald-400',
    internship: 'bg-blue-400',
    achievement: 'bg-purple-400',
  }
  return classes[type] || 'bg-gray-400'
}

const sectionRef = ref(null)

onMounted(() => {
  if (sectionRef.value) {
    setupObserver(sectionRef.value)
  }
})
</script>

<style scoped>
/* ── Gradient text ── */
.gradient-text {
  @apply bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent;
}

/* ── Timeline Rail ── */
.timeline-rail {
  background: linear-gradient(
    to bottom,
    rgba(34, 211, 238, 0.6) 0%,
    rgba(59, 130, 246, 0.3) 50%,
    rgba(139, 92, 246, 0.15) 100%
  );
}

.timeline-rail::before {
  content: '';
  position: absolute;
  top: 0;
  left: -2px;
  width: 5px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(34, 211, 238, 0.15) 0%,
    rgba(59, 130, 246, 0.05) 100%
  );
  filter: blur(4px);
}

/* ── Timeline Node ── */
.timeline-node {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #0f172a;
  border: 2.5px solid #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.timeline-node--active {
  border-color: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.4);
}

.timeline-node-inner {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #475569;
}

.timeline-node-inner--active {
  background: #22d3ee;
}

.timeline-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1.5px solid rgba(34, 211, 238, 0.3);
  animation: pulseRing 2.5s ease-out infinite;
}

@keyframes pulseRing {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

/* ── Card ── */
.experience-card {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
}

.experience-card:hover {
  transform: translateY(-4px);
}

.exp-card-inner {
  padding: 1.75rem;
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

/* ── Tech Tags ── */
.tech-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.65rem;
  border-radius: 0.375rem;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.25s ease;
}

.tech-tag:hover {
  background: rgba(34, 211, 238, 0.08);
  border-color: rgba(34, 211, 238, 0.2);
  color: #67e8f9;
}
</style>
