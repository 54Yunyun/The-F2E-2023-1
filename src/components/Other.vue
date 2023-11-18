<template>
  <div class="flex flex-col lg:flex-row justify-between mx-6 my-2">
    <!-- 捐款 -->
    <div class="p-24 flex flex-col justify-between bg-theme-4 rounded-3xl w-full lg:max-w-lg xl:max-w-xl">
      <div class="flex flex-col gap-6">
        <div class="font-ManTouSans text-white text-4xl xl:text-6xl">
          小額支持喵喵
        </div>
        <div class="font-semibold text-white text-xl">
          您的小筆捐款，是每隻毛孩未來的大大動力！
        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-between">
        <button class="rounded-full bg-white p-4">Save Changes</button>

        <img
          class="w-[200px] h-[200px]"
          src="../assets/image/donate.png"
          alt=""
        />
      </div>
    </div>
    <!-- 信箱 -->
    <div class="p-24 max-w-xl flex flex-col justify-between bg-slate-700 w-full lg:max-w-lg xl:max-w-xl rounded-3xl">
      <div class="flex flex-col gap-6">
        <div class="font-ManTouSans text-white text-4xl xl:text-6xl">
          民眾服務信箱
        </div>
        <div class="font-semibold text-white text-xl">
          親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <button class="rounded-full bg-white p-4">Save Changes</button>
        <img class="w-[200px]" src="../assets/image/mail.png" alt="" />
      </div>
    </div>
  </div>
  <!-- slogan -->
  <div class="flex flex-col mt-52 justify-center items-center gap-6">
    <div
      class="title-gradient font-ManTouSans flex justify-center text-center flex-col text-6xl xl:flex-row xl:text-7xl gap-4"
    >
      <span>台灣的明天</span>
      <span>喵先鋪路</span>
    </div>
    <div
      class="info-subtitle flex  p-4 rounded-lg shadow bg-white items-center xl:text-4xl font-bold primary-theme-1"
    >
      <img src="@/assets/icon/num.svg" class="pr-2" alt="參選號碼" /> 喵立翰
      Miao Li-Han
    </div>
  </div>
</template>

<script setup></script>
