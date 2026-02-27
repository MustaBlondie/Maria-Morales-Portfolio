<script setup lang="ts">
import NavMenu from '../navigation/NavMenu.vue'
import CvButton from '../shared/CvButton.vue'
import HeroTitle from '../shared/HeroTitle.vue'
</script>

<template>
  <header class="w-full sm:min-h-screen px-5 sm:px-14 flex flex-col bg-[#FFF7F4]">
    <NavMenu />
    <HeroTitle />
    <CvButton />
  </header>
</template>
