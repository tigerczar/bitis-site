<template>
  <div class="w-full my-6 flex justify-center ">
    <a class="w-full" v-if="link" :href="link" target="_blank" rel="noopener">
      <img
        :src="image"
        :alt="alt"
        class=" hover:scale-[1.03] transition w-full object-cover"
      />
    </a> 
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  alt: { type: String, default: 'Banner quảng cáo' },
  link: { type: String, default: '' }
})
</script>
