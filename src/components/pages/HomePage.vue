<script setup lang="ts">
import NavMenu from '../navigation/NavMenu.vue'
import CvButton from '../shared/BaseCvButton.vue'
import HeroTitle from '../shared/BaseHeroTitle.vue'

import { useWindowWidth } from '../composables/useWindowWidth'
import AboutPageMobile from './AboutPageMobile.vue'
import { ref } from 'vue'
import AboutPage from './AboutPage.vue'

const { isMobile } = useWindowWidth()

const currentScreen = ref<'home' | 'about'>('home')

// onMounted(() => {
//   setInterval(() => {
//     currentScreen.value = currentScreen.value === 'home' ? 'about' : 'home'
//   }, 1000)
// })
</script>

<template>
  <template v-if="currentScreen === 'home'">
    <div class="w-full sm:min-h-screen flex flex-col bg-[#FFF7F4]">
      <header class="container sm:mx-auto sm:h-full flex flex-col flex-1 px-5 sm:px-5">
        <NavMenu @setScreen="(name) => currentScreen = name" />
        <HeroTitle position="home" />
        <CvButton position="home" />
      </header>
    </div>
    <AboutPageMobile v-if="isMobile" />
  </template>
  <template v-else-if="currentScreen === 'about'">
    <AboutPage @close="currentScreen = 'home'" />
  </template>
</template>
