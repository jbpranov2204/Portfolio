<template>
  <section id="skills" ref="sectionRef" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Skills & Technologies</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Core competencies and comprehensive technical expertise
        </p>
      </div>

      <!-- Detailed Skills Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(skills, category, index) in skillsData"
          :key="category"
          class="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 group"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <!-- Category Header -->
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 glass rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-all">
              <span class="text-2xl flex items-center justify-center" v-html="getCategoryIcon(category)"></span>
            </div>
            <h3 class="text-xl font-bold text-white">{{ category }}</h3>
          </div>

          <!-- Skills List -->
          <div class="space-y-4">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="flex items-center gap-3 group/skill"
            >
              <div class="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover/skill:w-4 transition-all duration-300"></div>
              <span class="text-gray-300 group-hover/skill:text-white transition-colors">
                {{ skill }}
              </span>
            </div>
          </div>

        </div>

      </div>


    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { portfolioData } from '../utils/data'
const skillsData = ref(portfolioData.skills)



const getCategoryIcon = (category) => {
  const icons = {
    'Agentic AI': '🤖',
    'Generative AI': '🧠',
    'Machine Learning': '📊',
    'Cloud Systems': '☁️',
    'Mobile Development': '📱',
    'Data & Tools': '🛠️'
  }
  return icons[category] || '✨'
}



const sectionRef = ref(null)

onMounted(() => {
})
</script>

<style scoped>
.gradient-text {
  @apply bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent;
}




</style>
