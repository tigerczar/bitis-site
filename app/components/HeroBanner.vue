
<template>
  <div class="relative w-full overflow-hidden">

    <img
      :src="isMobile ? banners[curIndex].mobile : banners[curIndex].desktop"
      :alt="'Banner ' + (curIndex+1)"
      class="w-full object-cover transition-all duration-500"
      :class="[isMobile ? 'h-[540px]' : 'h-[430px] md:h-[480px] lg:h-[600px]']"
    />
    <!-- arrow btn control -->
    <button v-if="!isMobile" @click="prev" class="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full z-20">
      <svg width="28" height="28" fill="none" stroke="currentColor"><path d="M16 20l-8-8 8-8" stroke-width="2"/></svg>
    </button>
    <button v-if="!isMobile" @click="next" class="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full z-20">
      <svg width="28" height="28" fill="none" stroke="currentColor"><path d="M12 4l8 8-8 8" stroke-width="2"/></svg>
    </button>
    <!-- dot control -->
    <div class="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-3">
      <button
        v-for="(banner, i) in banners"
        :key="'dot'+i"
        @click="curIndex = i"
        class="w-4 h-4 rounded-full border transition bg-white"
        :class="curIndex === i ? 'border-black bg-black' : 'opacity-30'"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const banners = [
  {
    desktop: "/images/hero-images/hero-slide-01.jpg",
    mobile: "/images/hero-images/hero-slide-01-m.jpg"
  },
   {
    desktop: "/images/hero-images/hero-slide-02.jpg",
    mobile: "/images/hero-images/hero-slide-02-m.jpg"
  },
   {
    desktop: "/images/hero-images/hero-slide-03.jpg",
    mobile: "/images/hero-images/hero-slide-03-m.jpg"
  },
   {
    desktop: "/images/hero-images/hero-slide-04.jpg",
    mobile: "/images/hero-images/hero-slide-04-m.jpg"
  },
   {
    desktop: "/images/hero-images/hero-slide-05.jpg",
    mobile: "/images/hero-images/hero-slide-05-m.jpg"
  }
]
const curIndex = ref(0)
const isMobile = ref(false)
let interval = null

function handleResize() {
  isMobile.value = window.innerWidth < 768
}
onMounted(() => {
  handleResize()
  window.addEventListener("resize", handleResize)
  interval = setInterval(() => {
    next()
  }, 5000)
})
onUnmounted(() => {
  clearInterval(interval)
  window.removeEventListener("resize", handleResize)
})

function next() {
  curIndex.value = (curIndex.value + 1) % banners.length
}
function prev() {
  curIndex.value = (curIndex.value - 1 + banners.length) % banners.length
}
</script>
