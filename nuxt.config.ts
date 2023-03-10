// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/index.css"],
  app: {
    head: {
      title: "Nothing to see here",
      link: [
        {
          rel: "shortcut icon",
          href: "https://avatars3.githubusercontent.com/u/82120356?s=32",
        },
      ],
      meta: [
        {
          name: "description",
          content: "My Portfolio!",
        },
        {
          name: "keywords",
          content: "KaikSelhorst, web-developer,Developer,Front-End",
        },
        {
          name: "author",
          content: "Kaik Selhorst",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
