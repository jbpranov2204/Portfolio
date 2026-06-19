<template>
  <section id="projects" class="py-20 relative" ref="sectionRef">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Featured Projects</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          A selection of my most impactful work showcasing my expertise
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap gap-3 justify-center mb-12">
        <button
          @click="selectedFilter = 'all'"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300',
            selectedFilter === 'all'
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900 shadow-lg shadow-cyan-500/50'
              : 'glass hover:bg-white/20'
          ]"
        >
          All Projects
        </button>
        <button
          @click="selectedFilter = 'featured'"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300',
            selectedFilter === 'featured'
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900 shadow-lg shadow-cyan-500/50'
              : 'glass hover:bg-white/20'
          ]"
        >
          Featured
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <transition-group name="fade" tag="div" class="contents">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="p-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
            :style="{ animationDelay: `${index * 0.08}s` }"
          >
            <FlipCard :project="project" />
          </div>
        </transition-group>
      </div>

      <!-- View All Projects Button -->
      <div class="text-center mt-16">
        <a
          href="#"
          class="inline-flex items-center gap-2 px-8 py-4 glass rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 font-semibold"
        >
          View All Projects
          <span class="text-xl">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { portfolioData } from '../utils/data'
import FlipCard from './ui/FlipCard.vue'

const projectsData = ref(portfolioData.projects)
const selectedFilter = ref('all')

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'featured') {
    return projectsData.value.filter(p => p.featured)
  }
  return projectsData.value
})

const sectionRef = ref(null)

onMounted(() => {
})
</script>

<style scoped>
.gradient-text {
  @apply bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent;
}



.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}


</style>
