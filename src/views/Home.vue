<script setup>
import Event from '@/components/Event.vue';
import Issues from '@/components/Issues.vue';
import Other from '@/components/Other.vue';
import Footer from '@/components/Footer.vue';
import Advocate from '@/components/Advocate.vue';

import { ref } from 'vue';
</script>
<template>
  <!-- 首屏 候選人slogan、照片 -->
  <div
    class="main-wrap bg-white pt-16 flex items-center flex-col justify-center xl:pt-20"
  >
    <div
      class="main-title title-gradient text-5xl font-ManTouSans flex justify-center text-center flex-col xl:flex-row xl:text-8xl xl:gap-4"
    >
      <span>台灣的明天</span>
      <span>喵先鋪路</span>
    </div>
    <div class="info-wrap flex flex-col xl:flex-row items-center my-5">
      <div
        class="info-title text-lg flex items-center p-4 m-3 rounded-lg bg-slate-700"
      >
        <div class="text-white">2024 立委參選人</div>
      </div>
      <div
        class="info-subtitle flex p-4 rounded-lg shadow bg-white items-center xl:text-4xl font-bold primary-theme-1"
      >
        <img src="@/assets/icon/num.svg" class="pr-2" alt="參選號碼" /> 喵立翰
        Miao Li-Han
      </div>
    </div>
    <div class="flex relative xl:w-1/2">
      <!-- 手機版社群連結 -->
      <div
        class="bg-white w-52 rounded-3xl flex p-5 items-center justify-around absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2 lg:hidden"
      >
        <a class="pr-5" href="##">
          <img src="../assets/icon/fb.svg" alt="FB" />
        </a>
        <a class="pr-5" href="##">
          <img src="../assets/icon/ig.svg" alt="IG" />
        </a>
        <a href="##">
          <img src="../assets/icon/yt.svg" alt="YT" />
        </a>
      </div>
      <img
        class="h-full w-full object-cover "
        src="@/assets/image/main.png"
        alt="候選人"
      />
    </div>
    <!-- 跑馬燈 -->
    <div
      class="marquee-wrap p-2 bg-theme-4 w-full overflow-hidden whitespace-nowrap"
    >
      <div class="marquee-text font-ManTouSans text-white text-4xl xl:text-7xl">
        為喵星人，護台灣！從喵的眼中，看見台灣 喵的未來，人的希望
      </div>
    </div>
  </div>
  <!-- 候選人主張 -->
  <div id="advocate-wrap" class="bg-theme-2 wrap">
    <Advocate />
  </div>
  <!-- 最新活動 -->
  <div id="events-wrap" class="events-wrap wrap">
    <Event />
  </div>
  <!-- 政策議題 -->
  <div id="issues-wrap" class="bg-theme-1 wrap">
    <Issues />
  </div>
  <!-- 捐款及聯絡信箱 -->
  <div id="other-wrap" class="bg-theme-1 wrap">
    <Other />
  </div>
  <!-- footer -->
  <div class="bg-theme-2 py-16">
    <Footer />
  </div>
</template>

<style scoped>
/* .marquee-text {
  animation: marquee 10s linear infinite;
} */
@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
