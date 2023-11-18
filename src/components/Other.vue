<template>
  <div
    class="flex flex-col gap-4 items-center justify-between lg:flex-row lg:items-stretch mx-6 my-2"
  >
    <!-- 捐款 -->
    <div
      class="p-24 max-w-xl flex flex-col justify-between bg-theme-4 rounded-3xl w-full lg:max-w-lg xl:max-w-xl"
    >
      <div class="flex flex-col gap-8">
        <div class="font-ManTouSans text-white text-4xl xl:text-6xl">
          小額支持喵喵
        </div>
        <div class="font-semibold text-white text-xl">
          您的小筆捐款，是每隻毛孩未來的大大動力！
        </div>
      </div>

      <div class="flex flex-col my-4 gap-4 max-h-32 lg:flex-row items-center justify-between">
        <div>
          <button class="button">
            <div class="flex gap-4 justify-center items-center">
              <span>小額捐款 </span>
              <img src="../assets/icon/arrow.svg" alt="arrow" />
            </div>
          </button>
        </div>
        <div class="w-[126px] lg:w-[200px]">
          <img
            class="w-full h-full"
            src="../assets/image/donate.png"
            alt="小額捐款"
          />
        </div>
      </div>
    </div>
    <!-- 信箱 -->
    <div
      class="p-24 max-w-xl flex flex-col justify-between bg-slate-700 rounded-3xl w-full lg:max-w-lg xl:max-w-xl"
    >
      <div class="flex flex-col gap-6">
        <div class="font-ManTouSans text-white text-4xl xl:text-6xl">
          民眾服務信箱
        </div>
        <div class="font-semibold text-white text-xl">
          親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
        </div>
      </div>

      <div class="flex flex-col my-4 gap-4 lg:flex-row items-center justify-between">
        <div>
          <button class="button">
            <div class="flex gap-4 justify-center items-center">
              <span>填寫表單</span>
              <img src="../assets/icon/arrow.svg" alt="arrow" />
            </div>
          </button>
        </div>
        <div class="w-[126px] lg:w-[200px]">
          <img
            class="w-full h-full"
            src="../assets/image/mail.png"
            alt="小額捐款"
          />
        </div>
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
      class="info-subtitle flex p-4 rounded-lg shadow bg-white items-center xl:text-4xl font-bold primary-theme-1"
    >
      <img src="@/assets/icon/num.svg" class="pr-2" alt="參選號碼" /> 喵立翰
      Miao Li-Han
    </div>
  </div>
</template>

<script setup></script>
