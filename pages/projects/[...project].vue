<script setup lang="ts">
import Container from "../../components/Container.vue";
import Footer from "../../components/Footer.vue";
import Markdown from "../../components/Markdown.vue";
import Separator from "~~/components/Separator.vue";

import markdown from "../../lib/markdown";
import project from "../../lib/project";

const route = useRoute();
const name = String(route.params.project);

const URL = `https://raw.githubusercontent.com/KaikSelhorst/${name}/main/README.md`;

const html = await markdown(URL);
const projectInfo = await project(name);

useHead({
  meta: [
    {
      name: "description",
      content: `${projectInfo.description}`,
    },
  ],
});
</script>

<template>
  <Container>
    <div
      class="flex justify-between py-4 text-[#ff9cac] font-mono text-sm text-right block underline"
    >
      <a
        :href="projectInfo.homepage"
        target="_blank"
        class="hover:text-white duration-300"
      >
        Project Preview
      </a>
      <NuxtLink to="/" class="hover:text-white duration-300"> Return </NuxtLink>
    </div>
    <Separator class="my-2" />
    <Markdown :markdown="html" />
    <Footer />
  </Container>
</template>
