<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <header class="w-full sm:min-h-screen sm:px-14 flex flex-col bg-[#FFF7F4]">
    <div
      class="hidden sm:flex justify-between margin my-8 px-9 py-3 border-t border-b border-b-black font-semibold"
    >
      <div class="cursor-pointer">ABOUT</div>
      <div class="cursor-pointer">PROJECTS</div>
      <div class="cursor-pointer">CONTACT</div>
      <div class="cursor-pointer">EN/SP</div>
    </div>

    <div class="flex flex-1 sm:justify-end sm:items-end px-5 pt-3.5 mb-4 sm:px-9">
      <div class="sm:text-right flex sm:flex-col flex-col-reverse mt-9">
        <h2 class="sm:text-8xl text-base font-semibold sm:font-extrabold sm:px-3.5 -mt-2">
          MARIA MORALES
        </h2>
        <h1 class="sm:text-4xl text-xl sm:font-semibold font-extrabold sm:px-3.5">WEB DEVELOPER</h1>
      </div>
    </div>

    <div class="ml-5 sm:mt-28 sm:mb-10 mb-2 mt-10 flex flex-row">
      <button
        @click="show = !show"
        class="sm:text-lg text-xs font-semibold border-2 rounded-md sm:rounded-lg sm:px-5 px-3.5 sm:py-0.5 py-1 cursor-pointer"
      >
        CV
      </button>
    </div>
  </header>
</template>
