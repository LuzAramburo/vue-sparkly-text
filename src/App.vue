<script setup lang="ts">
import SparkleContainer from "./components/SparkleContainer.vue";
</script>

<template>
  <SparkleContainer :size="30">
    <div class="example">vue-sparkly-text</div>
  </SparkleContainer>
  <div>
    Lorem ipsum dolor sit amet,
    <SparkleContainer>consectetur</SparkleContainer>
    adipisicing elit.
  </div>
</template>

<style scoped>
.example {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
