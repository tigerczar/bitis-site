// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/seo",          
    "@nuxt/image",
  ],

  tailwindcss: {
    viewer: false, 
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 700],
      Roboto: [400, 500, 700],
      Montserrat: [400, 500, 700],
    },
    display: "swap",
    download: true,
  },

  image: {
    format: ["webp", "avif"],
    quality: 70,
    provider: "ipx",
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },

  seo: {
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    indexable: process.env.NODE_ENV === 'production',
    trailingSlash: false,
    canonical: true,
    twitterCard: "summary_large_image",
    meta: {
      title: "Bitis site",
      description: "Website bán giày Bitis",
      themeColor: "#ffffff",
      ogImage: "/images/bitis-logo.svg",
      metaTags: [
        { property: "og:site_name", content: "Bitis site" }
      ],
    },
    robots: {
      rules: [{ userAgent: "*" }],
      sitemap: [
        (process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000") + "/sitemap.xml",
      ],
    },
    sitemap: {
      enabled: true,
      autoI18n: false,
      defaults: { changefreq: 'daily', priority: 0.7 },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "vi" },
      title: "Biti’s Website",
      meta: [
        { charset: "utf-8" },
        { name: "description", content: "Website ecommerce Bitis" },
        { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
      ],
    },
  },

  nitro: {
    storage: {
      data: {
        driver: "vercelKV",
      },
    },
    routeRules: {
      "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
      "/images/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
      "/favicon.ico": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
    },
  },
});
