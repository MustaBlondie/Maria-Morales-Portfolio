<script setup lang="ts">
import MenuDesktop from '@/components/MenuDesktop.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import Container from '@/components/Container.vue'
import Title from '@/components/Title.vue'
import { useThemeBorder } from '@/composables/useThemeBoder.ts'

const { borderClass } = useThemeBorder()
</script>

<template>
  <Container>
    <div
      class="grid grid-cols-2 grid-rows-[auto, 1fr] h-fit pb-[100px] border-b-4"
      :class="borderClass"
    >
      <div class="py-11 md:px-[570px] col-span-2">
        <ThemeToggle />
      </div>
      <MenuDesktop />
      <Title />
    </div>
  </Container>
</template>
