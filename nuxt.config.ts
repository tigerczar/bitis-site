// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/seo"],
  tailwindcss: {
    viewer: false, 
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
      Roboto: [400, 500, 700],
      Montserrat: [400, 500, 700]
    },
    display: "swap",
    download: true,
  },
  seo: {
    meta: {
      title: "Bitis site",
      description: "Website bán giày Bitis",
      themeColor: "#ffffff",
      ogImage: "/images/bitis-logo.svg",
    }, 
  },
  app: {
    head: {
      title: "Biti’s Website",
      meta: [
        { name: "description", content: "Website ecommerce Bitis" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    },
  },
  nitro: {
    storage: {
      data: {
        driver: "vercelKV", 
      },
    },
  },
});
