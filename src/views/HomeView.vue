<script setup lang="ts">
import MenuDesktop from '@/components/MenuDesktop.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import Container from '@/components/Container.vue'
</script>

<template>
  <Container>
    <div class="py-11 px-4 sm:px-8 md:px-[570px]">
      <ThemeToggle />
    </div>
    <MenuDesktop />
  </Container>
</template>
