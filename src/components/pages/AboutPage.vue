<script setup lang="ts">
import BaseArrowButton from '../shared/BaseArrowButton.vue'
import BaseCvButton from '../shared/BaseCvButton.vue'
import BaseHeroTitle from '../shared/BaseHeroTitle.vue'
</script>

<template>
  <div class="w-full sm:min-h-screen px-5 flex flex-col bg-[#FFF7F4]">
    <div class="max-w-6xl sm:mx-auto sm:h-full flex flex-col flex-1 sm:justify-between">
      <div class="flex gap-52">
        <BaseArrowButton />
        <BaseHeroTitle position="about" />
      </div>
      <div class="w-3xl">
        <p>
          Hola, I'm really happy you're here! <br />
          I designed this portfolio in Figma and built it using Vue 3 and TypeScript, plus Tailwind.
          It was quite a challenge for me, I learned a lot, and now I want to share it with you. You
          can also check out my projects. Make yourself at home, you're very welcome!
        </p>
        <BaseCvButton />
      </div>
      <div>
        <h2>skills</h2>
        <div>
          <h3>aqui van los logos</h3>
        </div>
      </div>
    </div>
  </div>
</template>
