export default async function () {
  const b = "https://api.github.com/repos/KaikSelhorst/SelhorstPosts/contents";
  const { data: posts } = await useFetch(b);

  if (posts.value && posts.value instanceof Array) {
    posts.value = posts.value.map((post) => post.name);

    posts.value = (posts.value as Array<string>).sort((a, b) => {
      const idA = Number(a.split("_")[0]);
      const idB = Number(b.split("_")[0]);

      return idB - idA;
    });

    return posts.value;
  }

  return [];
}
