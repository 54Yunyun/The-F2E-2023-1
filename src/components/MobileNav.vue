<script setup>
// 點選錨點時，滑動到指定位置
const goAnchor = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
</script>
<template>
  <div class="fixed z-50 bottom-0 left-0 w-full bg-white shadow lg:hidden">
    <div class="container mx-auto py-2">
      <ul class="flex justify-between items-center text-xs">
        <li
          class="flex flex-col items-center"
          @click="goAnchor('#advocate-wrap')"
        >
          <img src="@/assets/icon/advocate-nav.svg" alt="候選人主張手" />
          <div class="text-slate-700">候選人主張</div>
        </li>
        <li
          class="flex flex-col items-center"
          @click="goAnchor('#events-wrap')"
        >
          <img src="@/assets/icon/event-nav.svg" alt="最新活動" />
          <div class="text-slate-700">最新活動</div>
        </li>
        <li
          class="flex flex-col items-center"
          @click="goAnchor('#issues-wrap')"
        >
          <img src="@/assets/icon/issue-nav.svg" alt="政策議題" />
          <div class="text-slate-700">政策議題</div>
        </li>
        <li class="flex flex-col items-center" @click="goAnchor('#other-wrap')">
          <img src="@/assets/icon/donate-nav.svg" alt="小額捐款" />
          <div class="text-slate-700">小額捐款</div>
        </li>
        <li class="flex flex-col items-center" @click="goAnchor('#other-wrap')">
          <img src="@/assets/icon/mail-nav.svg" alt="服務信箱" />
          <div class="text-slate-700">服務信箱</div>
        </li>
      </ul>
    </div>
  </div>
</template>
