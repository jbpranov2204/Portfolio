<template>
  <section id="about" class="py-20 relative" ref="sectionRef">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">About Me</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Learn more about my background, education, and journey
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8 animate-slideInLeft">
          <div class="glass rounded-2xl p-8 text-center">
            <h3 class="text-xl font-bold mb-4 text-cyan-400">Professional Summary</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ aboutData.summary }}
            </p>
            <p class="text-gray-400 text-sm">
              Passionate about leveraging cutting-edge technology to solve complex problems and make a positive impact.
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-4">
            <div class="glass rounded-xl p-6 text-center">
              <div class="text-3xl font-bold gradient-text">8+</div>
              <div class="text-gray-400 text-sm mt-2">Projects Completed</div>
            </div>
            <div class="glass rounded-xl p-6 text-center">
              <div class="text-3xl font-bold gradient-text">1+</div>
              <div class="text-gray-400 text-sm mt-2">Years Experience</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Education Timeline -->
        <div class="space-y-6 animate-slideInRight">
          <div class="glass rounded-2xl p-6 border-t-4 border-cyan-400 text-center">
            <h3 class="text-xl font-bold mb-4 text-cyan-400">Education</h3>
            <div
              v-for="(edu, index) in aboutData.education"
              :key="index"
              class="mb-4 last:mb-0"
            >
              <div class="mb-2">
                <h4 class="text-lg font-bold text-white mb-1">{{ edu.degree }}</h4>
                <div class="text-center">
                  <span class="text-sm text-cyan-400 font-semibold">{{ edu.year }}</span>
                </div>
              </div>
              <p class="text-gray-400 mb-2">{{ edu.school }}</p>
              <p class="text-gray-500 text-sm">{{ edu.details }}</p>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="glass rounded-2xl p-6 border-t-4 border-cyan-400 text-center">
            <h4 class="text-xl font-bold text-cyan-400 mb-4">Core Expertise</h4>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-400 text-sm">
              <li>🤖 Agentic AI</li>
              <li>🧠 Generative AI & RAG</li>
              <li>☁️ Oracle Cloud Infrastructure</li>
              <li>📱 Full Stack Development</li>
              <li>📊 Machine Learning</li>
              <li>🔗 API Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { portfolioData } from '../utils/data'

const aboutData = ref(portfolioData.about)

const sectionRef = ref(null)

onMounted(() => {
})
</script>

<style scoped>

.gradient-text {
  @apply bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent;
}



.animate-slideInLeft {
  animation: slideInLeft 0.6s ease-out;
}

.animate-slideInRight {
  animation: slideInRight 0.6s ease-out;
}



@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
