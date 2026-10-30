<script setup lang="ts">
import Title from './Title.vue'
</script>

<template>
  <div class="w-full max-w-[1180px] mx-auto mt-40 flex">
    <div class="mx-[20px]">
      <Title />
      <div class="w-full max-w-[550px]">
        <p
          class="text-[24px] tracking-[0.12em] text-text-secondary-light dark:text-text-secondary-dark"
        >
          {{ $t('hero.description') }}
        </p>
      </div>
      <div class="mt-10">
        <ul
          class="flex flex-wrap items-center gap-x-4 text-[16px] text-text-secondary-light dark:text-text-secondary-dark"
        >
          <li
            v-for="(skill, index) in $tm('hero.codeLanguages')"
            :key="index"
            class="flex items-center gap-x-4 before:content-['·'] before:text-text-secondary-light dark:before:text-text-secondary-dark"
            :class="{ 'before:hidden': index === 0 }"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>

    <div></div>
  </div>
</template>
