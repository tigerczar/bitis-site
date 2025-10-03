<!-- <template>
  <div class="border rounded-lg p-4 hover:shadow-lg">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover mb-2" />
    <h3 class="font-semibold">{{ product.name }}</h3>
    <p class="text-red-500">{{ product.price }}</p>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script> -->
<template>
  <div class="product-card">
    <img :src="product.image" alt="" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>
