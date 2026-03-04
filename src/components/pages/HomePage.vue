<script setup lang="ts">
import NavMenu from '../navigation/NavMenu.vue'
import CvButton from '../shared/BaseCvButton.vue'
import HeroTitle from '../shared/BaseHeroTitle.vue'
</script>

<template>
  <div class="w-full sm:min-h-screen px-5 flex flex-col bg-[#FFF7F4]">
    <header class="max-w-6xl sm:mx-auto sm:h-full flex flex-col flex-1">
      <NavMenu />
      <HeroTitle />
      <CvButton position="home" />
    </header>
  </div>
</template>
