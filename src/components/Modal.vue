<script setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue';
import { events } from '@/constants/events.js';

const { isOpen, sourceData, sourceComponent } = defineProps([
  'isOpen',
  'sourceData',
  'sourceComponent',
]);
const emit = defineEmits();
const openModal = () => {
  console.log('openModal');
  emit('openModal');
};

const closeModal = () => {
  emit('closeModal');
};
</script>
<template>
  <div
    v-if="isOpen"
    class="fixed z-50 inset-0 flex items-center justify-center w-full bg-black bg-opacity-50 px-[104px]"
  >
    <div class="bg-white rounded-3xl shadow-lg">
      <div class="overflow-y-auto py-6 px-10 max-h-[80vh]">
        <div class="flex w-full justify-between items-center mb-6">
          <div class="text-slate-700 font-bold text-2xl lg:text-3xl">
            {{ sourceComponent }}
          </div>
          <img
            @click="closeModal"
            class="cursor-pointer"
            src="@/assets/icon/cancel.svg"
            alt=""
          />
        </div>
        <div class="flex flex-col lg:flex-row">
          <div
            class="flex flex-col gap-4 w-full max-h-80 lg:max-h-96 lg:max-w-[507px]"
          >
            <div class="overflow-hidden rounded-3xl">
              <img
                class="h-full w-full object-cover"
                :src="`${sourceData.img}`"
                :alt="`${sourceData.title}`"
              />
            </div>
            <div class="mb-2">{{ sourceData.title }}</div>
          </div>
          <!-- 詳細內容 -->
          <div class="flex flex-col lg:mx-4 w-full xl:max-w-[512px]">
            <div>
              <div class="primary-theme-1 font-bold text-3xl mb-2">
                {{ sourceData.title }}
              </div>
              <p class="text-slate-700 mb-4">{{ sourceData.date }}</p>
              <div class="text-slate-700 my-4">
                {{ sourceData.description }}
              </div>
            </div>

            <!-- 更多活動 -->
            <!-- <div class="bg-slate-50  gap-4 p-4 rounded-xl ">
              <div>更多活動</div>
              <div class="flex flex-row" v-for="event in events" :key="event.id">
                <div
                  class=""
                  v-if="event.id !== sourceData.id"
                >
                  <div
                    class="flex flex-col items-center"
                  >
                    <div class="overflow-hidden rounded-lg ">
                      <img
                        class="h-full w-full object-cover"
                        :src="`${event.img}`"
                        :alt="`${event.title}`"
                      />
                    </div>
                    <div>{{ event.title }}</div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
