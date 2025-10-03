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
      <nav class="flex items-center gap-8 font-semibold uppercase text-[#24232A] text-sm">
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
        <div class="flex items-center bg-gray-100 px-4 py-2 rounded-full">
          <input class="bg-transparent outline-none text-sm" placeholder="Bạn cần tìm gì..." />
          <button class="ml-2">
            <svg width="22" height="22" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8" stroke-width="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
        </div>
        <NuxtLink to="/"><svg width="24" height="24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4" stroke-width="2"/><path stroke-width="2" d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6"/></svg></NuxtLink>
        <NuxtLink to="/"><svg width="24" height="24" fill="none" stroke="currentColor"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-2.5 2-4.5 4.5-4.5a5.8 5.8 0 0 1 5.5 3.36A5.8 5.8 0 0 1 17.5 4C20 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 11.18z" stroke-width="2"/></svg>
          <span class="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </NuxtLink>
        <NuxtLink to="/"><svg width="24" height="24" fill="none" stroke="currentColor"><path d="M3 3h2l.344 4M7 13h10l4-8H5.344L7 13zM16 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" stroke-width="2"/>
        </svg>
        <span class="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </NuxtLink>
      </div>
    </div>
  </header>

  <!-- mobile header -->
  <header class="md:hidden bg-white border-b">
    <div class="flex items-center justify-between px-4 py-2">
      <button @click="drawer = true">
        <svg width="32" height="32" fill="none" stroke="currentColor"><rect y="7" width="32" height="3" rx="1.5"/><rect y="14" width="32" height="3" rx="1.5"/><rect y="21" width="32" height="3" rx="1.5"/></svg>
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
            <!-- Accordion menu -->
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