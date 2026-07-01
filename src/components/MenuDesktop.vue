<script setup lang="ts">
import { useThemeStore } from '@/store/theme'
import { storeToRefs } from 'pinia'
import Title from './Title.vue'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
</script>
<template>
  <div
    class="flex gap-8 pb-40 border-b-4"
    :class="{
      'border-primaryText': isDark,
      'border-primary': !isDark,
    }"
  >
    <div
      class="w-[350px] h-[550px] border-r-4 max-[640px]:hidden"
      :class="{
        'border-primaryText': isDark,
        'border-primary': !isDark,
      }"
    >
      <nav
        class="flex flex-col gap-12 text-[24px] font-extrabold tracking-wider pl-[130px] pt-[100px]"
      >
        <a href="#about">ABOUT</a>
        <a href="#cv">CV</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACTS</a>
      </nav>
    </div>
    <div class="max-[640px]:hidden flex items-end pb-10 text-[24px] font-extrabold tracking-wider">
      <button>ES</button>
      <span class="mx-1"> / </span>
      <button>EN</button>
    </div>
    <Title />
  </div>
</template>
