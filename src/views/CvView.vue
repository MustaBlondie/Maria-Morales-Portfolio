<script setup lang="ts">
import Container from '@/components/Container.vue'
import { Icon } from '@iconify/vue'
import { useThemeBorder } from '@/composables/useThemeBoder'
import { useThemeHover } from '@/composables/useThemeHover'

const { hoverClass } = useThemeHover()
const { borderClass } = useThemeBorder()

const items = [
  { icon: 'lucide:contact-round', label: 'cv.cvContInfo' },
  { icon: 'streamline-pixel:content-files-archive-books-3', label: 'cv.cvEducation' },
  { icon: 'pixel:pc', label: 'cv.cvExperience' },
  { icon: 'clarity:tools-solid', label: 'cv.cvSkills' },
]
</script>
<template>
  <Container>
    <div id="cv" class="mt-[70px] md:mt-[200px] px-5 md:px-20">
      <h1 class="md:text-right text-[36px] md:text-[55px] font-bold mb-5">
        {{ $t('cv.cvTitle') }}
      </h1>
      <div class="flex flex-col md:flex-row gap-14">
        <div
          class="flex md:flex-col border divide-x md:divide-y md:divide-x-0 text-center text-[20px]"
          :class="borderClass"
        >
          <div
            v-for="item in items"
            key="item.label"
            class="flex flex-1 flex-col p-3 gap-y-1 md:px-9 md:py-8 md:gap-y-3 text-center text-[14px] md:text-[20px]"
            :class="[borderClass, hoverClass]"
          >
            <Icon :icon="item.icon" class="text-[22px] md:text-[60px] block mx-auto" />
            <p>{{ $t(item.label) }}</p>
          </div>
        </div>

        <div class="flex-1 border-[2px] mb-14" :class="borderClass">hola</div>
      </div>
      <div class="flex justify-end">
        <button
          class="border-2 mt-3 md:mt-5 px-9 py-2 md:text-[16px] font-semibold"
          :class="[borderClass, hoverClass]"
        >
          {{ $t('cv.cvButtonDown') }}
        </button>
      </div>
    </div>
  </Container>
</template>
