<script setup lang="ts">
import Markdown from "~~/components/Markdown.vue";
import Separator from "~~/components/Separator.vue";
import Container from "~~/components/Container.vue";
import Footer from "~~/components/Footer.vue";

import markdown from "~~/lib/markdown";
import daysAgo from "~~/helpers/daysAgo";

const post = useRoute().params.post[0];

const URL = `https://raw.githubusercontent.com/KaikSelhorst/SelhorstPosts/main/${post}/data.md`;
const html = await markdown(URL);

const URL_HEAD = `https://raw.githubusercontent.com/KaikSelhorst/SelhorstPosts/main/${post}/head.json`;
const { data: head } = await useFetch(URL_HEAD);
const headParse = typeof head.value === "string" ? JSON.parse(head.value) : "";

useHead({
  meta: [...headParse.meta],
});
</script>

<template>
  <Container>
    <div class="flex py-4 font-mono text-sm block justify-between items-center">
      <span class="text-[#d7dae1]">
        Released {{ daysAgo(headParse.date) }} days ago
      </span>
      <NuxtLink
        to="/"
        class="hover:text-white duration-300 text-[#ff9cac] underline"
      >
        Return
      </NuxtLink>
    </div>
    <Separator class="my-2" />
    <Markdown :markdown="html" />
    <Footer />
  </Container>
</template>
