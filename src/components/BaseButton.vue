<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  text: string
  variant?: 'primary' | 'outline'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
})
</script>

<template>
  <button
    class="flex-auto min-w-0 basis-auto md:flex-none md:w-[259px] text-xs md:text-[16px] tracking-[0.05em] px-2 py-3 text-center inline-flex items-center justify-center gap-2"
    :class="
      variant === 'primary'
        ? 'dark:bg-btn-bg-dark bg-btn-bg-light dark:text-text-secondary-light text-text-secondary-dark'
        : 'border-2 dark:border-btn-border-dark border-btn-border-light'
    "
  >
    <span class="min-w-0">{{ text }}</span>

    <Icon v-if="variant === 'primary'" icon="akar-icons:arrow-right" class="shrink-0" />
  </button>
</template>
