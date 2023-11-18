<template>
  <div class="flex flex-col lg:flex-row justify-around mx-6 my-2">
    <!-- 社群、版權 -->
    <div class="flex flex-col gap-4">
      <!-- 參選號碼 -->
      <div
        class="info-subtitle flex items-center text-2xl font-bold primary-theme-1"
      >
        <img
          class="pr-2 h-[42px] w-[42px]"
          src="@/assets/icon/num.svg"
          alt="參選號碼"
        />
        喵立翰 Miao Li-Han
      </div>
      <!-- 社群 -->
      <div class="flex gap-6">
        <img src="../assets/icon/fb-footer.svg" alt="fb" />
        <img src="../assets/icon/ig-footer.svg" alt="ig" />
        <img src="../assets/icon/yt-footer.svg" alt="yt" />
      </div>
      <!-- copyright -->
      <div class="text-slate-700 text-sm">
        © 2023 喵立翰 Miao Li-Han 版權所有
      </div>
    </div>
    <!-- 聯絡方式 -->
    <div class="flex flex-col justify-between mt-4 gap-4 lg:mt-0">
      <div
        class="flex text-2xl font-bold text-slate-700"
      >
      競選總部
      </div>
      <!-- 社群 -->
      <div class="flex flex-col">
        <span class="text-slate-700">辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</span>
        <span class="text-slate-700">電話：(02) 888-5678</span>
        <span class="text-slate-700">電子郵件地址：meowoffice@linmeow.tw</span>
      </div>
    </div>
  </div>
</template>
