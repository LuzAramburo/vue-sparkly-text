<script lang="ts">
export default { name: 'VueSparklyText' }
</script>

<script setup lang="ts">
import SparkleSVG from "./SparkleSVG.vue";
import {toRefs} from "vue";

const props = withDefaults(defineProps<{
  size?: number
}>(), {
  size: 16
})

const {size} = toRefs(props)

const generateRandomTimeout = () => Math.floor(Math.random() * (3200 - 2200) + 2200);
</script>

<template>
  <div class="container">
    <slot></slot>
    <SparkleSVG :size="size" />
    <SparkleSVG :size="size" :timeout="generateRandomTimeout()" />
    <SparkleSVG :size="size" :timeout="generateRandomTimeout()" />
    <SparkleSVG :size="size" :timeout="generateRandomTimeout()" />
    <SparkleSVG :size="size" :timeout="generateRandomTimeout()" />
  </div>
</template>

<style scoped>
.container {
  display: inline-block;
  position: relative;
  width: max-content;
  font-weight: bolder;
}
</style>
