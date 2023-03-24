<script setup lang="ts">
import { computed } from "vue";

const items = [
  {
    title: "Merken",
    msg: "Merken is an excellent application for working with markdown files. It offers an instant preview of modifications, as well as various configuration options such as themes and font families. Merken is also known for its ease of use and ability to keep track of all modifications, making it much easier to collaborate with others.",
  },
  {
    title: "SmiteCLI",
    msg: "SmiteCLI is a command line interface for Smite, which is an online arena game. SmiteCLI allows users to search for the best in-game god builds, quickly and easily displaying the recommended builds for all gods in Smite. SmiteCLI helps make building your team easier, saving time and effort along the way. SmiteCLI can help even the most novice players find the perfect god builds.",
  },
  {
    title: "GONORD",
    msg: "Gonord is an CLI (Command Line Interface) designed to make the already existing ImageGoNord CLI much more user friendly. It functions by allowing users to quickly and easily replace colors of images with colors of themes they have selected.",
  },
];

const templateItemList = (
  { title, msg }: { title: string; msg: string },
  i: number
) => {
  const t = `
  <li class='hover:bg-[#090909] duration-300 p-4 my-2'>
    <a href='/projects/${title}'>
      <h3 class="text-[#ff9cac] mb-1">${i}.  ${title}<h3>
      <p class="text-[#D7DAE1]">${msg}</p>
    </a>
  </li>
  `;
  return t;
};

const itemsList = computed(() => items.map(templateItemList).join(""));
</script>

<template>
  <ul v-html="itemsList" class="font-mono"></ul>
</template>
