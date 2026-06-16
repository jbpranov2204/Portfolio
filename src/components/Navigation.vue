<template>
  <nav class="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto transition-all duration-300">
    <div 
      :class="isAtTop ? 'bg-dark-800/40 backdrop-blur-md border border-white/10' : 'glass bg-dark-800/80 shadow-lg shadow-black/50'"
      class="rounded-full px-6 md:px-8 transition-all duration-300"
    >
      <div class="flex items-center justify-end md:justify-center h-14">
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-full glass hover:bg-white/20 transition-colors"
        >
          <span class="text-xl leading-none flex items-center justify-center w-6 h-6">{{ mobileMenuOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 transform -translate-y-4 scale-95"
      leave-to-class="opacity-0 transform -translate-y-4 scale-95"
    >
      <div v-if="mobileMenuOpen" class="md:hidden absolute top-full left-0 right-0 mt-3 glass bg-dark-800/95 rounded-2xl shadow-xl overflow-hidden">
        <div class="p-2 flex flex-col">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            @click="mobileMenuOpen = false"
            class="text-center text-gray-300 hover:text-white hover:bg-white/10 rounded-xl py-3 transition-colors"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollPosition } from '../composables/useAnimations'

defineProps({
  darkMode: Boolean,
})

defineEmits(['toggleDarkMode'])

const mobileMenuOpen = ref(false)
const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const { isAtTop } = useScrollPosition()
</script>


