<script setup lang="ts">
import {onUnmounted, ref, toRefs} from "vue";

const props = withDefaults(defineProps<{
  size: number;
  timeout?: number
}>(), {
  timeout: 1000
})

const {size, timeout} = toRefs(props)

const showSparkle = ref(false)
const color = ref("#000000")

const interval = setInterval(() => {
  showSparkle.value = !showSparkle.value
  color.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`
}, timeout.value)

onUnmounted(() => clearInterval(interval))
</script>

<template>
  <svg
      v-if="showSparkle"
      viewBox="0 0 1200 1200"
      :fill="color"
      :width="`${size}px`"
      :height="`${size}px`"
      :style="{
        // 'animation-duration': timeout / 2 +'ms',
        transform: `rotateZ(50deg) scale(${1 + Math.random() * 0.5})`,
        // generate random between -20 / 20
        top: `calc(${Math.floor(Math.random() * 41) - 20}px)`,
        // generate random between -20 / 120
        left: `calc(${Math.floor(Math.random() * 121) - 20}%)`,
      }"
  >
    <path
        d="m611.04 866.16c17.418-61.09 50.25-116.68 95.352-161.42 45.098-44.742 100.94-77.133 162.17-94.062l38.641-10.68-38.641-10.68c-61.227-16.93-117.07-49.32-162.17-94.062-45.102-44.738-77.934-100.33-95.352-161.42l-11.039-38.641-11.039 38.641c-17.418 61.09-50.25 116.68-95.352 161.42-45.098 44.742-100.94 77.133-162.17 94.062l-38.641 10.68 38.641 10.68c61.227 16.93 117.07 49.32 162.17 94.062 45.102 44.738 77.934 100.33 95.352 161.42l11.039 38.641z"/>
  </svg>
</template>

<style scoped>
svg {
  position: absolute;
  opacity: 0;
  animation: sparkle-animation-x 0.5s ease-in-out infinite alternate;
}

@keyframes sparkle-animation-x {
  0% {
    opacity: 0;
    transform: scale(0.25);
  }
  100% {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  svg {
  animation: none;
  opacity: 1;
  transform: rotateZ(30deg) scale(1);
  }
}
</style>
