<template>
  <div class="electric-border-container" :style="cssVars">
    <div class="electric-border-mask">
      <div class="electric-border-glow"></div>
      <div class="electric-border-glow-chaos" v-if="chaos > 0"></div>
    </div>
    <div class="electric-border-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: '#3b82f6'
  },
  speed: {
    type: Number,
    default: 1.2
  },
  chaos: {
    type: Number,
    default: 0.2
  },
  thickness: {
    type: Number,
    default: 1
  }
})

const cssVars = computed(() => ({
  '--border-color': props.color,
  '--border-thickness': `${props.thickness}px`,
  '--anim-speed': `${props.speed}s`,
  '--chaos-speed': `${props.speed * 0.7}s`,
  '--chaos-opacity': props.chaos
}))
</script>

<style scoped>
.electric-border-container {
  position: relative;
  border-radius: inherit;
  z-index: 1;
}

.electric-border-content {
  position: relative;
  z-index: 2;
  height: 100%;
  border-radius: inherit;
}

.electric-border-mask {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: var(--border-thickness);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  overflow: hidden;
  pointer-events: none;
  z-index: 3; /* Render on top of the glass edge */
}

.electric-border-glow {
  position: absolute;
  inset: -150%;
  width: 400%;
  height: 400%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    transparent 70%,
    var(--border-color) 90%,
    transparent 100%
  );
  animation: spin var(--anim-speed) linear infinite;
  transform-origin: center center;
}

.electric-border-glow-chaos {
  position: absolute;
  inset: -150%;
  width: 400%;
  height: 400%;
  background: conic-gradient(
    from 180deg,
    transparent 0%,
    transparent 80%,
    var(--border-color) 95%,
    transparent 100%
  );
  opacity: var(--chaos-opacity);
  animation: spinReverse var(--chaos-speed) linear infinite;
  transform-origin: center center;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spinReverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
