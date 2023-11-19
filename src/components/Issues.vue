<script setup>
import { issues } from '@/constants/issues.js';
</script>
<template>
  <div class="events-text flex justify-center">
    <div class="text-center m-3">
      <span class="rounded-lg bg-slate-700 text-white font-bold p-3"
        >POLICY ISSUES</span
      >
      <div class="title-gradient font-ManTouSans m-10 text-5xl xl:text-7xl">
        政策議題
      </div>
    </div>
  </div>
    <div class="w-full grid lg:grid-cols-3 md:grid-cols-2">
      <div v-for="issue in issues" :key="issue.id" class="mx-6">
        <div class="components-title h-16 flex items-center ml-5">
          {{ issue.title }}
        </div>
        <div class="overflow-hidden w-full">
          <img class="object-cover rounded-3xl" :src="`src/assets/image/issue${issue.id}.png`" alt="" />
        </div>
      </div>
    </div>
</template>
