<template>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <ProductCard v-for="p in products" :key="p.id" :product="p" />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
defineProps({ products: Array })
</script>
