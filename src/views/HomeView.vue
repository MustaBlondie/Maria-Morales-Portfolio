<script setup lang="ts">
import MenuDesktop from '@/components/MenuDesktop.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import Container from '@/components/Container.vue'
import Title from '@/components/Title.vue'
import { useThemeBorder } from '@/composables/useThemeBoder.ts'
import { Icon } from '@iconify/vue'
import MobileMenu from '@/components/MobileMenu.vue'

const { borderClass } = useThemeBorder()

const toggleMenu = () => {
  console.log('hola babosos jeje')
}
</script>

<template>
  <Container>
    <div
      class="grid grid-cols-2 grid-rows-[auto, 1fr] h-fit pb-[100px] border-b-4"
      :class="borderClass"
    >
      <div class="py-11 md:px-[570px] col-span-2 max-[900px]:hidden">
        <ThemeToggle />
      </div>
      <MenuDesktop />
      <div class="min-[900px]:hidden">
        <button @click="toggleMenu">
          <Icon icon="ic:sharp-menu" class="text-[35px]" />
        </button>
      </div>
      <Title />
    </div>
  </Container>
</template>
