<script setup lang="ts">
const emit = defineEmits<{ setScreen: ['home' | 'about'] }>()
</script>

<template>
  <div
    class="hidden w-full sm:flex justify-between items-center my-8 px-9 py-3 border-t border-b border-black font-semibold"
  >
    <button>
      <div class="cursor-pointer" @click="emit('setScreen', 'about')">ABOUT</div>
    </button>

    <button>
      <div class="cursor-pointer">PROJECTS</div>
    </button>

    <button>
      <div class="cursor-pointer">CONTACT</div>
    </button>

    <div class="cursor-pointer">EN/SP</div>
  </div>
</template>
