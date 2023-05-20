<script setup lang="ts">
import Title from "./Title.vue";
import PostItemList from "./PostItemList.vue";

import Posts from "~~/lib/posts";

const posts = await Posts();
</script>

<template>
  <Title>Recent Post</Title>
  <ol>
    <PostItemList
      :post="post"
      v-for="post in posts"
      class="before:content-['*'] before:mr-2 before:text-[#ff9cac] before:inline-block"
    />
  </ol>
</template>
