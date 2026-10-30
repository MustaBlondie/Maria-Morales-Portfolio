<script setup lang="ts"></script>

<template>
  <div>
    <div class="flex items-baseline gap-5">
      <h1 class="text-[24px] uppercase font-medium tracking-[0.15em]">
        {{ $t('hero.title.greeting') }} {{ $t('hero.title.name') }}
      </h1>

      <!-- Líneas decorativas -->
      <div class="relative top-[-3px] w-24 shrink-0" aria-hidden="true">
        <div class="h-px w-full bg-text-secondary-light dark:bg-text-secondary-dark"></div>
        <div
          class="absolute right-0 top-0 h-[3px] w-1/2 bg-text-secondary-light dark:bg-text-secondary-dark"
        ></div>
      </div>
    </div>

    <h2
      class="tracking-[0.09em] normal-case font-extrabold text-[60px] text-text-secondary-light dark:text-text-secondary-dark"
    >
      {{ $t('hero.title.role') }}
    </h2>
  </div>
</template>
