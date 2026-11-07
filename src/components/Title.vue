<script setup lang="ts">
interface Props {
  greeting: string
  name: string
  role: string
  showDecorativeLines?: boolean
}

withDefaults(defineProps<Props>(), {
  showDecorativeLines: true,
})
</script>

<template>
  <div>
    <div class="flex items-baseline gap-5 md:gap-3">
      <h1
        class="pb-2 text-[16px] sm:text-[18px] md:text-[24px] uppercase font-medium tracking-[0.10em] md:tracking-[0.15em]"
      >
        {{ greeting }} {{ name }}
      </h1>

      <!-- Líneas decorativas -->
      <div v-if="showDecorativeLines" class="relative top-[-3px] w-24 shrink-0" aria-hidden="true">
        <div class="h-px w-full bg-text-secondary-light dark:bg-text-secondary-dark"></div>
        <div
          class="absolute right-0 top-0 h-[3px] w-1/2 bg-text-secondary-light dark:bg-text-secondary-dark"
        ></div>
      </div>
    </div>

    <h2
      class="pb-4 tracking-[0.05em] leading-none normal-case font-extrabold text-[50px] md:text-[60px] md:leading-normal text-text-secondary-light dark:text-text-secondary-dark"
    >
      {{ role }}
    </h2>
  </div>
</template>
