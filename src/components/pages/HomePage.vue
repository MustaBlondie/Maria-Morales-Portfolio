<script setup lang="ts">
import NavMenu from '../navigation/NavMenu.vue'
import CvButton from '../shared/BaseCvButton.vue'
import HeroTitle from '../shared/BaseHeroTitle.vue'

import { useWindowWidth } from '../composables/useWindowWidth'
import AboutPageMobile from './AboutPageMobile.vue'

const { isMobile } = useWindowWidth()
</script>

<template>
  <div class="w-full sm:min-h-screen flex flex-col bg-[#FFF7F4]">
    <header class="container sm:mx-auto sm:h-full flex flex-col flex-1 px-5 sm:px-5">
      <NavMenu />
      <HeroTitle position="home" />
      <CvButton position="home" />
    </header>
  </div>
  <AboutPageMobile v-if="isMobile" />
</template>
