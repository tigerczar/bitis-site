<template>
  <div>
    <HeroBanner />

    <section class="container mx-auto py-8">
      <h2 class="text-xl font-bold mb-4">TOP YÊU THÍCH</h2>
      <ProductGrid :products="topProducts" />
    </section>

    <section class="container mx-auto py-8">
      <h2 class="text-xl font-bold mb-4">SẢN PHẨM MỚI</h2>
      <ProductGrid :products="newProducts" />
    </section>

    <section class="container mx-auto py-8">
      <h2 class="text-xl font-bold mb-4">SẢN PHẨM NỔI BẬT</h2>
      <ProductGrid :products="hotProducts" />
    </section>

    <NewsSection />
    <StoreMap />
  </div>
</template>

<script setup>
import HeroBanner from '~/components/HeroBanner.vue'
import ProductGrid from '~/components/ProductGrid.vue'
import NewsSection from '~/components/NewsSection.vue'
import StoreMap from '~/components/StoreMap.vue'

const topProducts = [
  { id: 1, name: "Giày Hunter X", price: "1.200.000đ", image: "/images/shoes1.jpg" },
  { id: 2, name: "Giày Hunter Y", price: "1.000.000đ", image: "/images/shoes2.jpg" },
  // ...
]
const newProducts = topProducts  
const hotProducts = topProducts 
</script>
