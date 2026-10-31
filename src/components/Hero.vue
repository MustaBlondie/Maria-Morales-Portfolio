<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import Title from './Title.vue'
</script>

<template>
  <div class="w-full max-w-[1180px] mx-auto pt-[30px] sm:pt-[50px] md:pt-[150px] flex">
    <div class="mx-[20px]">
      <Title />
      <div class="w-full max-w-[550px]">
        <p
          class="text-[16px] sm:text-[18px] md:text-[24px] tracking-[0.12em] text-text-secondary-light dark:text-text-secondary-dark"
        >
          {{ $t('hero.description') }}
        </p>
      </div>
      <div class="mt-3 md:mt-10">
        <ul
          class="flex flex-wrap md:items-center gap-x-4 text-[16px] text-text-secondary-light dark:text-text-secondary-dark"
        >
          <li
            v-for="(skill, index) in $tm('hero.codeLanguages')"
            :key="index"
            class="pb-2 flex items-center gap-x-5 before:content-['·'] before:text-text-secondary-light dark:before:text-text-secondary-dark"
            :class="{ 'before:hidden': index === 0 }"
          >
            {{ skill }}
          </li>
        </ul>
      </div>

      <div class="mt-[50px] flex flex-wrap gap-8">
        <BaseButton :text="$t('buttons.viewProjects')" />
        <BaseButton :text="$t('buttons.contact')" variant="outline" />
      </div>
    </div>

    <div></div>
  </div>
</template>
