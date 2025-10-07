<template>
  <footer class="bg-white border-t pt-8 border border-2">
    <!-- Desktop layout -->
    <div class="hidden md:grid grid-cols-4 max-w-7xl mx-auto gap-2 px-6 pb-8">
      <div>
        <div class="font-semibold mb-4 text-lg">VỀ BITI'S</div>
        <ul class="space-y-2 text-gray-700 text-[13px]">
          <li><a href="#">Câu chuyện Biti's</a></li>
          <li><a href="#">Hoạt Động</a></li>
          <li><a href="#">Liên hệ</a></li>
        </ul>
      </div>

      <div>
        <div class="font-semibold mb-4 text-lg">THÔNG TIN</div>
        <ul class="space-y-2 text-gray-700 text-[13px]">
          <li>Trạng thái đơn hàng</li>
          <li>Hình thức giao hàng</li>
          <li>Hình thức thanh toán</li>
          <li>Hướng dẫn cách chọn Size</li>
          <li>Chính sách đổi Size</li>
          <li>Chính sách đổi trả</li>
          <li>Chính sách bảo hành</li>
          <li>Chính sách khách hàng thân thiết</li>
          <li>Chính sách bảo vệ thông tin khách hàng</li>
        </ul>
      </div>

      <div>
        <div class="font-semibold mb-4 text-lg">TRỢ GIÚP</div>
        <ul class="space-y-2 text-gray-700 text-[13px]">
          <li>Tuyển Dụng</li>
          <li>Hệ thống cửa hàng</li>
          <li>Liên hệ hợp tác</li>
          <li>Q&A</li>
        </ul>
       
         <!-- B2B Button -->
        <button class="mt-4 p-0 bg-transparent border-none w-[160px]"> 
          <img class="rounded-[40px]" src="/images/b2b-button-img.jpg" alt="b2b button">
        </button>

      </div>
      <div>
        <div class="mb-4 pt">
          <img src="/images/bitis-logo.svg" alt="Bitis logo" class="w-[110px] mb-2" />
        </div>
        <div class="text-gray-700 text-">
          <h5>CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG BÌNH TIÊN</h5><br />
          Địa chỉ: 22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP. Hồ Chí Minh<br />
          Điện thoại: <a class="text-[#2972e7] underline" href="tel:02838753443">(028) 38 753 443</a><br />
          Email: <a class="text-[#2972e7] underline" href="mailto:chamsockhachhang@bitis.com.vn">chamsockhachhang@bitis.com.vn</a><br />
          Hotline: <a class="text-[#2972e7] underline" href="tel:0966158666">0966158666</a><br />
          Thời gian tư vấn: 8h – 21h30 các ngày trong tuần (trừ ngày Lễ, Tết)
        </div>
      </div>
    </div>

    <!-- accordion footer (mobile) -->
    <div class="md:hidden px-4 pb-6">
      <div v-for="(section, i) in mobileSections" :key="i" class="border-b last:border-b-0 py-3">
        <button class="flex items-center w-full justify-between text-lg" @click="toggle(i)">
          {{ section.title }}
          <svg :class="{ 'rotate-180': openIdx === i }" width="24" height="24" fill="none" stroke="#111"><path d="M8 10l4 4 4-4" stroke-width="2" /></svg>
        </button>
        <ul v-if="openIdx === i" class="mt-2 space-y-2 text-[13px] text-gray-700">
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ul>
        <!-- <ul v-if="openIdx === i" class="mt-2 space-y-2 text-base text-gray-700">
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ul> -->
      </div>
      <div class="border-b last:border-b-0 py-3">
        <button class="flex items-center w-full justify-between text-lg" @click="toggle(i)">
          Thông tin địa chỉ
          <svg :class="{ 'rotate-180': openIdx === i }" width="24" height="24" fill="none" stroke="#111"><path d="M8 10l4 4 4-4" stroke-width="2" /></svg>
        </button>
        <transition name="transition">
          <div class="mb-4" v-if="openIdx === i">
            <img src="/images/bitis-logo.svg" alt="Biti's logo" class="h-10 mb-2" />
            <div class="text-gray-700 text-base">
              <h5>CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG BÌNH TIÊN</h5><br />
              <p class="text-[13px]">
                Địa chỉ: 22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP. Hồ Chí Minh<br />
              Điện thoại: <a class="text-[#2972e7]" href="tel:02838753443">(028) 38 753 443</a><br />
              Email: <a class="text-[#2972e7]" href="mailto:chamsockhachhang@bitis.com.vn">chamsockhachhang@bitis.com.vn</a><br />
              Hotline: <a class="text-[#2972e7]" href="tel:0966158666">0966158666</a><br />
              Thời gian tư vấn: 8h – 21h30 các ngày trong tuần (trừ ngày Lễ, Tết)
              </p>
            </div>
          </div>
        </transition>
      </div> 
    </div>

    <!-- Thanh thông tin bản quyền/giấy phép dưới cùng -->
    <div class="bg-gray-200 text-black py-4 px-2 text-center text-sm flex flex-col-reverse sm:flex-row  items-center justify-between gap-5">
      <div class="sm:w-[33%] w-full">
        <ul class="flex sm:justify-between items-center justify-center gap-2 pb-4 md:pb-1">
          <li>Điều khoản</li>
          <li>Chính sách bảo mật</li>
          <li> Hướng dẫn sử dụng</li>
        </ul>
        <span class="ml-4 p-5">Copyright © 2025 Biti's. Powered by Haravan Enterprise</span>
      </div>

      <div class="sm:w-[33%] w-full flex justify-center items-center">
        <img class="max-w-[100px]" src="/images/bocongthuong-certi.png" alt="">
      </div>

      <div class="sm:w-[33%] w-full leading-6">Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992, được sửa đổi lần thứ 25 ngày 27/01/2022 bởi Sở Kế hoạch và Đầu tư TPHCM</div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const openIdx = ref(null);
function toggle(idx) {
  openIdx.value = openIdx.value === idx ? null : idx;
}

const mobileSections = [
  {
    title: "VỀ BITI'S",
    items: ["Câu chuyện Biti's", "Hoạt động", "Liên hệ"],
  },
  {
    title: "THÔNG TIN",
    items: ["Trạng thái đơn hàng", "Hình thức giao hàng", "Hình thức thanh toán", "Hướng dẫn cách chọn Size", "Chính sách đổi Size", "Chính sách đổi trả", "Chính sách bảo hành", "Chính sách khách hàng thân thiết", "Chính sách bảo vệ thông tin khách hàng"],
  },
  {
    title: "TRỢ GIÚP",
    items: ["Tuyển Dụng", "Hệ thống cửa hàng", "Liên hệ hợp tác", "Q&A"],
  },
  // {
  //   title: "Thông tin địa chỉ",
  //   items: [
  //     "CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG BÌNH TIÊN",
  //     "22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP. Hồ Chí Minh",
  //     "Điện thoại: (028) 38 753 443",
  //     "Email: chamsockhachhang@bitis.com.vn",
  //     "Hotline: 0966158666",
  //     "Tư vấn: 8h – 21h30 các ngày trong tuần (trừ Lễ, Tết)"
  //   ]
  // }
];
</script>

<style scoped></style>
