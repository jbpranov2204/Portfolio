<template>
  <section id="achievements" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Leadership & Community</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Community building and leadership initiatives
        </p>
      </div>

      <div class="flex flex-col gap-16">
        
        <!-- Leadership Section -->
        <div>
          <div>
            <div class="glass rounded-xl p-8 h-full flex flex-col text-left">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center mb-6 border border-cyan-400/30">
                <span class="text-3xl">🎤</span>
              </div>
              
              <h4 class="text-2xl font-bold text-white mb-3">Prompt-O-Mania Organizer</h4>
              
              <p class="text-gray-300 leading-relaxed mb-6">
                Organized and led a competitive generative AI event where <strong class="text-cyan-400">200+ participants</strong> built innovative applications using the Gemini API. 
              </p>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <p class="text-gray-400 text-sm">Provided structured mentorship and hands-on guidance for teams to build generative AI solutions.</p>
                </div>
                <div class="flex items-start gap-3">
                  <p class="text-gray-400 text-sm">Fostered an interactive community ecosystem of AI-driven problem solving.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.gradient-text {
  @apply bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent;
}
</style>
