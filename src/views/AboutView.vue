<script setup lang="ts">
import Container from '@/components/Container.vue'
import { useThemeBorder } from '@/composables/useThemeBoder'

const { borderClass } = useThemeBorder()
</script>

<template>
  <Container>
    <div id="about" class="mt-[70px] md:mt-[200px] px-5 md:px-20">
      <h4 class="font-bold text-[36px] md:text-[96px]">{{ $t('about.aboutTitle') }}</h4>
      <div class="text-right tracking-[0.09em] md:text-left max-w-4xl mt-2 md:mt-4">
        <p class="pl-10 md:pl-0 md:text-[24px]">{{ $t('about.aboutP1') }}</p>

        <div class="hidden md:block">
          <h4 class="md:text-[24px] font-extrabold pt-4 pb-2">{{ $t('about.aboutTitle2') }}</h4>
          <div class="pl-5">
            <ul class="list-disc pl-2 md:text-[20px]">
              <li v-for="(skill, index) in $tm('about.skillList')" :key="index">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
        <div class="hidden md:block">
          <h4 class="md:text-[24px] font-extrabold pt-4 pb-2">{{ $t('about.aboutTitle3') }}</h4>
          <p class="md:text-[24px]">{{ $t('about.aboutP3') }}</p>

          <h4 class="md:text-[24px] font-extrabold pt-4 pb-2">{{ $t('about.aboutTitle4') }}</h4>
          <p class="md:text-[24px]">{{ $t('about.aboutP4') }}</p>
        </div>
      </div>
      <div class="mt-4 md:mt-20 text-right tracking-[0.09em] md:text-left">
        <h3 class="text-[20px] font-semibold">{{ $t('about.buttonHelperText1') }}</h3>
        <h4 class="text-[20px] font-semibold">{{ $t('about.buttonHelperText2') }}</h4>
        <button
          class="border-2 md:border-4 mt-3 md:mt-5 px-9 py-2 md:text-[24px] font-semibold"
          :class="borderClass"
        >
          {{ $t('nav.cv') }}
        </button>
      </div>
    </div>
  </Container>
</template>
