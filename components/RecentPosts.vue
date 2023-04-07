<script setup lang="ts">
import Title from "./Title.vue";
import PostItemList from "./PostItemList.vue";

const { data: posts } = await useFetch(
  "https://api.github.com/repos/KaikSelhorst/SelhorstPosts/contents"
);
if (posts.value && posts.value instanceof Array) {
  posts.value = posts.value.map((post) => post.name);
}
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
