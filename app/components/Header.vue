<template>
  <!-- desktop header -->
  <header class="hidden md:block bg-white border-b">
    <!-- topbar -->
    <div class="bg-[#24232A] text-white text-xs flex justify-between items-center px-8 py-1">
      <div class="flex space-x-4">
        <span>Hotline:<NuxtLink to="/" class="pl-2">0966158666</NuxtLink> (8h - 21h30)</span>
        <!-- <span class="border-l border-white/30 pl-4">Liên hệ hợp tác</span> -->
        <NuxtLink to="/" class="border-l border-white/60 pl-4">Liên hệ hợp tác</NuxtLink>

      </div>
      <div class="flex items-center space-x-4">
        <NuxtLink to="/">Tìm cửa hàng</NuxtLink>
        <NuxtLink to="/">Kiểm tra đơn hàng</NuxtLink>
        <img src="~/assets/images/vn-flag.png" alt="VN" class="h-4 ml-2" />
        <select class="bg-transparent text-white">
          <option value="vn">VN</option>
        </select>
        <button class="ml-4 bg-blue-600 rounded px-3 py-1 text-xs font-bold uppercase">Bán hàng B2B</button>
        <!-- <NuxtLink to="/" class="ml-3">
          
        </NuxtLink> -->
      </div>
    </div>
    <!-- main menu -->
    <div class="flex items-center justify-between px-8 py-2">
      <NuxtLink to="/">
        <img src="~/assets/images/bitis-logo.svg" alt="Bitis logo" class="h-12" />
      </NuxtLink>
      <nav class="flex items-center gap-8 uppercase text-[#24232A] text-sm">
        <NuxtLink to="/">Về Biti's</NuxtLink>
        <div class="relative group ">
          <button class="flex items-center gap-1 uppercase">
            Nhãn Hiệu
            <svg class="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path d="M19 9l-7 7-7-7" stroke-width="2"/></svg>
          </button>
          <div class="absolute left-0 mt-2 w-64 bg-white border rounded shadow z-20 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition duration-150">
            <NuxtLink to="/" class="block px-6 py-4 hover:bg-gray-100 border-b">Biti's Hunter</NuxtLink>
            <NuxtLink to="/" class="block px-6 py-4 hover:bg-gray-100 border-b">Gosto</NuxtLink>
            <NuxtLink to="/" class="block px-6 py-4 hover:bg-gray-100 border-b">Êmbrace</NuxtLink>
            <NuxtLink to="/" class="block px-6 py-4 hover:bg-gray-100">Helio By Bitis</NuxtLink>
          </div>
        </div>
        <NuxtLink to="/">NAM</NuxtLink>
        <NuxtLink to="/">NỮ</NuxtLink>
        <NuxtLink to="/">TEEN NAM</NuxtLink>
        <NuxtLink to="/">TEEN NỮ</NuxtLink>
        <NuxtLink to="/">BÉ TRAI</NuxtLink>
        <NuxtLink to="/">BÉ GÁI</NuxtLink>
        <NuxtLink to="/">PHỤ KIỆN</NuxtLink>
        <NuxtLink to="/">CHIA SẺ</NuxtLink>
      </nav>
      <!-- search -->
      <div class="flex items-center gap-4">
        <div class="flex items-center bg-gray-100 px-4 py-[5px] rounded-[5px]">
          <button class="ml-2">
            <svg width="22" height="22" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8" stroke-width="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2" stroke-linecap="round"/></svg>
             <!-- <svg version="1.1" class="svg search" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27" style="enable-background:new 0 0 24 27;" xml:space="preserve"><path d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z"></path><rect x="17" y="17" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)" width="20" height="20" full='none'></rect></svg> -->
          </button>
          <input class="bg-transparent outline-none text-sm px-1" placeholder="Bạn cần tìm gì..." />
          
        </div>
        <NuxtLink to="/">
          <!-- <svg width="24" height="24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4" stroke-width="2"/><path stroke-width="2" d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6"/></svg> -->
           <svg class="svg-ico-account" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M510.702,438.722c-2.251-10.813-12.84-17.754-23.657-15.503c-10.814,2.251-17.755,12.843-15.503,23.656 c1.297,6.229-0.248,12.613-4.236,17.519c-2.31,2.841-7.461,7.606-15.999,7.606H60.693c-8.538,0-13.689-4.766-15.999-7.606 c-3.989-4.905-5.533-11.29-4.236-17.519c20.756-99.695,108.691-172.521,210.24-174.977c1.759,0.068,3.526,0.102,5.302,0.102 c1.782,0,3.556-0.035,5.322-0.103c71.532,1.716,137.648,37.947,177.687,97.66c6.151,9.175,18.574,11.625,27.75,5.474 c9.174-6.151,11.625-18.575,5.473-27.749c-32.817-48.944-80.47-84.534-134.804-102.417C370.538,220.036,392,180.477,392,136 C392,61.01,330.991,0,256,0S120,61.01,120,136c0,44.504,21.488,84.084,54.633,108.911c-30.368,9.998-58.863,25.555-83.803,46.069 c-45.732,37.617-77.529,90.086-89.532,147.742c-3.762,18.067,0.745,36.623,12.363,50.909C25.222,503.847,42.365,512,60.693,512 h390.613c18.329,0,35.472-8.153,47.032-22.369C509.958,475.345,514.464,456.789,510.702,438.722z M160,136 c0-52.935,43.065-96,96-96s96,43.065,96,96c0,51.305-40.455,93.339-91.141,95.878c-1.617-0.03-3.237-0.045-4.859-0.045 c-1.614,0-3.228,0.016-4.84,0.046C200.465,229.35,160,187.312,160,136z" fill="#000000" data-original="#000000"></path></g></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>
        </NuxtLink>
        <NuxtLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="svg-ico-wishlist" version="1.1" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg" id="_1_Heart" data-name="1 Heart"><path d="m256.1 506a25 25 0 0 1 -17.68-7.35l-.2-.2-197.55-197.45c-54.12-54.13-54.12-142.2 0-196.33s142.2-54.12 196.33 0l19.1 19.1 18.9-18.9a138.83 138.83 0 0 1 196.33 0c54.12 54.13 54.12 142.2 0 196.33l-81.22 81.21a25 25 0 0 1 -35.35-35.41l81.24-81.2a88.82 88.82 0 0 0 -125.64-125.61l-36.58 36.58a25 25 0 0 1 -35.36 0l-36.78-36.77a88.82 88.82 0 0 0 -125.64 125.6l180.1 180.07 19.13-19.13a25 25 0 0 1 35.36 35.35l-36.81 36.82a25 25 0 0 1 -17.68 7.29z" fill="#000000" data-original="#000000" class=""/></g></g></svg>
          <!-- <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-2.5 2-4.5 4.5-4.5a5.8 5.8 0 0 1 5.5 3.36A5.8 5.8 0 0 1 17.5 4C20 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 11.18z" stroke-width="2"/></svg> -->
          <span class="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </NuxtLink>
        <NuxtLink to="/">
          <!-- <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M3 3h2l.344 4M7 13h10l4-8H5.344L7 13zM16 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" stroke-width="2"/>
        </svg> -->
        <svg class="svg-ico-cart" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"width="24" height="24" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2"><path d="m16 17.82a6 6 0 0 1 -5.89-4.82 1 1 0 0 1 1-1.15 1 1 0 0 1 1 .83 4 4 0 0 0 7.83 0 1 1 0 0 1 1-.83 1 1 0 0 1 1 1.15 6 6 0 0 1 -5.94 4.82z" fill="#000000" data-original="#000000" class=""></path><path d="m24.9 31h-17.8a3 3 0 0 1 -3-3.15l.81-17.24a3 3 0 0 1 3-2.87h16.18a3 3 0 0 1 3 2.87l.81 17.24a3 3 0 0 1 -3 3.15zm-16.99-21.25a1 1 0 0 0 -1 1l-.81 17.2a1 1 0 0 0 1 1.05h17.8a1 1 0 0 0 1-1.05l-.81-17.24a1 1 0 0 0 -1-1z" fill="#000000" data-original="#000000" class=""></path><path d="m22 8.75h-2v-1.75a4 4 0 0 0 -8 0v1.75h-2v-1.75a6 6 0 0 1 12 0z" fill="#000000" data-original="#000000" class=""></path></g></g></svg>
        <span class="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </NuxtLink>
      </div>
    </div>
  </header>

  <!-- mobile header -->
  <header class="md:hidden bg-white border-b">
    <div class="flex items-center justify-between px-4 py-2">
      <button @click="drawer = true">
        <!-- <svg width="32" height="32" fill="none" stroke="currentColor"><rect y="7" width="32" height="3" rx="1.5"/><rect y="14" width="32" height="3" rx="1.5"/><rect y="21" width="32" height="3" rx="1.5"/></svg> -->
         <svg  width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 12L4 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
      </button>
      <img src="~/assets/images/vn-flag.svg" alt="VN" class="h-5"/>
      <span class="ml-1">VN</span>
      <NuxtLink to="/">
        <img src="~/assets/images/bitis-logo.svg" alt="Bitis logo" class="h-8 mx-2"/>
      </NuxtLink>
      <div class="flex gap-3">
        <NuxtLink to="/"><svg width="24" height="24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4" stroke-width="2"/><path stroke-width="2" d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6"/></svg></NuxtLink>
        <NuxtLink to="/" class="relative"><svg width="24" height="24" fill="none" stroke="currentColor"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-2.5 2-4.5 4.5-4.5a5.8 5.8 0 0 1 5.5 3.36A5.8 5.8 0 0 1 17.5 4C20 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 11.18z" stroke-width="2"/></svg>
          <span class="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </NuxtLink>
        <NuxtLink to="/"><svg width="24" height="24" fill="none" stroke="currentColor"><path d="M3 3h2l.344 4M7 13h10l4-8H5.344L7 13zM16 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" stroke-width="2"/>
        </svg>
        <span class="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </NuxtLink>
      </div>
    </div>
    <div class="relative">
      <input class="w-full py-3 px-2 pl-4 pr-12 text-lg bg-gray-100 rounded" placeholder="Bạn cần tìm gì..." />
      <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white w-11 h-11 flex items-center justify-center rounded">
        <svg width="22" height="22" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8" stroke-width="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>

    <!-- drawer menu -->
    <transition name="fade">
      <div v-if="drawer" class="fixed inset-0 bg-black/50 z-50" @click.self="drawer = false">
        <aside class="fixed top-0 left-0 bg-white h-full w-72 max-w-full flex flex-col z-50">
          <div class="flex items-center justify-between p-4 border-b">
            <button @click="drawer = false">
              <svg width="26" height="26" fill="none" stroke="currentColor"><path d="M6 6l14 14M20 6L6 20" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <img src="~/assets/images/bitis-logo.svg" alt="Bitis logo" class="h-7"/>
            <span></span>
          </div>
          <nav class="flex-1 overflow-y-auto divide-y uppercase">
            <NuxtLink to="/" class="block px-6 py-4">VỀ BITI'S</NuxtLink>
            <!-- accordion -->
            <button @click="toggle('brands')" class="w-full flex justify-between items-center px-6 py-4">
              Nhãn Hiệu
              <svg :class="{'rotate-90': openDrop==='brands'}" class="duration-150" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9l6 6 6-6" stroke-width="2"></path></svg>
            </button>
            <div v-if="openDrop==='brands'" class="bg-gray-50">
              <NuxtLink to="/" class="block px-8 py-3">BITI'S HUNTER</NuxtLink>
              <NuxtLink to="/" class="block px-8 py-3">GOSTO</NuxtLink>
              <NuxtLink to="/" class="block px-8 py-3">ÊMBRACE</NuxtLink>
              <NuxtLink to="/" class="block px-8 py-3">HELIO BY BITIS</NuxtLink>
            </div>
            <NuxtLink to="/" class="block px-6 py-4">NAM</NuxtLink>
            <NuxtLink to="/" class="block px-6 py-4">NỮ</NuxtLink>
            <NuxtLink to="/" class="block px-6 py-4">Teen nam</NuxtLink>
            <NuxtLink to="/" class="block px-6 py-4">Teen nữ</NuxtLink>
            <NuxtLink to="/" class="block px-6 py-4">BÉ TRAI</NuxtLink>
            <NuxtLink to="/" class="block px-6 py-4">BÉ GÁI</NuxtLink>
            <NuxtLink to="/" class="block px-6 py-4">PHỤ KIỆN</NuxtLink>
            <NuxtLink to="/" class="block px-6 py-4">CHIA SẺ</NuxtLink>
            <button class="my-4 mx-6 border-2 border-blue-400 bg-white text-blue-600 w-full rounded py-2 font-bold flex items-center justify-center gap-2">
              BÁN HÀNG B2B
            </button>
          </nav>
        </aside>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)
const openDrop = ref('')
function toggle(v) {
  openDrop.value = (openDrop.value === v ? '' : v)
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s }
.fade-enter-from, .fade-leave-to { opacity:0 }

@media (min-width:768px) {
  .md\:block { display:block }
  .md\:hidden { display:none }
}
</style>