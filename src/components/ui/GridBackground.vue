<template>
  <div :class="['absolute inset-0 z-0', className]" :style="wrapperStyle">
    <div class="absolute inset-0" :style="gridStyle"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  background: {
    type: String,
    default: '#020617',
  },
  gridColor: {
    type: String,
    default: 'rgba(71,85,105,0.15)',
  },
  orbStart: {
    type: String,
    default: 'rgba(236,72,153,0.15)',
  },
  orbMid: {
    type: String,
    default: 'rgba(168,85,247,0.05)',
  },
  orbStop: {
    type: String,
    default: 'transparent',
  },
  gridSize: {
    type: String,
    default: '40px',
  },
})

const wrapperStyle = computed(() => ({
  background: props.background,
}))

const gridStyle = computed(() => ({
  background: props.background,
  backgroundImage: `
    linear-gradient(to right, ${props.gridColor} 1px, transparent 1px),
    linear-gradient(to bottom, ${props.gridColor} 1px, transparent 1px),
    radial-gradient(circle at 50% 60%, ${props.orbStart} 0%, ${props.orbMid} 40%, ${props.orbStop} 70%)
  `,
  backgroundSize: `${props.gridSize} ${props.gridSize}, ${props.gridSize} ${props.gridSize}, 100% 100%`,
}))
</script>
