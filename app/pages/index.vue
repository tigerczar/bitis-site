<template>
  <div>
    <!-- <Header /> -->
    <HeroBanner />
    <ProductGrid :title="'Top bán chạy'" :products="topSellingProducts" />
    <ProductGrid :title="'Sản phẩm mới'" :products="newProducts" />
    <BannerAd />
    <ProductGrid :title="'Sản phẩm nổi bật'" :products="featuredProducts" />
    <NewsSection />
    <StoreLocator />
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
// import Header from '../components/Header.vue'
import HeroBanner from '../components/HeroBanner.vue'
import ProductGrid from '../components/ProductGrid.vue'
import BannerAd from '../components/BannerAd.vue'
import NewsSection from '../components/NewsSection.vue'
import StoreLocator from '../components/StoreLocator.vue'
// import Footer from '../components/Footer.vue'

const topSellingProducts = [
  { id: 1, name: "Giày A", price: "700,000 VND", image: "/shoe1.jpg" },
]

const newProducts = [
  { id: 2, name: "Giày B", price: "1,200,000 VND", image: "/shoe2.jpg" }
  
]

const featuredProducts = [
  { id: 3, name: "Giày C", price: "1,000,000 VND", image: "/shoe3.jpg" }
   
]
</script>


<!-- <template>
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
import StoreMap from '~/components/StoreLocator.vue'

const topProducts = [
  { id: 1, name: "Giày Hunter X", price: "1.200.000đ", image: "/images/shoes1.jpg" },
  { id: 2, name: "Giày Hunter Y", price: "1.000.000đ", image: "/images/shoes2.jpg" },
  // ...
]
const newProducts = topProducts  
const hotProducts = topProducts 

useHead({
  title: 'Biti’s Homepage',
  meta: [
    { name: 'description', content: 'Giày Biti’s nang niu tung buoc chan' }
  ]
})
</script>  -->

