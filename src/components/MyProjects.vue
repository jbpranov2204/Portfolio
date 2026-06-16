<template>
  <section id="my-projects" class="py-20 relative" ref="sectionRef">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-slideUp" v-if="isVisible">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">My Projects</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Selected builds and experiments that reflect my current focus
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-3" v-if="isVisible">
        <div
          v-for="(project, index) in myProjects"
          :key="project.id"
          class="p-1 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 animate-fadeInUp"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <FlipCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../composables/useAnimations'
import { portfolioData } from '../utils/data'
import FlipCard from './ui/FlipCard.vue'

const myProjects = ref(portfolioData.myProjects)
const { isVisible, setupObserver } = useScrollReveal()

const sectionRef = ref(null)

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
</style>
