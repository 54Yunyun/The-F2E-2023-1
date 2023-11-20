<script setup>
import { ref } from 'vue';

const activeSection = ref(null);
// 點選錨點時，滑動到指定位置
const goAnchor = (selector, section) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    activeSection.value = section;
  }
};
</script>
<template>
  <nav class="bg-theme-1 p-4 flex justify-between items-center w-full lg:p-14">
    <div
      class="main-header rounded-lg w-full h-20 p-6 bg-white flex justify-center lg:fixed lg:top-4 lg:right-5 lg:left-5 lg:z-50 lg:justify-between lg:w-auto shadow"
    >
      <div class="logo-wrap flex items-center">
        <div class="logo text-xl lg:text-2xl">
          <a href="">
            <img src="../assets/image/logo.svg" alt="logo" />
          </a>
        </div>
        <div
          class="logo-text font-bold pl-1 primary-theme-1 text-xl lg:text-2xl"
        >
          喵立翰 Miao Li-Han
        </div>
      </div>
      <div class="nav-wrap hidden lg:block">
        <ul class="flex h-full items-center">
          <li
            class="pr-5 text-primary"
          >
            <div
              class="cursor-pointer"
              @click="goAnchor('#advocate-wrap', 'advocate-wrap')"
            >
              候選人主張
            </div>
          </li>
          <li
            class="pr-5 text-primary"
          >
            <div
              class="cursor-pointer"
              @click="goAnchor('#events-wrap', 'events-wrap')"
            >
              最新活動
            </div>
          </li>
          <li
            class="pr-5 text-primary"
          >
            <div
              class="cursor-pointer"
              @click="goAnchor('#issues-wrap', 'issues-wrap')"
            >
              政策議題
            </div>
          </li>
          <li
            class="pr-5 text-primary"
          >
            <div
              class="cursor-pointer"
              @click="goAnchor('#other-wrap', 'other-wrap-donate')"
            >
              小額捐款
            </div>
          </li>
          <li
            class="text-primary"
          >
            <div
              class="cursor-pointer"
              @click="goAnchor('#other-wrap', 'other-wrap-mail')"
            >
              民眾服務信箱
            </div>
          </li>
        </ul>
      </div>
      <div class="hidden lg:flex items-center">
        <a class="pr-5" href="##">
          <img src="../assets/icon/fb.svg" alt="FB" />
        </a>
        <a class="pr-5" href="##">
          <img src="../assets/icon/ig.svg" alt="IG" />
        </a>
        <a class="pr-5" href="##">
          <img src="../assets/icon/yt.svg" alt="YT" />
        </a>
      </div>
    </div>
  </nav>
</template>
