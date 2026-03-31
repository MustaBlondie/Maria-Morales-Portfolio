<script setup lang="ts">
import BaseArrowButton from '../shared/BaseArrowButton.vue'
import PixelChevronDown2 from '~icons/pixelarticons/chevron-down-2?scale=2.4'

import { ref } from 'vue'

const pdfPath = '/curriculum.pdf#toolbar=0'

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = pdfPath
  link.download = 'curriculum.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="w-full sm:min-h-screen flex flex-col bg-black">
    <div class="container sm:mx-auto sm:h-full flex flex-col flex-1">
      <BaseArrowButton class="text-white" />
      <div class="p-5 my-5">
        <p class="text-amber-50 text-center text-3xl font-bold px-12">
          Hola 👋 here you’ll find my CV— feel free to check it out or download it if you’d like!<br />
          Self-taught, course-trained, and holder of two Technical University Degrees— always
          building, always improving 😌
        </p>
      </div>

      <div class="flex flex-col">
        <div class="flex justify-center w-full">
          <div class="w-full h-[500px] max-w-5xl">
            <object
              :data="pdfPath"
              type="application/pdf"
              class="w-full h-full rounded-lg"
            ></object>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center mt-6">
          <h2 class="text-amber-50">DOWNLOAD</h2>
          <button @click="downloadPDF" class="text-amber-50 text-2xl flex flex-col items-center">
            <PixelChevronDown2 class="w-12 h-12" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
