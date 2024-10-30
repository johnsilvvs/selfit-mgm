// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width,maximum-scale=1,minimum-scale=1,initial-scale=1",
      title: "Selfriends | Selfit",
      htmlAttrs: {
        lang: "pt-BR"
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        }
      ]
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts"
  ],
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  fonts: {
    families: [{ name: "Montserrat", provider: "google" }],
    defaults: {
      weights: [300, 400, 500, 600, 700, 800],
      styles: ["normal", "italic"]
    }
  },
  plugins: [],
  css: ["@/assets/css/main.css"]
})