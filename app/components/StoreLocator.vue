<template>
  <section class="my-8 max-w-7xl m-0 m-auto p-3">
    <h2 class="text-black text-sm md:text-xl mb-6">HỆ THỐNG CỬA HÀNG BITIS</h2>
    <div class="flex flex-col md:flex-row gap-6">
      <!-- List location -->
      <div class="md:w-96 w-full">
        <select data-test="city-select" v-model="selectedProvince" class="w-full border rounded px-3 py-2 mb-3">
          <option value="">Tất cả</option>
          <option v-for="pr in provinces" :key="pr" :value="pr">{{ pr }}</option>
        </select>
        <div class="bg-white rounded shadow p-4 h-[480px] flex-shrink-0 overflow-auto">
          <ul>
            <li v-for="store in filteredStores" :key="store.id" data-test="store-item" class="py-2 border-b last:border-b-0">
             <NuxtLink to="/">
               <div class="flex items-center gap-2 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="18" height="18" x="0" y="0" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" class="">
                  <g>
                    <g xmlns="http://www.w3.org/2000/svg">
                      <g><path d="M256,0C166.035,0,91,72.47,91,165c0,35.202,10.578,66.592,30.879,96.006l121.494,189.58 c5.894,9.216,19.372,9.198,25.254,0l122.021-190.225C410.512,232.28,421,199.307,421,165C421,74.019,346.981,0,256,0z M256,240 c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75c41.353,0,75,33.647,75,75C331,206.353,297.353,240,256,240z" fill="#1b4ea0" data-original="#000000" class=""></path></g>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                      <g><path d="M373.264,344.695l-75.531,118.087c-19.551,30.482-64.024,30.382-83.481,0.029l-75.654-118.085 C72.034,360.116,31,388.309,31,422c0,58.462,115.928,90,225,90s225-31.538,225-90C481,388.285,439.909,360.077,373.264,344.695z" fill="#1b4ea0" data-original="#000000" class=""></path></g>
                    </g>
                  </g>
                </svg>
                <span class="font-semibold text-sm text-blue-700">{{ store.name }}</span>
              </div>
              <div class="text-xs text-gray-600">
                {{ store.address }}
              </div>
             </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- GG Map -->
      <div class="flex-1 min-h-[400px] bg-gray-100 rounded shadow overflow-hidden">
        <iframe :src="mapSrc" width="100%" height="480" class="border-0 w-full h-[480px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import {Logger} from '../utils/logger'
const stores = [
  {
    id: 1,
    name: "CH Chợ Lớn - Quận 6 - HCM",
    address: "56 - 58 - 60 - 62 Tháp Mười, Phường 2, Quận 6, Thành phố Hồ Chí Minh",
    province: "Hồ Chí Minh",
    lat: 10.749,
    lng: 106.641,
  },
  {
    id: 2,
    name: "CH 594 Thống Nhất - Gò Vấp - HCM",
    address: "594 Thống Nhất, Phường 16, Quận Gò Vấp, Thành phố Hồ Chí Minh",
    province: "Hồ Chí Minh",
    lat: 10.838,
    lng: 106.668,
  },
  {
    id: 3,
    name: "CH 242 Huỳnh Tấn Phát - Nhà Bè - HCM",
    address: "1848 Huỳnh Tấn Phát, Xã Phú Xuân, Huyện Nhà Bè, Thành phố Hồ Chí Minh",
    province: "Hồ Chí Minh",
    lat: 10.749,
    lng: 106.641,
  },
  {
    id: 4,
    name: "CH 54C Xô Viết Nghệ Tĩnh - Bình Thạnh - HCM",
    address: "54C Xô Viết Nghệ Tĩnh, Phường 19, Quận Bình Thạnh, Thành phố Hồ Chí Minh",
    province: "Hồ Chí Minh",
    lat: 10.838,
    lng: 106.668,
  },
  {
    id: 5,
    name: "CH chuyên Bitti's Thanh Trì",
    address: "số 69 (Ngã 3 Yên Xá), Đường 70, Tân Triều, Thanh Trì, Hà Nội.",
    province: "Hà Nội",
    lat: 10.749,
    lng: 106.641,
  },
  {
    id: 6,
    name: "CH 09 Hàm Nghi -Thanh Khê - Đà Nẵng",
    address: "09 Hàm Nghi, Phường Vĩnh Trung, Quận Thanh Khê, Thành phố Đà Nẵng",
    province: "Đà Nẵng",
    lat: 10.838,
    lng: 106.668,
  },
];
const provinces = [...new Set(stores.map((x) => x.province))];
const selectedProvince = ref("");
const filteredStores = computed(() => (selectedProvince.value ? stores.filter((x) => x.province === selectedProvince.value) : stores));

const mapSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1959.9296004389316!2d106.630362!3d10.745333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7f6a83325f%3A0x6657f975fcb4512d!2zxJAuIENo4bujIEzhu5tuLCBwaMaw4budbmcgMTEsIFF14bqtbiA2LCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1759668151416!5m2!1sen!2sus";

function selectStore(store) {
  Logger.info('User select store', store)
 }

function onFilterProvince(province) {
  Logger.debug('User filter province', { province })
}


</script>
