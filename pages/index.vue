<script setup lang="ts">
import Title from "~~/components/Title.vue";
import Text from "~/components/Text.vue";
import Separator from "~~/components/Separator.vue";
import ListProjects from "~~/components/ListProjects.vue";
import RecentPosts from "~~/components/RecentPosts.vue";
import Contact from "~~/components/Contact.vue";
import Footer from "~~/components/Footer.vue";
</script>

<template>
  <article class="relative pt-4">
    <Title>About</Title>
    <Text>
      I'm a web developer, with programming experience using TypeScript, Vue.js,
      Svelte and NodeJS. I recently worked on an application called Merken that
      allows you to automatically preview Markdown files on separate desktops.
      Furthermore, I also developed two CLI tools: SmiteCLI and GONORD CLI, both
      using NodeJS. I'm always looking for exciting new projects to work on and
      I'm excited to be part of new development teams.
    </Text>
    <Separator />
    <Title>Cool Projects</Title>
    <ListProjects />
    <Separator />
    <RecentPosts />
    <Separator />
    <Title>Contact</Title>
    <Text
      >Feel free to reach out via any of the following platforms below:</Text
    >
    <Contact />
    <Footer />
  </article>
</template>
