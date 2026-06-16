<template>
  <section id="contact" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slideUp" v-if="isVisible">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Get In Touch</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          {{ contactData.message }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-16" v-if="isVisible">
        <!-- Contact Card -->
        <div class="glass rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center animate-fadeInUp" style="animation-delay: 0.05s">
          <div class="text-4xl mb-4">✉️</div>
          <h3 class="text-xl font-bold mb-2">Email</h3>
          <a
            :href="`mailto:${contactData.email}`"
            class="text-cyan-400 hover:text-cyan-300 transition-colors break-all"
          >
            {{ contactData.email }}
          </a>
        </div>

        <!-- Phone Card -->
        <div class="glass rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center animate-fadeInUp" style="animation-delay: 0.15s">
          <div class="text-4xl mb-4">📞</div>
          <h3 class="text-xl font-bold mb-2">Phone</h3>
          <a
            :href="`tel:${contactData.phone}`"
            class="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {{ contactData.phone }}
          </a>
        </div>

        <!-- Location Card -->
        <div class="glass rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center animate-fadeInUp" style="animation-delay: 0.25s">
          <div class="text-4xl mb-4">📍</div>
          <h3 class="text-xl font-bold mb-2">Location</h3>
          <p class="text-gray-400">{{ contactData.location }}</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="max-w-2xl mx-auto" v-if="isVisible">
        <form @submit.prevent="submitForm" class="glass rounded-2xl p-12 animate-fadeInUp" style="animation-delay: 0.2s">
          <!-- Name Field -->
          <div class="mb-8">
            <label class="block text-sm font-semibold mb-3 text-gray-200">Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
              class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
              required
            />
          </div>

          <!-- Email Field -->
          <div class="mb-8">
            <label class="block text-sm font-semibold mb-3 text-gray-200">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
              required
            />
          </div>

          <!-- Subject Field -->
          <div class="mb-8">
            <label class="block text-sm font-semibold mb-3 text-gray-200">Subject</label>
            <input
              v-model="form.subject"
              type="text"
              placeholder="What's this about?"
              class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
              required
            />
          </div>

          <!-- Message Field -->
          <div class="mb-8">
            <label class="block text-sm font-semibold mb-3 text-gray-200">Message</label>
            <textarea
              v-model="form.message"
              placeholder="Your message here..."
              rows="6"
              class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            {{ formSubmitted ? 'Message Sent! ✓' : 'Send Message' }}
          </button>
        </form>

        <!-- Social Links -->
        <div class="mt-16 text-center animate-fadeInUp" style="animation-delay: 0.3s">
          <p class="text-gray-400 mb-6">Or connect with me on social media</p>
          <div class="flex justify-center gap-6">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-16 h-16 glass rounded-full flex items-center justify-center hover:bg-white/20 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 text-2xl"
            >
              {{ getIcon(social.icon) }}
            </a>
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

const contactData = ref(portfolioData.contact)
const socialLinks = ref(portfolioData.social)
const { isVisible, setupObserver } = useScrollReveal()
const formSubmitted = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitForm = () => {
  // In a real application, send the form data to a server
  console.log('Form submitted:', form.value)
  formSubmitted.value = true
  
  // Reset form
  form.value = { name: '', email: '', subject: '', message: '' }
  
  // Reset button after 3 seconds
  setTimeout(() => {
    formSubmitted.value = false
  }, 3000)
}

const getIcon = (iconName) => {
  const icons = {
    github: '🔗',
    linkedin: '💼',
    mail: '📧',
  }
  return icons[iconName] || '🔗'
}

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
