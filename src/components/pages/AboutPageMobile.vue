<script setup lang="ts">
import BaseCvButton from '../shared/BaseCvButton.vue'
import BaseHeroTitle from '../shared/BaseHeroTitle.vue'
import Skills from '../skills/Skills.vue'
</script>

<template>
  <div class="w-full px-5 flex flex-col bg-black">
    <div class="container flex flex-col flex-1">
      <div class="flex flex-row-reverse my-10">
        <div>
          <BaseHeroTitle position="about" />
          <h2 class="[writing-mode:vertical-lr] text-[#FFF7F4] font-extrabold text-4xl">ABOUT</h2>
        </div>

        <div class="max-w-87.5 text-[1rem]">
          <p class="text-[#FFF7F4]">
            Hola, I'm really happy you're here! <br />
            I designed this portfolio in Figma and built it using Vue 3 and TypeScript, plus
            Tailwind. <br />
            It was quite a challenge for me, I learned a lot, and now I want to share it with you.
            You can also check out my projects. Make yourself at home, you're very welcome!
          </p>

          <BaseCvButton position="about" />
        </div>
      </div>

      <div>
        <Skills />
      </div>
    </div>
  </div>
</template>
