<script setup lang="ts">
import { computed } from 'vue'

type ButtonPosition = 'home' | 'about' | 'default'

interface Props {
  position?: ButtonPosition
}

const props = withDefaults(defineProps<Props>(), {
  position: 'default',
})

const positionClasses = computed((): string => {
  const positions: Record<ButtonPosition, string> = {
    home: 'sm:mt-28 sm:mb-10 mb-2 mt-10 flex flex-row',
    about: 'sm:mt-28 sm:mb-10 mb-2 mt-10 flex flex-row',
    default: '',
  }

  return positions[props.position]
})
</script>

<template>
  <div :class="positionClasses">
    <router-link to="/curriculum">
      <button
        class="sm:text-lg text-xs font-semibold border-2 rounded-md sm:rounded-lg sm:px-5 px-3.5 sm:py-0.5 py-1 cursor-pointer"
      >
        CV
      </button>
    </router-link>
  </div>
</template>
