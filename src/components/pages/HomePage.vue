<script setup lang="ts">
import NavMenu from '../navigation/NavMenu.vue'
import BaseCvButton from '../shared/BaseCvButton.vue'
import HeroTitle from '../shared/BaseHeroTitle.vue'

import { useWindowWidth } from '../composables/useWindowWidth'
import AboutPageMobile from './AboutPageMobile.vue'

import { ref } from 'vue'
import AboutPage from './AboutPage.vue'
import ProjectsPage from './ProjectsPage.vue'
import ContactPage from './ContactPage.vue'
import CvPage from './CvPage.vue'

const { isMobile } = useWindowWidth()

const currentScreen = ref<'home' | 'about' | 'projects' | 'contact' | 'Cv'>('home')

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
        <NavMenu @setScreen="(name) => (currentScreen = name)" />
        <HeroTitle position="home" />
        <BaseCvButton position="home" @setScreen="(name) => (currentScreen = 'Cv')" />
      </header>
    </div>
    <AboutPageMobile v-if="isMobile" />
  </template>
  <template v-else-if="currentScreen === 'about'">
    <AboutPage @close="currentScreen = 'home'" />
  </template>
  <template v-else-if="currentScreen === 'projects'">
    <ProjectsPage @close="currentScreen = 'home'" />
  </template>
  <template v-else-if="currentScreen === 'contact'">
    <ContactPage @close="currentScreen = 'home'" />
  </template>
  <template v-else-if="currentScreen === 'Cv'">
    <CvPage @close="currentScreen = 'home'" />
  </template>
</template>
