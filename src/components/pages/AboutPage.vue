<script setup lang="ts">
import BaseArrowButton from '../shared/BaseArrowButton.vue'
import BaseCvButton from '../shared/BaseCvButton.vue'
import BaseHeroTitle from '../shared/BaseHeroTitle.vue'
import Skills from '../skills/Skills.vue'
</script>

<template>
  <div class="w-full sm:min-h-screen px-5 flex flex-col bg-[#FFF7F4]">
    <div class="container sm:mx-auto sm:h-full flex flex-col flex-1 sm:justify-between">
      <div class="w-full flex">
        <BaseArrowButton />

        <BaseHeroTitle position="about" />
        <h2
          class="[writing-mode:vertical-lr] font-extrabold sm:text-5xl text-center :ml-2.5 sm:mt-17.5"
        >
          ABOUT
        </h2>
      </div>

      <div class="sm:max-w-[530px] ml-28 text-[20px]">
        <p>
          Hola, I'm really happy you're here! <br />
          I designed this portfolio in Figma and built it using Vue 3 and TypeScript, plus Tailwind.
          It was quite a challenge for me, I learned a lot, and now I want to share it with you. You
          can also check out my projects. Make yourself at home, you're very welcome!
        </p>

        <BaseCvButton position="about" />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  </div>
</template>
