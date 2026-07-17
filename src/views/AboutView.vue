<script setup lang="ts">
import Container from '@/components/Container.vue'
import { useThemeBorder } from '@/composables/useThemeBoder'

const { borderClass } = useThemeBorder()
</script>

<template>
  <Container>
    <div id="about" class="mt-[200px] px-20">
      <h4 class="font-bold text-[96px]">{{ $t('about.aboutTitle') }}</h4>
      <div class="max-w-4xl mt-4">
        <p class="text-[24px]">{{ $t('about.aboutP1') }}</p>

        <div>
          <h4 class="text-[24px] font-extrabold pt-4 pb-2">{{ $t('about.aboutTitle2') }}</h4>
          <div class="pl-5">
            <ul class="list-disc pl-2 text-[20px]">
              <li v-for="(skill, index) in $tm('about.skillList')" :key="index">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>

        <h4 class="text-[24px] font-extrabold pt-4 pb-2">{{ $t('about.aboutTitle3') }}</h4>
        <p class="text-[24px]">{{ $t('about.aboutP3') }}</p>

        <h4 class="text-[24px] font-extrabold pt-4 pb-2">{{ $t('about.aboutTitle4') }}</h4>
        <p class="text-[24px]">{{ $t('about.aboutP4') }}</p>
      </div>
      <div class="mt-20">
        <h3 class="text-[20px] font-semibold">{{ $t('about.buttonHelperText1') }}</h3>
        <h4 class="text-[20px] font-semibold">{{ $t('about.buttonHelperText2') }}</h4>
        <button class="border-4 mt-5 px-9 py-2 text-[24px] font-semibold" :class="borderClass">
          {{ $t('nav.cv') }}
        </button>
      </div>
    </div>
  </Container>
</template>
