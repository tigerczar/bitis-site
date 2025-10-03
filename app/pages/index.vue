<template>
  <div> 
    <HeroBanner />
    
    <ProductGrid title="sản phẩm đã xem" :products="newProducts" :showMore="true" />
    <ProductGrid title="quà tặng phái đẹp" :products="newProducts" :showMore="true" />
    <ProductGrid title="sản phẩm mới" :products="newProducts" :showMore="true" />
    <ProductGrid title="sản phẩm nổi bật" :products="newProducts" :showMore="true" />

    <!-- <BannerAd /> -->
    <!-- <NewsSection /> -->
    <!-- <StoreLocator /> --> 
  </div>
</template>

<script setup> 
import HeroBanner from "../components/HeroBanner.vue";
import ProductGrid from "../components/ProductGrid.vue";
// import BannerAd from "../components/BannerAd.vue";
// import NewsSection from "../components/NewsSection.vue";
// import StoreLocator from "../components/StoreLocator.vue"; 


const newProducts = [{
  id: 123,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-001-1.jpg","/images/products/new-products/p-001-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
},
{
  id: 124,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-002-1.jpg","/images/products/new-products/p-002-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
},
{
  id: 124,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-003-1.jpg","/images/products/new-products/p-003-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
},
{
  id: 124,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-004-1.jpg","/images/products/new-products/p-004-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
},
{
  id: 124,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-005-1.jpg","/images/products/new-products/p-005-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
},
{
  id: 124,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-006-1.jpg","/images/products/new-products/p-006-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
},
{
  id: 124,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-007-1.jpg","/images/products/new-products/p-007-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
},
{
  id: 124,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-008-1.jpg","/images/products/new-products/p-008-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
},
{
  id: 124,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-009-1.jpg","/images/products/new-products/p-009-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
},
{
  id: 124,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-010-1.jpg","/images/products/new-products/p-010-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
},
{
  id: 124,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-011-1.jpg","/images/products/new-products/p-011-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
},
{
  id: 124,
  name: "Giày Thể Thao ...",
  images: ["/images/products/new-products/p-012-1.jpg","/images/products/new-products/p-012-2.jpg"],
  price: 715000,
  oldPrice: 880000,
  badge: "Mới",
  size: "5 Size",
  discount: 20,
  sold: 25,
  likes: 157
}
];

// const featuredProducts = [{  }];
// const topSellingProducts = [{  }];

</script>
