<template>
  <!-- <div class="group relative bg-white rounded shadow-sm border p-3 flex flex-col"> -->
    <div
    class="bg-white border rounded-lg shadow-sm p-3 flex flex-col relative hover:shadow-lg transition group"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- favorite -->
    <div class="absolute right-0 top-2 flex flex-row-reverse justify-between gap-1 z-10 p-2 w-full">
      <button class="text-gray-400 hover:text-red-500">
        <img class="w-[20px]" src="~/assets/images/favorite-icon.svg" alt="">
      </button>
      <span v-if="product.badge" class="bg-green-600 text-white text-xs px-2 py-0.5 rounded-lg font-semibold">{{ product.badge }}</span>
    </div>
    <!-- product images -->
    <!-- <img :src="product.image" :alt="product.name" class="w-full h-80 object-contain mb-2" /> -->
     <div class="w-full h-80 relative select-none mb-2 rounded">
      <img
        :src="currentImage"
        :alt="product.name"
        class="w-full h-full object-contain absolute left-0 top-0 transition-opacity duration-300"
        :class="{'opacity-100': !hover, 'opacity-0': hover}"
        draggable="false"
      />
      <img
        v-if="product.images[1]"
        :src="product.images[1]"
        :alt="product.name + ' hover'"
        class="w-full h-full object-contain absolute left-0 top-0 transition-opacity duration-300"
        :class="{'opacity-0': !hover, 'opacity-100': hover}"
        draggable="false"
      />
    </div>
    <div class="flex flex-col flex-1">
      <!-- name -->
      <div class="font-semibold mb-1 leading-snug text-sm">{{ product.name }}</div>
      <!-- price -->
      <div class="font-bold mb-1 text-red-600">
        {{ product.price.toLocaleString() }} đ
        <span v-if="product.oldPrice" class="font-normal text-xs text-gray-400 line-through ml-2"> {{ product.oldPrice.toLocaleString() }} đ </span>
      </div>
      <!-- size and color -->
      <div class="text-xs text-gray-500 mb-1">Size: {{ product.size || "5 Size" }}</div>
      <!-- discount -->
      <div v-if="product.discount" class="text-xs text-orange-600 font-bold mb-1">-{{ product.discount }}%</div>
      <!-- like -->
      <div class="flex gap-2 text-xs text-gray-500">
        <span v-if="product.sold">Đã bán: {{ product.sold }}</span>
        <span v-if="product.likes">Yêu thích: {{ product.likes }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// defineProps({
//   product: {
//     type: Object,
//     required: true,
//   },
// });

const props = defineProps({ product: Object })

// hover on desktop
const hover = ref(false)
const currentImage = computed(() =>
  props.product.images && props.product.images.length ? props.product.images[0] : props.product.image
)
</script>
