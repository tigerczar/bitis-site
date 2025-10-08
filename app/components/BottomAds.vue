<template>
  <section class="bg-white">
    <div class="flex flex-wrap justify-center w-full">
      <div v-for="(ad, idx) in ads" :key="idx" class="flex-1 sm:min-w-[12.5%] min-w-[25%] shadow hover:shadow-lg overflow-hidden  ">
        <a v-if="ad.link" :href="ad.link" target="_blank" rel="noopener">
          <img :src="ad.image" :alt="ad.alt" class="object-cover w-full h-full transition hover:scale-105 duration-300" loading="lazy" decoding="async" />
        </a>
        <img v-else :src="ad.image" :alt="ad.alt" class="object-cover w-full h-full" loading="lazy" decoding="async" />
      </div>
    </div>
  </section>
</template>

<script setup>
const ads = [
  { image: "/images/ads/ad-b/ad-b-01.jpg", alt: "balo", link: "/" },
  { image: "/images/ads/ad-b/ad-b-02.jpg", alt: "effortless", link: "/" },
  { image: "/images/ads/ad-b/ad-b-03.jpg", alt: "embrace", link: "/" },
  { image: "/images/ads/ad-b/ad-b-04.jpg", alt: "elise", link: "/" },
  { image: "/images/ads/ad-b/ad-b-05.jpg", alt: "helio", link: "/" },
  { image: "/images/ads/ad-b/ad-b-06.jpg", alt: "litebound", link: "/" },
  { image: "/images/ads/ad-b/ad-b-07.jpg", alt: "ucare", link: "/" },
  { image: "/images/ads/ad-b/ad-b-08.jpg", alt: "shoes", link: "/" },
];
</script>
