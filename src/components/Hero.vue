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
    </div>
    <div></div>
  </div>
</template>
