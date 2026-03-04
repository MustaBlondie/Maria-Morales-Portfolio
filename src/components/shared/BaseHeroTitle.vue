<script setup lang="ts">
import { computed } from 'vue'

type HeroTitlePosition = 'home' | 'about' | 'default'

interface Props {
  position?: HeroTitlePosition
}

const props = withDefaults(defineProps<Props>(), {
  position: 'default',
})

const positionClasses = computed((): string => {
  const positions: Record<HeroTitlePosition, string> = {
    home: 'sm:justify-end  sm:items-end',
    about: 'sm:justify-start ',
    default: '',
  }
  return positions[props.position]
})

const titleClasses = computed((): Record<string, string> => {
  const positions: Record<HeroTitlePosition, Record<string, string>> = {
    home: {
      h1: 'sm:text-4xl sm:px-3.5',
      h2: 'sm:text-8xl sm:px-3.5 -mt-2',
    },
    about: {
      h1: 'sm:text-4xl',
      h2: 'sm:text-7xl',
    },
    default: {
      h1: '',
      h2: '',
    },
  }
  return positions[props.position]
})
</script>

<template>
  <div class="flex flex-1 pt-3.5 mb-4 sm:px-9">
    <div :class="['sm:text-right flex sm:flex-col flex-col-reverse mt-9', positionClasses]">
      <h2 :class="['text-base font-semibold sm:font-extrabold', titleClasses.h2]">MARIA MORALES</h2>
      <h1 :class="['text-xl sm:font-semibold font-extrabold', titleClasses.h1]">WEB DEVELOPER</h1>
    </div>
  </div>
</template>
