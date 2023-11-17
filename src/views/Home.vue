<script setup>
import { events } from '@/constants/events.js'


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
    <div class="flex xl:w-1/2">
      <img
        class="h-full w-full object-cover"
        src="@/assets/image/main.png"
        alt="候選人"
      />
    </div>
    <div
      class="marquee-wrap p-2 bg-theme-4 w-full overflow-hidden whitespace-nowrap"
    >
      <div class="marquee-text font-ManTouSans text-white text-4xl xl:text-7xl">
        為喵星人，護台灣！從喵的眼中，看見台灣 喵的未來，人的希望
      </div>
    </div>
  </div>
  <!-- 候選人主張 -->
  <div class="advocate-wrap bg-theme-2 wrap">
    <div
      class="advocate-content bg-white flex flex-col overflow-hidden rounded-3xl xl:flex-row"
    >
      <div
        class="advocate-text flex flex-col px-6 py-10 xl:w-1/2 xl:px-12 xl:py-10"
      >
        <div class="text-center">
          <span class="rounded-lg bg-slate-700 text-white font-bold p-3"
            >ADVOCATE</span
          >
          <div class="title-gradient font-ManTouSans m-10 text-5xl xl:text-7xl">
            候選人主張
          </div>
        </div>

        <div class="font-bold text-3xl text-slate-700 leading-normal">
          我堅信 ! 藉由推動更完善的
          <span class="primary-theme-1">貓咪福利</span>
          和相關政策，更是間接地投資於<span class="primary-theme-1"
            >台灣的未來</span
          >。
        </div>
        <p class="text-slate-700 text-xl mt-10 leading-normal">
          畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
          GDP 經濟帶來巨大效益。
          因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
        </p>
      </div>
      <div class="xl:w-1/2">
        <img
          class="h-full w-full object-cover"
          src="@/assets/image/advocate.png"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- 最新活動 -->
  <div class="events-wrap wrap">
    <div class="events-content flex flex-col">
      <div class="events-text flex justify-center">
        <div class="text-center m-3">
          <span class="rounded-lg bg-slate-700 text-white font-bold p-3"
            >LATEST EVENTS</span
          >
          <div class="title-gradient font-ManTouSans m-10 text-5xl xl:text-7xl">
            最新活動
          </div>
        </div>
      </div>
      <div v-for="event in events" :key="event.id" class="flex flex-col gap-6 pt-10 xl:flex-row">
        <div v-if="event.id === 1" class="xl:w-1/2">
          <div
            class="h-[300px] md:h-[500px] xl:h-[400px] w-full overflow-hidden rounded-3xl"
          >
            <img
              class="h-full w-full object-cover"
              :src="`${event.img}`"
              :alt="`${event.title}`"
            />
          </div>
          <div class="flex flex-col gap-2">
            <div class="date mt-6">{{ event.date }}</div>
            <div class="event-title">{{ event.title }}</div>
            <div class="event-info">
              {{ event.description }}
            </div>
          </div>
        </div>
        <div v-if="event.id !== 1" class="flex flex-col gap-6 xl:w-1/2">
          <div class="flex">
            <div
              class="h-[150px] w-[300px] md:h-[120px] xl:h-[134px] xl:w-[301px] overflow-hidden rounded-3xl"
            >
              <img
                class="h-full w-full object-cover"
                :src="`${event.img}`"
                :alt="`${event.title}`"
              />
            </div>
            <div class="flex flex-col gap-2 ml-4 w-full">
              <div class="date">{{ event.date }}</div>
              <div class="event-title text-lg">
                {{ event.title }}
              </div>
              <div class="event-info">
                {{ event.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
