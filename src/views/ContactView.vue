<script setup lang="ts">
import Container from '@/components/Container.vue'
import { useThemeBorder } from '@/composables/useThemeBoder'
import { Icon } from '@iconify/vue'

const { borderClass } = useThemeBorder()
</script>

<template>
  <Container>
    <div id="contact" class="mt-64 mx-4 border px-5 pt-5" :class="borderClass">
      <div class="pb-5">
        <h3 class="font-bold text-[96px]">Contact me</h3>
      </div>
      <div class="flex gap-5">
        <div class="flex-1 border-r" :class="borderClass">
          <div class="flex flex-col gap-2 mb-5">
            <Icon icon="mdi:gmail" class="text-[45px]" />
            <h3 class="text-[20px]">MaVMoZu@gmail.com</h3>
          </div>
        </div>
        <div class="flex-1 border-r" :class="borderClass">
          <div class="flex flex-col gap-2 mb-5">
            <Icon icon="mdi:github" class="text-[45px]" />
            <h3 class="text-[20px]">MustaBlondie</h3>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex flex-col gap-2 mb-5">
            <Icon icon="mdi:linkedin" class="text-[45px]" />
            <h3 class="text-[20px]">Maria Morales</h3>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
