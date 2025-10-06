<template>
  <section class="bg-[#1859ae] py-6 px-8">
    <div class="w-full max-w-6xl m-0 m-auto flex flex-wrap sm:flex-nowrap ">
        <div class="w-full">
    <h2 class="text-white text-2xl font-semibold flex items-center justify-center md:justify-end gap-3">
       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="24" height="24" x="0" y="0" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M511.969,9.4c-0.184-2.437-1.174-4.868-2.799-6.501c-2.717-2.729-7.252-3.68-10.847-2.211L6.236,200.708 c-3.538,1.438-5.948,4.764-6.212,8.574c-0.264,3.809,1.665,7.436,4.972,9.348l87.408,50.545c0,0,74.511,160.932,74.552,161.02 c3.029,6.542,12.362,7.672,16.872,2.054c0.025-0.031,0.054-0.058,0.078-0.089l59.336-75.761c0,0,93.7,54.184,93.812,54.249 c5.005,2.894,11.954,0.785,14.267-4.877c0,0,159.962-391.876,160.028-392.037C511.889,12.41,512.082,10.904,511.969,9.4z M32.698,211.543L402.331,61.298L101.917,251.57L32.698,211.543z M183.638,307.272c-1.501,1.468-2.647,3.724-2.925,5.854 l-10.118,77.322l-56.816-122.714l313.278-198.42C427.057,69.314,183.763,307.149,183.638,307.272z M190.825,390.884l8.055-60.138 l26.873,15.54L190.825,390.884z M337.136,387.59l-130.091-75.227L342.22,180.22L474.613,50.799L337.136,387.59z" fill="#ffffff" data-original="#000000" class=""></path></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M122.591,389.419c-1.929-1.929-4.5-2.892-7.071-2.892c-2.572,0-5.144,0.965-7.071,2.892c0,0-76.362,76.356-76.384,76.377 c-3.788,3.787-3.899,10.242,0,14.141c3.86,3.86,10.292,3.851,14.143,0l76.383-76.377 C126.492,399.66,126.492,393.32,122.591,389.419z" fill="#ffffff" data-original="#000000" class=""></path></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M10.852,491.148c-5.368,0-10.002,4.669-10.002,10.001c0,5.35,4.497,10,10.001,10.001c5.442,0,10.002-4.57,10.002-10 C20.854,495.867,16.13,491.149,10.852,491.148z" fill="#ffffff" data-original="#000000" class=""></path></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M261.115,416.922c-1.928-1.929-4.499-2.891-7.07-2.891c-2.573,0-5.145,0.965-7.072,2.891l-49.509,49.505 c-3.9,3.901-3.9,10.24-0.001,14.141c3.789,3.789,10.374,3.771,14.143,0l49.509-49.505 C265.016,427.163,265.016,420.823,261.115,416.922z" fill="#ffffff" data-original="#000000" class=""></path></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M76.083,298.91c-3.817-3.817-10.346-3.797-14.143,0c0,0-28.271,28.259-28.295,28.283c-3.861,3.86-3.857,10.293,0,14.15 c1.895,1.895,4.484,2.834,7.072,2.832c2.596-0.002,5.191-0.95,7.082-2.831l28.284-28.293 C79.984,309.151,79.984,302.811,76.083,298.91z" fill="#ffffff" data-original="#000000" class=""></path></g></g><g xmlns="http://www.w3.org/2000/svg"><g><circle cx="176.03" cy="502.001" r="10" fill="#ffffff" data-original="#000000" class=""></circle></g></g><g xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="362.991" r="10" fill="#ffffff" data-original="#000000" class=""></circle></g></g></g></svg>
      Đăng ký nhận bản tin
    </h2>
    <p class="text-white text-center md:text-right text-base">Để nhận các thông tin mới từ Biti's và các chương trình khuyến mãi hấp dẫn</p>
    </div>
    
    <form  class="flex mx-4 w-full h-[45px] mt-1">
      <input
        v-model="email"
        type="email"
        required
        placeholder="Vui lòng nhập email của bạn…"
        class="flex-1 px-1 sm:px-5 py-1 sm:py-3 text-[15px] sm:text-lg rounded-l focus:outline-none"
      />
      <button
        type="submit"
        class="bg-[#1859ae] border-[3px] border-white text-white px-1 sm:px-8 text-[10px] sm:text-lg font-semibold rounded-r">ĐĂNG KÝ</button>
    </form>
    </div>
    <div v-if="success" class="mt-4 text-green-200 text-base font-bold">Cảm ơn bạn đã đăng ký!</div>
    <div v-if="error" class="mt-4 text-red-200 text-base font-bold">{{ error }}</div>
  </section>
</template>

<script setup>
 
</script>
