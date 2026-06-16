<template>
  <section id="contact" ref="sectionRef" class="py-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-slideUp" v-if="isVisible">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Let's <span class="gradient-text">Collaborate</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          {{ contactData.message }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start" v-if="isVisible">
        
        <!-- Left: Contact Info -->
        <div class="space-y-8 animate-fadeInLeft">

          <div class="space-y-6">
            <!-- Contact Cards -->
            <div class="flex items-center gap-6 p-6 rounded-2xl bg-gray-900 border border-gray-800">
              <div class="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-cyan-400 text-2xl flex-shrink-0">
                ✉️
              </div>
              <div class="text-left">
                <p class="text-sm text-gray-400 font-medium mb-1">Email</p>
                <a :href="`mailto:${contactData.email}`" class="text-lg text-white font-semibold break-all hover:text-cyan-400 transition-colors">
                  {{ contactData.email }}
                </a>
              </div>
            </div>

            <div class="flex items-center gap-6 p-6 rounded-2xl bg-gray-900 border border-gray-800">
              <div class="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 text-2xl flex-shrink-0">
                📞
              </div>
              <div class="text-left">
                <p class="text-sm text-gray-400 font-medium mb-1">Phone</p>
                <a :href="`tel:${contactData.phone}`" class="text-lg text-white font-semibold hover:text-purple-400 transition-colors">
                  {{ contactData.phone }}
                </a>
              </div>
            </div>

            <div class="flex items-center gap-6 p-6 rounded-2xl bg-gray-900 border border-gray-800">
              <div class="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 text-2xl flex-shrink-0">
                📍
              </div>
              <div class="text-left">
                <p class="text-sm text-gray-400 font-medium mb-1">Location</p>
                <p class="text-lg text-white font-semibold">{{ contactData.location }}</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Right: Interactive Form -->
        <div class="space-y-8 animate-fadeInRight">

          <form 
            @submit.prevent="submitForm" 
            class="p-8 md:p-10 rounded-3xl bg-gray-900 border border-gray-800 text-left"
          >
            <div class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div>
                  <label for="name" class="block text-sm font-semibold mb-2 text-gray-300 text-left">Your Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    id="name"
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Name"
                    required
                  />
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-semibold mb-2 text-gray-300 text-left">Email Address</label>
                  <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-semibold mb-2 text-gray-300 text-left">Subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  id="subject"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Subject"
                  required
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-semibold mb-2 text-gray-300 text-left">Your Message</label>
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="5"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 resize-none"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div class="flex justify-center pt-4">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 bg-gradient-to-r from-blue-500 to-cyan-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  :class="{'!from-green-500 !to-green-400 !shadow-green-500/50': formSubmitted}"
                >
                  <span v-if="isSubmitting">Sending...</span>
                  <span v-else-if="formSubmitted">SUBMITTED</span>
                  <span v-else>Send Message</span>
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'
import { useScrollReveal } from '../composables/useAnimations'
import { portfolioData } from '../utils/data'

const contactData = ref(portfolioData.contact)
const socialLinks = ref(portfolioData.social)
const { isVisible, setupObserver } = useScrollReveal()
const sectionRef = ref(null)

const formSubmitted = ref(false)
const isSubmitting = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

console.log('SERVICE:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
console.log('TEMPLATE:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
console.log('PUBLIC:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

const submitForm = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  
  // Simulate network request
  try {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )

  formSubmitted.value = true

  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  setTimeout(() => {
    formSubmitted.value = false
  }, 4000)

  } catch (error) {
    console.error('EmailJS Error:', error)

    alert(
      JSON.stringify(error, null, 2)
    )
  } finally {
    isSubmitting.value = false
  }
}

const getIcon = (iconName) => {
  const icons = {
    github: '🔗',
    linkedin: '💼',
    mail: '📧',
  }
  return icons[iconName] || '🔗'
}

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
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fadeInLeft {
  animation: fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fadeInRight {
  animation: fadeInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
