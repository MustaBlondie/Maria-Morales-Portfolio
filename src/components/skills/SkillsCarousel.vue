<script setup lang="ts">
import SiHtml5 from '~icons/simple-icons/html5'
import SiCss from '~icons/simple-icons/css3'
import SiJs from '~icons/simple-icons/javascript'
import SiFigma from '~icons/simple-icons/figma'
import SiVue from '~icons/simple-icons/vuedotjs'
import SiTs from '~icons/simple-icons/typescript'
import SiTw from '~icons/simple-icons/tailwindcss'
import SiConsole from '~icons/simple-icons/gnometerminal'
</script>

<template>
  <div
    class="sm:px-5 sm:py-8 flex justify-evenly sm:justify-center gap-3.5 sm:gap-10 overflow-hidden"
  >
    <div class="w-36 sm:w-20 sm:h-20">
      <SiHtml5 class="text-[#FFF7F4] w-full h-full" />
    </div>
    <div class="w-36 sm:w-20 h-36 sm:h-20">
      <SiJs class="text-[#FFF7F4] w-full h-full" />
    </div>
    <div class="w-36 sm:w-20 h-36 sm:h-20">
      <SiCss class="text-[#FFF7F4] w-full h-full" />
    </div>
    <div class="w-36 sm:w-20 h-36 sm:h-20">
      <SiFigma class="text-[#FFF7F4] w-full h-full" />
    </div>
    <div class="w-36 sm:w-20 h-36 sm:h-20">
      <SiVue class="text-[#FFF7F4] w-full h-full" />
    </div>
    <div class="w-36 sm:w-20 h-36 sm:h-20">
      <SiTs class="text-[#FFF7F4] w-full h-full" />
    </div>
    <div class="w-36 sm:w-20 h-36 sm:h-20">
      <SiTw class="text-[#FFF7F4] w-full h-full" />
    </div>
    <div class="w-36 sm:w-20 h-36 sm:h-20">
      <SiConsole class="text-[#FFF7F4] w-full h-full" />
    </div>
  </div>
</template>
