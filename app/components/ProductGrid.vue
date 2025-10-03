<template>
  <section class="m-0 m-auto w-full max-w-7xl  p-2 md:pt-10">
    <h2 class="text-center font-bold text-lg mb-4 text-[#F00] uppercase tracking-wide">{{ title }}</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <ProductCard v-for="prod in products" :key="prod.id" :product="prod" />
    </div>
    <div v-if="showMore" class="my-4 flex justify-center">
      <!-- <button class="px-5 py-2 rounded font-medium hover:bg-gray-100">Còn nhiều lắm, xem thêm</button> -->
        <NuxtLink to="/" class="p-0 m-0 underline hover:bg-black hover:text-white hover:no-underline">Còn nhiều lắm, xem thêm</NuxtLink>
    </div>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
defineProps({
  title: String,
  products: {
    type: Array,
    required: true
  },
  showMore: Boolean
})
</script>
