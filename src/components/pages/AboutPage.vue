<script setup lang="ts">
import BaseArrowButton from '../shared/BaseArrowButton.vue'
import BaseCvButton from '../shared/BaseCvButton.vue'
import BaseHeroTitle from '../shared/BaseHeroTitle.vue'
import Skills from '../skills/Skills.vue'
</script>

<template>
  <div class="w-full sm:min-h-screen px-5 flex flex-col sm:bg-[#FFF7F4] bg-black">
    <div class="container sm:mx-auto sm:h-full flex flex-col flex-1 sm:justify-between">
      <div class="flex sm:flex-col flex-row-reverse my-10">
        <div class="sm:flex">
          <BaseArrowButton />

          <BaseHeroTitle position="about" />
          <h2
            class="[writing-mode:vertical-lr] text-[#FFF7F4] sm:text-black font-extrabold text-4xl sm:text-5xl sm:text-center :ml-2.5 sm:mt-17.5"
          >
            ABOUT
          </h2>
        </div>

        <div class="max-w-87.5 text-[1rem] sm:max-w-132.5 sm:ml-28 sm:text-2xl sm:mt-5">
          <p class="text-[#FFF7F4] sm:text-black">
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
