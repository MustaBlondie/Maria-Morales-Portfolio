<script setup lang="ts">
import { useThemeBorder } from '@/composables/useThemeBoder'
import { useThemeHover } from '@/composables/useThemeHover'

const { borderClass } = useThemeBorder()
const { hoverClass } = useThemeHover()
</script>
<template>
  <div class="flex gap-8">
    <div class="w-[350px] h-[550px] border-r-4 max-[640px]:hidden" :class="borderClass">
      <nav
        class="flex flex-col gap-12 text-[24px] font-extrabold tracking-wider pl-[130px] pt-[100px]"
      >
        <a href="#about" class="px-4 py-3 mr-1" :class="hoverClass">ABOUT</a>
        <a href="#cv" class="px-4 py-3 mr-1" :class="hoverClass">CV</a>
        <a href="#projects" class="px-4 py-3 mr-1" :class="hoverClass">PROJECTS</a>
        <a href="#contact" class="px-4 py-3 mr-1" :class="hoverClass">CONTACTS</a>
      </nav>
    </div>
    <div class="max-[640px]:hidden flex items-end pb-10 text-[24px] font-extrabold">
      <button>ES</button>
      <span class="mx-1"> / </span>
      <button>EN</button>
    </div>
  </div>
</template>
