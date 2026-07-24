<script setup lang="ts">
import Container from '@/components/Container.vue'
import { useThemeBorder } from '@/composables/useThemeBoder'

const { borderClass } = useThemeBorder()
</script>

<template>
  <Container>
    <div id="contact" class="mt-64 mx-4 border p-5" :class="borderClass">
      <h3 class="font-bold text-[96px]">Contact me</h3>
    </div>
  </Container>
</template>
