// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/index.scss" as *;',
        },
      },
    },
  },
  srcDir: "src/",
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
