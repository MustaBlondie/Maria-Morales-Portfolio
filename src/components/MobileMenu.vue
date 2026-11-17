<script setup lang="ts">
import { Icon } from '@iconify/vue'
import LanguageToggle from './LanguageToggle.vue'
import ThemeToggle from './ThemeToggle.vue'
import { useThemeHoverUnderline } from '@/composables/useThemeHoverUnderline.ts'
import { useThemeBorder } from '@/composables/useThemeBorder.ts'

const { borderClass } = useThemeBorder()

const { hoverUnderlineClass } = useThemeHoverUnderline()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
<template>
  <div
    class="fixed inset-0 z-50 w-full min-h-dvh overflow-y-auto bg-bg-light dark:bg-bg-dark px-8 py-8"
  >
    <div class="mx-auto w-full max-w-3xl min-h-[calc(100dvh-4rem)] flex flex-col justify-between">
      <div class="w-full flex justify-center pb-6 border-b" :class="borderClass">
        <ThemeToggle />
      </div>

      <nav
        class="flex flex-1 flex-col items-center justify-evenly py-10 text-[18px] font-medium tracking-[0.18em]"
      >
        <a href="#home" :class="hoverUnderlineClass" @click="emit('close')">
          {{ $t('nav.home') }}
        </a>

        <a href="#about" :class="hoverUnderlineClass" @click="emit('close')">
          {{ $t('nav.about') }}
        </a>

        <a href="#projects" :class="hoverUnderlineClass" @click="emit('close')">
          {{ $t('nav.projects') }}
        </a>

        <a href="#contact" :class="hoverUnderlineClass" @click="emit('close')">
          {{ $t('nav.contact') }}
        </a>
      </nav>

      <div class="w-full border-t" :class="borderClass"></div>

      <div class="flex justify-center py-8">
        <LanguageToggle />
      </div>

      <div class="w-full border-t" :class="borderClass"></div>

      <div class="flex justify-center py-10">
        <button type="button" @click="emit('close')" aria-label="Close menu">
          <Icon icon="ant-design:close-circle-outlined" class="text-[45px]" />
        </button>
      </div>
    </div>
  </div>
</template>
