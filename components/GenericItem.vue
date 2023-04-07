<script setup lang="ts">
defineProps({
  as: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <component :is="as">
    <slot></slot>
  </component>
</template>
