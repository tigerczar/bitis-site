<template>
  <div>
    <HeroBanner />

    <ProductGrid title="sản phẩm đã xem" :products="newProducts" :showMore="true" />
    <ProductGrid title="quà tặng phái đẹp" :products="newProducts" :showMore="true" />
    <ProductGrid title="sản phẩm mới" :products="newProducts" :showMore="true" />
    <ProductGrid title="sản phẩm nổi bật" :products="newProducts" :showMore="true" />
 
    <BannerAdGroup />
    <BannerAd image="/images/ads/banner-ad-stitch.jpg" alt="Banner Flash Sale" link="/" />
    
    <NewsSection />
    <StoreLocator />
    <Newsletter />
    <BottomAds />
  </div>
</template>

<script setup>
import HeroBanner from "../components/HeroBanner.vue";
import ProductGrid from "../components/ProductGrid.vue";
import BannerAdGroup from "../components/BannerGroupAd.vue";
import BannerAd from "../components/BannerAd.vue";
import NewsSection from "../components/NewsSection.vue";
import StoreLocator from "../components/StoreLocator.vue";
import Newsletter from '../components/Newsletter.vue'
import BottomAds   from '../components/BottomAds.vue'

const newProducts = [
  {
    id: 123,
    name: "Giày Thể Thao Biti's Hunter Street Nữ Màu Xanh HSW011900XAD",
    images: ["/images/products/new-products/p-001-1.jpg", "/images/products/new-products/p-001-2.jpg"],
    price: 715000,
    oldPrice: 880000,
    badge: "Mới",
    size: "5 Size",
    discount: 20,
    sold: 35,
    
  },
  {
    id: 124,
    name: "Giày Thể Thao Biti's Hunter Street Nữ Màu Nâu Đậm HSW011900NAD",
    images: ["/images/products/new-products/p-002-1.jpg", "/images/products/new-products/p-002-2.jpg"],
    price: 715000,
    oldPrice: 880000,
    badge: "Mới",
    size: "6 Size",
    discount: 20,
    sold: 25,
    
  },
  {
    id: 125,
    name: "Giày Thể Thao Biti's Hunter Street Nam Màu Xám Đậm HSM011900XAD",
    images: ["/images/products/new-products/p-003-1.jpg", "/images/products/new-products/p-003-2.jpg"],
    price: 715000,
    oldPrice: 880000,
    badge: "Mới",
    size: "6 Size",
    discount: 20,
    sold: 35,
    
  },
  {
    id: 126,
    name: "Dép Biti's Nữ Màu Tím Lợt BYW001000TIL",
    images: ["/images/products/new-products/p-004-1.jpg", "/images/products/new-products/p-004-2.jpg"],
    price: 395000,
    oldPrice: 410000,
    badge: "Mới",
    size: "4 Size",
    discount: 10,
    sold: 15,
    
  },
  {
    id: 127,
    name: "Dép Biti's Nữ Màu Nâu BYW001000NAU",
    images: ["/images/products/new-products/p-005-1.jpg", "/images/products/new-products/p-005-2.jpg"],
    price: 395000,
    oldPrice: 410000,
    badge: "Mới",
    size: "4 Size",
    discount: 10,
    sold: 25,
    
  },
  {
    id: 128,
    name: "Dép Biti's Nữ Màu Đen BYW001000DEN",
    images: ["/images/products/new-products/p-006-1.jpg", "/images/products/new-products/p-006-2.jpg"],
    price: 395000,
    oldPrice: 410000,
    badge: "Mới",
    size: "4 Size",
    discount: 10,
    sold: 15,
    
  },
  {
    id: 129,
    name: "Giày Tập Đi Biti's Trẻ Em Màu Xanh BSB006200XNH",
    images: ["/images/products/new-products/p-007-1.jpg", "/images/products/new-products/p-007-2.jpg"],
    price: 385000,
    oldPrice: 420000,
    badge: "Mới",
    size: "3 Size",
    discount: 20,
    sold: 55,
    
  },
  {
    id: 130,
    name: "Giày Tập Đi Biti's Trẻ Em Màu Kem BSB006200KEM",
    images: ["/images/products/new-products/p-008-1.jpg", "/images/products/new-products/p-008-2.jpg"],
    price: 385000,
    oldPrice: 420000,
    badge: "Mới",
    size: "3 Size",
    discount: 30,
    sold: 45,
    
  },
  {
    id: 131,
    name: "Dép Biti's Nam Màu Đen BPM003100DEN",
    images: ["/images/products/new-products/p-009-1.jpg", "/images/products/new-products/p-009-2.jpg"],
    price: 350000,
    oldPrice: 430000,
    badge: "Mới",
    size: "5 Size",
    discount: 20,
    sold: 5,
    
  },
  {
    id: 132,
    name: "Dép Biti's Nam Màu Nâu BPM003100NAU",
    images: ["/images/products/new-products/p-010-1.jpg", "/images/products/new-products/p-010-2.jpg"],
    price: 350000,
    oldPrice: 430000,
    badge: "Mới",
    size: "5 Size",
    discount: 20,
    sold: 8,
    
  },
  {
    id: 133,
    name: "Túi Vải Thời Trang Biti’s Nữ Màu Kem BBTW00400KEM",
    images: ["/images/products/new-products/p-011-1.jpg", "/images/products/new-products/p-011-2.jpg"],
    price: 159000,
    oldPrice: 240000,
    badge: "Mới",
    size: "5 Size",
    discount: 20,
    sold: 10,
    
  },
  {
    id: 134,
    name: "Balo Biti's Batman Bé Trai Màu Đen BBBB01899DEN",
    images: ["/images/products/new-products/p-012-1.jpg", "/images/products/new-products/p-012-2.jpg"],
    price: 599000,
    oldPrice: 690000,
    badge: "Mới",
    size: "1 Size",
    discount: 30,
    sold: 30,
    
  },
];

// const featuredProducts = [{  }];
// const topSellingProducts = [{  }];
</script>
