<script setup lang="ts">
import { useThemeHover } from '@/composables/useThemeHover'

const { hoverClass } = useThemeHover()
</script>
<template>
  <div class="w-full flex justify-center">
    <div
      class="max-[900px]:hidden w-full max-w-[1108px] h-[81px] px-6 sm:px-12 lg:px-[100px] flex items-center justify-center"
    >
      <nav class="flex w-full justify-between text-[20px] font-extrabold tracking-wider">
        <a href="#home" :class="hoverClass">{{ $t('nav.home') }}</a>
        <a href="#about" :class="hoverClass">{{ $t('nav.about') }}</a>
        <a href="#projects" :class="hoverClass">{{ $t('nav.projects') }}</a>
        <a href="#contact" :class="hoverClass">{{ $t('nav.contact') }}</a>
      </nav>
    </div>
  </div>
</template>
