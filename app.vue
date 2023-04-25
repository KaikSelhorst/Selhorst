<script setup lang="ts">
import Container from "~/components/Container.vue";
import NoiseTexture from "~/components/NoiseTexture.vue";
</script>
<template>
  <main class="min-h-screen bg-black p-4 md:p-2">
    <Container class="z-10">
      <NuxtPage />
    </Container>
    <NoiseTexture />
  </main>
</template>
