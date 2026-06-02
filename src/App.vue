<script setup lang="ts">
import ThemeToggle from './components/ThemeToggle.vue'
import { useThemeStore } from './store/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
</script>

<template>
  <div
    class="min-h-screen transition-colors duration-300 font-roboto"
    :class="{
      'bg-primary text-primaryText': isDark,
      'bg-secondary text-primary': !isDark,
    }"
  >
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-11 px-4 sm:px-8 md:px-[570px]">
        <ThemeToggle />

        <h1 class="text-lg font-normal mb-4">WEB DEVELOPER</h1>
        <h2 class="text-2xl font-normal mb-4">Maria Morales</h2>
        <p class="text-lg font-extrabold">Hola Chiquis</p>
      </div>
    </div>
  </div>
</template>
