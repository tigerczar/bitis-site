<template>
  <section class="bg-white">
    <div class="flex flex-wrap justify-center w-full">
      <div v-for="(ad, idx) in ads" :key="idx" class="flex-1 sm:min-w-[12.5%] min-w-[25%] md:flex-none shadow hover:shadow-lg overflow-hidden aspect-[4/3] md:aspect-[1/1] bg-white flex items-center justify-center" style="max-width: 220px">
        <a v-if="ad.link" :href="ad.link" target="_blank" rel="noopener">
          <img :src="ad.image" :alt="ad.alt" class="object-cover w-full h-full transition hover:scale-105 duration-300" />
        </a>
        <img v-else :src="ad.image" :alt="ad.alt" class="object-cover w-full h-full" />
      </div>
    </div>
  </section>
</template>

<script setup>
const ads = [
  { image: "/images/ads/ad-b/ad-b-01.png", alt: "Balo", link: "/" },
  { image: "/images/ads/ad-b/ad-b-02.png", alt: "Effortless", link: "/" },
  { image: "/images/ads/ad-b/ad-b-03.png", alt: "Embrace", link: "/" },
  { image: "/images/ads/ad-b/ad-b-04.png", alt: "Elise", link: "/" },
  { image: "/images/ads/ad-b/ad-b-05.png", alt: "Helio", link: "/" },
  { image: "/images/ads/ad-b/ad-b-06.png", alt: "Litebound", link: "/" },
  { image: "/images/ads/ad-b/ad-b-07.jpg", alt: "Ucare", link: "/" },
  { image: "/images/ads/ad-b/ad-b-08.jpg", alt: "Shoes", link: "/" },
];
</script>
