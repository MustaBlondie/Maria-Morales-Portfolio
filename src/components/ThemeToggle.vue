<script setup lang="ts">
import { useThemeStore } from '@/store/theme'
import { Icon } from '@iconify/vue'

const themeStore = useThemeStore()
</script>

<template>
  <button @click="themeStore.toggleTheme">
    <Icon icon="game-icons:light-bulb" class="text-[45px] rotate-180" />
  </button>
</template>
