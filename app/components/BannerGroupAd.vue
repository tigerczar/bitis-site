<template>
  <section class="my-8">
    <h2 class="text-center font-bold tracking-wide text-lg mb-5">CHÚNG TÔI CÓ GÌ MỚI</h2>
    <!-- Responsive -->
    <div class="flex flex-col gap-5 md:flex-row md:gap-8 items-center md:justify-center">
      <BannerAd
        v-for="(banner, i) in banners"
        :key="i"
        :image="banner.image"
        :alt="banner.alt"
        :link="banner.link"
        class="w-full md:w-1/3"
      />
    </div>
  </section>
</template>

<script setup>
import BannerAd from './BannerAd.vue'
const banners = [
  {
    image: '/images/ads/ad-g-01.jpg',
    alt: 'Giày Tennis',
    link: '/san-pham/tennis'
  },
  {
    image: '/images/ads/ad-g-02.jpg',
    alt: 'Giày Tây Nam',
    link: '/san-pham/giay-tay'
  },
  {
    image: '/images/ads/ad-g-03.jpg',
    alt: 'Gấu chú tâm sandal',
    link: '/san-pham/sandal'
  }
]
</script>

<style scoped>
/* Đảm bảo ảnh luôn bo góc và đẹp */
.BannerAd img {
  border-radius: 12px;
  box-shadow: 0 0 0 1px #eee;
}
</style>
