<script setup lang="ts">
import BaseArrowButton from '../shared/BaseArrowButton.vue'
import BaseCvButton from '../shared/BaseCvButton.vue'
import BaseHeroTitle from '../shared/BaseHeroTitle.vue'
</script>

<template>
  <div class="w-full sm:min-h-screen px-5 flex flex-col bg-[#FFF7F4]">
    <div class="max-w-6xl sm:mx-auto sm:h-full flex-col flex-1">
      <div>
        <BaseArrowButton />
        <BaseHeroTitle position="about" />
      </div>

      <BaseCvButton />
    </div>
  </div>
</template>
