<script setup lang="ts">
import { useThemeBorder } from '@/composables/useThemeBoder'
const { borderClass } = useThemeBorder()
</script>

<template>
  <div
    class="flex flex-col text-left text-[20px] pl-5 sm:mt-auto sm:ml-auto sm:pb-4 sm:pr-8 sm:gap-2 sm:text-[40px] 900:text-center 900:text-[48px]"
    :class="borderClass"
  >
    <h1>WEB DEVELOPER</h1>
    <h2>Maria Morales</h2>
  </div>
</template>
