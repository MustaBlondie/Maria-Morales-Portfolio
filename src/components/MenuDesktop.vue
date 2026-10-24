<script setup lang="ts">
import { useThemeHoverUnderline } from '@/composables/useThemeHoverUnderline.ts'

const { hoverUnderlineClass } = useThemeHoverUnderline()
</script>
<template>
  <div class="flex justify-center">
    <div
      class="max-[900px]:hidden max-w-[1108px] h-[81px] px-6 sm:px-12 lg:px-[100px] flex items-center justify-center"
    >
      <nav class="flex gap-12 w-full text-[20px] font-extrabold tracking-[0.09em]">
        <a href="#home" :class="hoverUnderlineClass">{{ $t('nav.home') }}</a>
        <a href="#about" :class="hoverUnderlineClass">{{ $t('nav.about') }}</a>
        <a href="#projects" :class="hoverUnderlineClass">{{ $t('nav.projects') }}</a>
        <a href="#contact" :class="hoverUnderlineClass">{{ $t('nav.contact') }}</a>
      </nav>
    </div>
  </div>
</template>
