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
    home: 'sm:items-end sm:justify-end',
    about: 'sm:justify-start  sm:items-end sm:mt-14',
    default: 'sm:justify-center',
  }
  return positions[props.position]
})

const titleClasses = computed((): Record<string, string> => {
  const positions: Record<HeroTitlePosition, Record<string, string>> = {
    home: {
      h1: 'sm:text-4xl',
      h2: 'sm:text-8xl -mt-2',
    },
    about: {
      h1: 'sm:text-4xl sm:mt-9',
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
  <div class="flex flex-1 pt-3.5 sm:pl-9 sm:ml-auto">
    <div :class="['sm:text-right flex sm:flex-col flex-col-reverse mt-9', positionClasses]">
      <h2 :class="['text-base font-semibold sm:font-extrabold', titleClasses.h2]">MARIA MORALES</h2>
      <h1 :class="['text-xl sm:font-semibold font-extrabold', titleClasses.h1]">WEB DEVELOPER</h1>
    </div>
  </div>
</template>
