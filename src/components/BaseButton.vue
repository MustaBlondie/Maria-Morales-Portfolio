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
    v-if="variant === 'primary'"
    class="max-w-[259px] w-full inline-flex items-center justify-center gap-2 py-3 dark:bg-btn-bg-dark bg-btn-bg-light text-center text-text-secondary-dark dark:text-text-secondary-light"
  >
    {{ text }} <Icon icon="akar-icons:arrow-right" />
  </button>
  <button
    v-else
    class="max-w-[259px] w-full py-3 border-2 dark:border-btn-border-dark border-btn-border-light text-center"
  >
    {{ text }}
  </button>
</template>
