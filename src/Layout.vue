<template>
    <div class="layout">
    <Header />
    <div class="main-view">
      <router-view />
    </div>
    <!-- <footer /> -->
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>
