import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [],
  nitro: {
    preset: "azure",
  },
  srcDir: "src",
  typescript: {
    strict: true,
  },
});
