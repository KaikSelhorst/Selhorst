<script setup lang="ts">
import GenericItem from "./GenericItem.vue";
import capitalize from "../helpers/capitalize";

defineProps({
  post: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <GenericItem
    as="li"
    class="text-[#d7dae1] font-mono cursor-pointer hover:bg-[#1e1e1e] duration-300 linear flex items-center my-2 px-4"
  >
    <NuxtLink class="flex-1 py-4 flex justify-between" :to="`/posts/${post}`">
      <span>
        {{
          capitalize(
            post
              .replace(/^\d{4}-/gi, "")
              .split("-")
              .join(" ")
          )
        }}
      </span>
      <span class="text-[#ff9cac]">➔</span>
    </NuxtLink>
  </GenericItem>
</template>
