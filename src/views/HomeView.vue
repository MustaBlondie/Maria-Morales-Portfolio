<script setup lang="ts">
import LanguageToggle from '@/components/LanguageToggle.vue'
import MenuDesktop from '@/components/MenuDesktop.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import Container from '@/components/Container.vue'
import Title from '@/components/Title.vue'
import { useThemeBorder } from '@/composables/useThemeBoder.ts'
import { Icon } from '@iconify/vue'

const { borderClass } = useThemeBorder()

const toggleMenu = () => {
  console.log('hola babosos jeje')
}
</script>

<template>
  <Container>
    <div class="w-full flex flex-1 900:justify-center gap-3 pt-16 px-3" :class="borderClass">
      <LanguageToggle />
      <MenuDesktop />
      <div class="max-[900px]:hidden flex items-center">
        <ThemeToggle />
      </div>

      <div class="min-[901px]:hidden">
        <button @click="toggleMenu">
          <Icon icon="ic:sharp-menu" class="text-[35px]" />
        </button>
      </div>
    </div>
    <Title />
  </Container>
</template>
