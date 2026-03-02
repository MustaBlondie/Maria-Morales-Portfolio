<script setup lang="ts">
import NavMenu from '../navigation/NavMenu.vue'
import CvButton from '../shared/BaseCvButton.vue'
import HeroTitle from '../shared/BaseHeroTitle.vue'
</script>

<template>
  <header class="sm:w-6xl sm:mx-auto sm:h-full flex flex-col flex-1">
    <NavMenu />
    <HeroTitle />
    <CvButton position="home" />
  </header>
</template>
