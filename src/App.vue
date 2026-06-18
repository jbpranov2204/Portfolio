<template>
  <div class="relative bg-dark-900 text-gray-100 overflow-hidden">
    <!-- Floating Lines Background -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-25">
      <FloatingLines
        :enabled-waves="['top', 'middle', 'bottom']"
        :line-count="[6, 8, 10]"
        :line-distance="[6, 5, 3]"
        :bend-radius="5.0"
        :bend-strength="-0.5"
        :interactive="false"
        :parallax="true"
        :parallax-strength="0.1"
        :animation-speed="0.6"
        mix-blend-mode="screen"
      />
    </div>
    <ParticlesBackground />
    
    <!-- Navigation -->
    <Navigation 
      :darkMode="darkMode"
      @toggleDarkMode="darkMode = !darkMode"
    />

    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Hero Section -->
      <Hero />

      <!-- About Section -->
      <About />

      <!-- Skills Section -->
      <Skills />

      <!-- Projects Section (Removed to fix gap and duplication) -->
      <!-- <Projects /> -->

      <!-- My Projects Section -->
      <MyProjects />

      <!-- Experience Section -->
      <Experience />

      <!-- Achievements & Leadership Section -->
      <Achievements />

      <!-- Contact Section -->
      <Contact />

      <!-- Footer -->
      <Footer />
    </div>

    <!-- Back to Top Button -->
    <BackToTop />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ParticlesBackground from './components/ParticlesBackground.vue'
import FloatingLines from './components/ui/FloatingLines.vue'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import MyProjects from './components/MyProjects.vue'
import Experience from './components/Experience.vue'
import Achievements from './components/Achievements.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'

const darkMode = ref(true)
</script>

<style scoped></style>