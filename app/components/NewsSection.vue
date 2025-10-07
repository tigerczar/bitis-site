<template>
  <section class="my-8 w-full max-w-7xl m-0 m-auto p-3 ">
    <h2 class="text-black text-sm md:text-xl  mb-6">TIN TỨC BITIS</h2>
    <div class="flex flex-col md:flex-row gap-6">
      <div v-for="news in newsList" :key="news.id" class="news-card bg-white shadow overflow-hidden flex-1 flex flex-col  hover:shadow-lg transition">
        <NuxtLink to="/"><img :src="news.image" :alt="news.title" class="w-full h-48 object-cover" /></NuxtLink>
        <div class="flex-1 p-4 flex flex-col justify-between">
          <div>
            <NuxtLink to="/"><h3 class="news-title mb-2 text-sm md:text-lg leading-tight line-clamp-2 hover:text-[#1b4ea0]">{{ news.title }}</h3></NuxtLink>
            <div class="news-summary text-gray-500 text-sm mb-2 line-clamp-2">{{ news.summary }}</div>
          </div>
          <div class="flex justify-between items-center text-xs text-gray-500 mt-2">
            <span>{{ news.date }}</span>
            <NuxtLink :to="news.link" class="font-medium text-gray-700 hover:underline">Xem thêm</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const newsList = [
  {
    id: 1,
    image: '/images/news/article-img-01.jpg',
    title: 'BITIS LÀ ĐẠI DIỆN VIỆT NAM DUY NHẤT ĐƯỢC VINH DANH TẠI HẠNG MỤC "INVESTMENT IN PEOPLE" (ĐẦU TƯ VÀO CON NGƯỜI) - GIẢI THƯỞNG ASIA RESPONSIBLE ENTERPRISE AWARDS (AREA) 2025',
    summary: 'Dự án kiến tạo văn hoá hạnh phúc tại Bitis - đã được xướng tên tại AREA 2025, một trong những giải thưởng uy tín hàng đầu khu vực Châu Á - Thái Bình Dương nhằm tôn vinh các doanh nghiệp có đóng góp nổi bật về trách nhiệm xã hội, do Enterprise Asia sáng lập từ năm 2011',
    date: '07/07/2025',
    link: '/'
  },
  {
    id: 2,
    image: '/images/news/article-img-02.jpg',
    title: 'Bitis “tiết lộ” bí mật vận hành tinh gọn tại nhà máy 43 năm tuổi',
    summary: 'Trong khuôn khổ hội thảo “Hợp nhất Lean và Đổi mới: Lộ trình Vận hành Xuất sắc trong Tương lai,',
    date: '07/07/2025',
    link: '/'
  },
  {
    id: 3,
    image: '/images/news/article-img-03.jpg',
    title: 'BITIS ĐƯỢC VINH DANH LÀ DOANH NGHIỆP TIÊU BIỂU CÓ THƯƠNG HIỆU',
    summary: 'Bitis vinh dự được xướng tên trong danh sách 50 Doanh nghiệp tiêu biểu có thương hiệu và sản phẩm chủ lực TP. HCM',
    date: '07/07/2025',
    link: '/'
  },
  {
    id: 4,
    image: '/images/news/article-img-04.jpg',
    title: 'BITIS GIỮ VỮNG DANH HIỆU HÀNG VIỆT NAM CHẤT LƯỢNG CAO 29 NĂM LIÊN TIẾP',
    summary: 'Chiều ngày 25/03, tại Lễ Công bố Hàng Việt Nam Chất Lượng Cao (HVNCLC) 2025, Bitis tự hào được vinh danh là một trong 562 doanh nghiệp đạt chứng nhận do người tiêu dùng bình chọn',
    date: '07/07/2025',
    link: '/'
  }
]
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
