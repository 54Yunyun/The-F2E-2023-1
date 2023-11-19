<script setup>
import { events } from '@/constants/events.js';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

const isOpen = ref(false);
const sourceData = ref({});
const sourceComponent = ref('');
const openModal = (event, source) => {
  isOpen.value = true;
  sourceData.value = event;
  sourceComponent.value = source;
};

const closeModal = () => {
  isOpen.value = false;
};
</script>
<template>
  <Modal
    :isOpen="isOpen"
    @closeModal="closeModal"
    :sourceData="sourceData"
    :sourceComponent="sourceComponent"
    @openModal="openModal"
  />
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
  <div class="flex flex-col pt-10 xl:flex-row">
    <div v-for="event in events" :key="event.id" class="">
      <div v-if="event.id === 1" class="pr-6 pb-6">
        <div
          @click="openModal(event, 'event')"
          class="h-[300px] md:h-[500px] xl:h-[400px] w-full overflow-hidden rounded-3xl"
        >
          <img
            class="h-full w-full object-cover"
            :src="`src/assets/image/event${event.id}.png`"
            :alt="`${event.title}`"
          />
        </div>
        <div class="flex flex-col gap-2">
          <div class="date mt-6">{{ event.date }}</div>
          <div class="event-title">{{ event.title }}</div>
          <div class="event-info">{{ event.description }}</div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div v-for="event in events" :key="event.id" class="flex flex-col">
        <div v-if="event.id !== 1" class="mb-6">
          <div class="flex flex-col">
            <div class="flex flex-row">
              <div
                @click="openModal(event, 'event')"
                class="h-[150px] w-[300px] md:h-[120px] xl:h-[134px] xl:w-[301px] overflow-hidden rounded-3xl"
              >
                <img
                  class="h-full w-full object-cover"
                  :src="`src/assets/image/event${event.id}.png`"
                  :alt="`${event.title}`"
                />
              </div>
              <div class="flex flex-col gap-2 ml-4 w-full">
                <div class="date">{{ event.date }}</div>
                <div class="event-title text-lg">{{ event.title }}</div>
                <div class="event-info">{{ event.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
