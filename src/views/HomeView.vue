<script setup lang="ts">
import { ref } from 'vue'
import LanguageToggle from '@/components/LanguageToggle.vue'
import MenuDesktop from '@/components/MenuDesktop.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import Container from '@/components/Container.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import Hero from '@/components/Hero.vue'
import { useThemeBorder } from '@/composables/useThemeBorder.ts'
import { Icon } from '@iconify/vue'
import { useScrollLock } from '@/composables/useScrollLock.ts'

const { borderClass } = useThemeBorder()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

useScrollLock(isMenuOpen)
</script>

<template>
  <Container>
    <div
      id="home"
      class="w-full max-w-[1100px] mx-auto flex flex-1 items-center justify-between pt-9 px-3 border-b"
      :class="borderClass"
    >
      <div class="max-[900px]:hidden">
        <LanguageToggle />
      </div>

      <div class="flex items-center">
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
    </div>
    <Hero />

    <MobileMenu v-if="isMenuOpen" @close="isMenuOpen = false" />
  </Container>
</template>
