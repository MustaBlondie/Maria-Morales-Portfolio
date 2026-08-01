<script setup lang="ts">
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import CvView from './views/CvView.vue'
import { useThemeStore } from './store/theme.ts'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
</script>

<template>
  <div
    class="min-h-screen pb-10 transition-colors duration-300 font-roboto"
    :class="{
      'bg-dark text-darkText': isDark,
      'bg-light text-dark': !isDark,
    }"
  >
    <HomeView />
    <AboutView />
    <CvView />
    <ProjectsView />
    <ContactView />
  </div>
</template>
