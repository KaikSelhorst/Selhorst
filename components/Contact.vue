<script setup lang="ts">
const socials = [
  {
    label: "Email",
    name: "oficial@kaikselhorst.com",
    link: "mailto:oficial@kaikselhorst.com",
  },
  {
    label: "LinkedIn",
    name: "@KaikSelhorst",
    link: "https://www.linkedin.com/in/Kaikselhorst/",
  },
  {
    label: "Github",
    name: "@KaikSelhorst",
    link: "https://github.com/KaikSelhorst",
  },
  {
    label: "Discord",
    name: "@Bseven#4712",
    link: "https://discord.com/users/690249250067841031",
  },
];
</script>

<template>
  <ul class="grid gap-2 mt-4">
    <li
      v-for="social in socials"
      :id="social.label"
      class="text-base leading-6 font-mono"
    >
      <span class="text-[#d7dae1]">{{ social.label }}: </span>
      <a
        :href="social.link"
        class="text-[#ff9cac] underline hover:text-white duration-300"
        target="_blank"
      >
        {{ social.name }}
      </a>
    </li>
  </ul>
</template>
