<script setup lang="ts">
import GenericItem from "./GenericItem.vue";

defineProps({
  as: {
    type: String,
    default: "h1",
  },
});
</script>

<template>
  <GenericItem
    :as="as"
    class="text-white font-bold block mb-6 text-4xl font-mono"
  >
    <slot></slot>
  </GenericItem>
</template>

<style scoped>
h1 {
  @apply text-4xl;
}
h2 {
  @apply text-3xl;
}
h3 {
  @apply text-2xl;
}
h4 {
  @apply text-xl;
}
h5 {
  @apply text-lg;
}
h6 {
  @apply text-base;
}
</style>
