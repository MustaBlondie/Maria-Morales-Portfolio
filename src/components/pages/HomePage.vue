<script setup lang="ts">
import NavMenu from '../navigation/NavMenu.vue'
import CvButton from '../shared/BaseCvButton.vue'
import HeroTitle from '../shared/BaseHeroTitle.vue'
import AboutPage from './AboutPage.vue'
import { useWindowWidth } from '../composables/useWindowWidth'

const { isMobile } = useWindowWidth()
</script>

<template>
  <div class="w-full sm:min-h-screen flex flex-col bg-[#FFF7F4]">
    <header class="container sm:mx-auto sm:h-full flex flex-col flex-1 ml-5 sm:px-5">
      <NavMenu />
      <HeroTitle position="home" />
      <CvButton position="home" />
    </header>
  </div>
  <AboutPage v-if="isMobile" />
</template>
