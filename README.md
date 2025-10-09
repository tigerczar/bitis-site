# Bitis site

**Live demo:** [https://bitis-site.vercel.app](https://bitis-site.vercel.app)  

---

## Overview Tech

- **Nuxt 4** 
- **TypeScript**
- **TailwindCSS**
- **@nuxtjs/seo** 
- **@nuxt/image**
- **@nuxtjs/google-fonts**
- **@heroicons/vue**
- **Vitest**, **@vue/test-utils**
- **Vercel** (Cloud Hosting & CDN)

---

## Libraries

- **UI:** TailwindCSS
- **SEO & Social:** Nuxt SEO Kit, sitemap.xml/robots.txt
- **Images:** Nuxt Image 
- **Fonts:** Google Fonts  
- **Testing:** Vitest, Vue Test Utils, jsdom

## Testing

- Unit/component tests with Vitest and Vue Test Utils.
- Logger & NuxtLink are globally mocked in test files.
- Coverage: drawer/menu, search, language selector, topbar links, more.

---

## SEO & Performance

- Full meta config (Open Graph, Twitter card, favicon, robots, sitemap.xml).
- Auto image conversion (WebP/AVIF) & responsive sizes.
- Google Fonts loaded with font-display: swap for fast rendering.
- Lighthouse-optimized (lazyload images, HTTP caching, chunk splitting).

### Check report SEO & Performance with Lighthouse:

[Link Report](https://pagespeed.web.dev/analysis/https-bitis-site-vercel-app/dspiz0ml6t?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext)

![screencapture](https://raw.githubusercontent.com/tigerczar/bitis-site/main/public/images/seo-reports/screencapture-pagespeed-251009.jpg)
---


# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```
bash
# npm
npm install

# pnpm
pnpm install  
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev 
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build 
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview 
```

## Testing

Run Vitest for testing:

```bash
# npm
npm run test

# pnpm
pnpm run test 

# npx
npx vitest run
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


---

