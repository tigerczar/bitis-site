<template>
  <!-- <div class="group relative bg-white rounded shadow-sm border p-3 flex flex-col"> -->
  <div class="bg-white border shadow-sm p-3 flex flex-col relative hover:shadow-lg transition group" @mouseenter="hover = true" @mouseleave="hover = false">
    <!-- favorite -->
    <div class="absolute right-0 top-2 flex flex-row-reverse justify-between gap-1 z-10 p-2 w-full">
      <button class="text-gray-400 hover:text-red-500">
        <img class="w-[20px]" src="~/assets/images/favorite-icon.svg" alt="" />
      </button>
      <span v-if="product.badge" class="bg-green-600 text-white text-xs px-2 py-0.5 rounded-lg font-semibold">{{ product.badge }}</span>
    </div>
   
    <!-- images -->
    <!-- <img :src="product.image" :alt="product.name" class="w-full h-80 object-contain mb-2" /> -->
    <NuxtLink to="/" class="w-full h-80 relative select-none mb-2 rounded">
      <img :src="currentImage" :alt="product.name" class="w-full h-full object-contain absolute left-0 top-0 transition-opacity duration-300" :class="{ 'opacity-100': !hover, 'opacity-0': hover }" draggable="false" />
      <img v-if="product.images[1]" :src="product.images[1]" :alt="product.name + ' hover'" class="w-full h-full object-contain absolute left-0 top-0 transition-opacity duration-300" :class="{ 'opacity-0': !hover, 'opacity-100': hover }" draggable="false" />
    </NuxtLink>
    <div class="flex flex-col flex-1">
      <div class="flex justify-between items-center gap-2 text-xs">
        <div class="text-xs text-black-500 mb-1">{{ product.size || "5" }} Size</div>
        <div class="text-xs text-black-500 mb-1">{{ product.size || "2" }} Color</div>
      </div>
      <NuxtLink to="/" class="mb-1 leading-snug text-[15px]">{{ product.name }}</NuxtLink>
      
      <!-- bottom info -->
      <div class="flex justify-between flex-wrap items-center gap-2 text-xs">
        <div class="inline sm:block">
           <span class="text-lg"> {{ product.price.toLocaleString() }} đ </span>
          <span v-if="product.oldPrice" class="font-normaltext-black line-through ml-2"> {{ product.oldPrice.toLocaleString() }} đ </span>
          <!-- discount -->
          <span v-if="product.discount" class="text-[#e71a3c] mb-1 p-[2px] border border-red-600 bg-[#ffe9ea]">-{{ product.discount }}%</span>
        </div>
        <span class="text-red inline sm:block" v-if="product.sold">Đã bán: {{ product.sold }}</span>
      </div>
    </div>
  </div>
</template>

<script setup> 
const props = defineProps({ product: Object });

// hover on desktop
const hover = ref(false);
const currentImage = computed(() => (props.product.images && props.product.images.length ? props.product.images[0] : props.product.image));
</script>
