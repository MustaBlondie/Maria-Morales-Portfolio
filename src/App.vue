<script setup lang="ts">
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'

import { useThemeStore } from './store/theme.ts'
import { storeToRefs } from 'pinia'
import StickyNavBar from './components/StickyNavBar.vue'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
</script>

<template>
  <div
    class="min-h-screen transition-colors duration-300 font-roboto"
    :class="{
      'bg-primary text-primaryText  border-primaryText': isDark,
      'bg-secondary text-primary border-primary': !isDark,
    }"
  >
    <HomeView />
    <StickyNavBar />
    <AboutView />
    <ProjectsView />
    <ContactView />
  </div>
</template>
