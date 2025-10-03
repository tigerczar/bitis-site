<!-- <template>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <ProductCard v-for="p in products" :key="p.id" :product="p" />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
defineProps({ products: Array })
</script> -->
<template>
  <section class="product-grid">
    <h2>{{ title }}</h2>
    <div class="grid">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  title: String,
  products: Array
})
</script>
