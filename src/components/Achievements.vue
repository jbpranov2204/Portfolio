<template>
  <section id="achievements" class="py-20 relative" ref="sectionRef">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slideUp" v-if="isVisible">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Awards & Leadership</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Recognitions, hackathon triumphs, and community building
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8" v-if="isVisible">
        
        <!-- Hackathons Column -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <span>🏆</span> Hackathon Triumphs
          </h3>
          
          <div v-for="(award, i) in awards" :key="i" 
               class="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 animate-fadeInUp"
               :style="{ animationDelay: `${i * 0.15}s` }">
            <div class="flex items-start justify-between mb-3">
              <h4 class="text-lg font-bold text-white">{{ award.title }}</h4>
              <span class="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold shrink-0 ml-4">{{ award.place }}</span>
            </div>
            <p class="text-gray-400 text-sm mb-4 leading-relaxed">{{ award.event }}</p>
            <a href="#" class="text-cyan-400 text-sm hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 font-medium group">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              View Certificate
            </a>
          </div>
        </div>

        <!-- Leadership Column -->
        <div class="space-y-6 flex flex-col">
          <h3 class="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <span>🌟</span> Leadership & Community
          </h3>
          
          <div class="flex-grow animate-fadeInUp" style="animation-delay: 0.2s;">
            <ElectricBorder
              color="#38bdf8"
              :speed="2.5"
              :chaos="0.15"
              :thickness="1.5"
              :style="{ borderRadius: '1rem', height: '100%' }"
            >
              <div class="glass rounded-xl p-8 h-full flex flex-col">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center mb-6 border border-cyan-400/30">
                  <span class="text-3xl">🎤</span>
                </div>
                
                <h4 class="text-2xl font-bold text-white mb-3">Prompt-O-Mania Organizer</h4>
                
                <p class="text-gray-300 leading-relaxed mb-8 flex-grow">
                  Organized and led a competitive generative AI event where <strong class="text-cyan-400">200+ participants</strong> built innovative applications using the Gemini API. 
                </p>
                
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <span class="text-cyan-400 mt-1">✦</span>
                    <p class="text-gray-400 text-sm">Provided structured mentorship and hands-on guidance for teams to build generative AI solutions.</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <span class="text-cyan-400 mt-1">✦</span>
                    <p class="text-gray-400 text-sm">Fostered an interactive community ecosystem of AI-driven problem solving.</p>
                  </div>
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
import ElectricBorder from './ui/ElectricBorder.vue'

const { isVisible, setupObserver } = useScrollReveal()
const sectionRef = ref(null)

const awards = [
  {
    title: 'National Hackathon',
    place: '2nd Place',
    event: 'Sairam Engineering College',
  },
  {
    title: 'Mini Hackathon',
    place: '3rd Place',
    event: 'Namma Flutter Community & FlutterFlow Developers Group Chennai, hosted at Thiran Technologies',
  },
  {
    title: 'National Hackathon',
    place: '3rd Place',
    event: 'Sri Eshwar College',
  }
]

onMounted(() => {
  if (sectionRef.value) {
    setupObserver(sectionRef.value)
  }
})
</script>

<style scoped>
.gradient-text {
  @apply bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent;
}

.animate-slideUp {
  animation: slideUp 0.6s ease-out;
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out backwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
