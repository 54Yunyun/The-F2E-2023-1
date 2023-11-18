<script setup>
import MobileNav from '@/components/MobileNav.vue';
import Header from './components/Header.vue';
</script>
<template>
  <div class="layout">
    <!-- 手機版導覽列 -->
    <MobileNav />
    <!-- 電腦版導覽列 -->
    <Header />
    <div class="main-view">
      <router-view />
    </div>
  </div>
</template>
