<template>
  <div
    class="flip-card"
    @mouseenter="isFlipped = true"
    @mouseleave="isFlipped = false"
  >
    <div class="flip-card-inner" :class="{ flipped: isFlipped }">
      <!-- FRONT: Image + Title -->
      <div class="flip-card-front">
        <div class="card-image-wrapper">
          <img
            :src="project.image"
            :alt="project.title"
            class="card-image"
          />
          <div class="image-overlay"></div>
        </div>
        <div class="card-front-content">
          <h3 class="card-title">{{ project.title }}</h3>
          <div class="tech-pills">
            <span
              v-for="tech in project.technologies?.slice(0, 3)"
              :key="tech"
              class="tech-pill"
            >
              {{ tech }}
            </span>
            <span v-if="project.technologies?.length > 3" class="tech-pill tech-pill-more">
              +{{ project.technologies.length - 3 }}
            </span>
          </div>
          <div class="flip-hint">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 1l4 4-4 4"/>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
              <path d="M7 23l-4-4 4-4"/>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
            <span>Hover to explore</span>
          </div>
        </div>
        <!-- Featured badge -->
        <div v-if="project.featured" class="featured-badge">
          <span class="featured-dot"></span>
          Featured
        </div>
      </div>

      <!-- BACK: Description + Links -->
      <div class="flip-card-back">
        <div class="back-content">
          <div class="back-header">
            <h3 class="back-title">{{ project.title }}</h3>
            <div class="back-divider"></div>
          </div>

          <p class="back-description">{{ project.description }}</p>

          <div class="back-tech-list">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="back-tech-pill"
            >
              {{ tech }}
            </span>
          </div>

          <div class="back-links">
            <a
              v-if="project.github && project.github !== '#'"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="back-link back-link-code"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
            <a
              v-if="project.modelCode"
              :href="project.modelCode"
              target="_blank"
              rel="noopener noreferrer"
              class="back-link back-link-model"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              Model
            </a>
            <a
              v-if="project.live && project.live !== '#'"
              :href="project.live"
              target="_blank"
              rel="noopener noreferrer"
              class="back-link back-link-demo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Demo
            </a>
          </div>
        </div>

        <!-- Decorative corner glow -->
        <div class="back-glow-tl"></div>
        <div class="back-glow-br"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const isFlipped = ref(false)
</script>

<style scoped>
.flip-card {
  perspective: 1200px;
  height: 100%;
  min-height: 380px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1);
  transform-style: preserve-3d;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 1rem;
  overflow: hidden;
}

/* ───── FRONT ───── */
.flip-card-front {
  display: flex;
  flex-direction: column;
  background: rgba(3, 7, 18, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.card-image-wrapper {
  position: relative;
  height: 60%;
  overflow: hidden;
  background: rgba(3, 7, 18, 0.9);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), filter 0.7s ease;
}

.flip-card:hover .flip-card-front .card-image {
  transform: scale(1.08);
  filter: brightness(0.6);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(3, 7, 18, 0.95) 0%,
    rgba(3, 7, 18, 0.3) 40%,
    transparent 100%
  );
}

.card-front-content {
  padding: 1.25rem 1.5rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  margin: 0 0 1.2rem 0;
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tech-pill {
  font-size: 0.65rem;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  background: rgba(6, 182, 212, 0.12);
  color: rgba(103, 232, 249, 0.85);
  border: 1px solid rgba(6, 182, 212, 0.2);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 500;
}

.tech-pill-more {
  background: rgba(147, 51, 234, 0.12);
  color: rgba(192, 132, 252, 0.85);
  border-color: rgba(147, 51, 234, 0.25);
}

.flip-hint {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: auto;
  font-size: 0.7rem;
  color: rgba(156, 163, 175, 0.6);
  letter-spacing: 0.03em;
  transition: color 0.3s ease;
}

.flip-card:hover .flip-hint {
  color: rgba(103, 232, 249, 0.7);
}

.featured-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(192, 132, 252, 0.9);
  background: rgba(88, 28, 135, 0.45);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(147, 51, 234, 0.3);
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 2;
}

.featured-dot {
  width: 6px;
  height: 6px;
  background: #c084fc;
  border-radius: 50%;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* ───── BACK ───── */
.flip-card-back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    145deg,
    rgba(3, 7, 18, 0.92) 0%,
    rgba(15, 23, 42, 0.92) 50%,
    rgba(30, 10, 60, 0.85) 100%
  );
  backdrop-filter: blur(16px);
  border: 1px solid rgba(6, 182, 212, 0.15);
  position: relative;
  box-sizing: border-box;
}

.back-content {
  padding: 1.5rem;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  position: relative;
  z-index: 1;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.back-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.back-title {
  font-size: 1.15rem;
  font-weight: 700;
  background: linear-gradient(135deg, #67e8f9, #818cf8, #c084fc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  line-height: 1.3;
}

.back-divider {
  height: 2px;
  width: 3rem;
  background: linear-gradient(to right, #06b6d4, #8b5cf6);
  border-radius: 1px;
}

.back-description {
  font-size: 0.82rem;
  color: rgba(209, 213, 219, 0.85);
  line-height: 1.6;
  margin: 0;
  flex: 1 1 0;
  min-height: 0;
  overflow-y: auto;
}

/* Custom scrollbar for description */
.back-description::-webkit-scrollbar {
  width: 3px;
}
.back-description::-webkit-scrollbar-track {
  background: transparent;
}
.back-description::-webkit-scrollbar-thumb {
  background: rgba(6, 182, 212, 0.3);
  border-radius: 3px;
}

.back-tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.back-tech-pill {
  font-size: 0.62rem;
  padding: 0.18rem 0.55rem;
  border-radius: 9999px;
  background: rgba(99, 102, 241, 0.1);
  color: rgba(165, 180, 252, 0.85);
  border: 1px solid rgba(99, 102, 241, 0.2);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 500;
}

.back-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.5rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.01em;
}

.back-link-code {
  background: rgba(31, 41, 55, 0.8);
  color: #e5e7eb;
  border: 1px solid rgba(75, 85, 99, 0.4);
}
.back-link-code:hover {
  background: rgba(55, 65, 81, 0.9);
  border-color: rgba(107, 114, 128, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.back-link-model {
  background: rgba(51, 65, 85, 0.7);
  color: #cbd5e1;
  border: 1px solid rgba(71, 85, 105, 0.4);
}
.back-link-model:hover {
  background: rgba(71, 85, 105, 0.9);
  border-color: rgba(100, 116, 139, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.back-link-demo {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.85), rgba(59, 130, 246, 0.85));
  color: #fff;
  border: 1px solid rgba(6, 182, 212, 0.3);
}
.back-link-demo:hover {
  background: linear-gradient(135deg, rgba(6, 182, 212, 1), rgba(59, 130, 246, 1));
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.35);
}

/* ───── Decorative glows ───── */
.back-glow-tl {
  position: absolute;
  top: -30px;
  left: -30px;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.15), transparent 70%);
  pointer-events: none;
}

.back-glow-br {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.12), transparent 70%);
  pointer-events: none;
}

/* ───── Responsive ───── */
@media (max-width: 640px) {
  .flip-card {
    min-height: 350px;
  }

  .card-front-content {
    padding: 1rem 1.25rem 0.75rem;
  }

  .back-content {
    padding: 1.25rem;
    gap: 0.65rem;
  }

  .back-title {
    font-size: 1.05rem;
  }

  .back-description {
    font-size: 0.78rem;
  }
}
</style>
