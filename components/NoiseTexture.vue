<script setup lang="ts"></script>

<template>
  <svg id="texture">
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency=".8"
        numOctaves="4"
        stitchTiles="stitch"
      ></feTurbulence>
      <feColorMatrix type="saturate" values="0"></feColorMatrix>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)"></rect>
  </svg>
</template>

<style scoped>
#texture {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.2;
  pointer-events: none;
  transform: translateY(0);
  filter: contrast(10%) brightness(40%);
}
</style>
