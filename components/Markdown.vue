<script setup lang="ts">
import "highlight.js/styles/atom-one-dark.css";

defineProps({
  markdown: {
    type: String,
    require: true,
  },
});
</script>

<template>
  <article v-html="markdown" class="markdown"></article>
</template>

<style>
.markdown {
  @apply text-[#D7DAE1];
}
.markdown :is(h1, h2, h3, h4, h5, h6) {
  @apply text-white font-bold block mt-6 mb-2;
}
.markdown h1 {
  @apply text-4xl;
}
.markdown h2 {
  @apply text-3xl;
}
.markdown h3 {
  @apply text-2xl;
}
.markdown h4 {
  @apply text-xl;
}
.markdown h5 {
  @apply text-lg;
}
.markdown h6 {
  @apply text-base;
}
.markdown p {
  @apply text-[#D7DAE1] my-2;
}

.markdown table {
  display: block;
  @apply overflow-auto;
}
.markdown table th {
  font-weight: 600;
  @apply text-[#ffffff];
}

.markdown table th,
.markdown table td {
  padding: 6px 13px;
  border: 1px solid;
  @apply border-[#191919];
}

.markdown table tr {
  @apply bg-[#090909] border-[#191919];
  border-top: 1px solid;
}

.markdown table tr:nth-child(2n) {
  @apply bg-[#090909];
}

.markdown table img {
  background-color: transparent;
}

.markdown img[align="right"] {
  padding-left: 20px;
}

.markdown img[align="left"] {
  padding-right: 20px;
}

.markdown a {
  @apply text-[#ff9cac] duration-300;
}
.markdown a:hover {
  @apply text-white;
}
.markdown pre {
  @apply bg-[#090909] p-4 my-6 overflow-auto rounded-sm;
}

.markdown :is(ul, li) {
  list-style: square;
  list-style-position: inside;
}
</style>
