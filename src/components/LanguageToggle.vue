<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
const { locale } = useI18n()

const isOpen = ref(false)

const toggleDropDown = () => {
  isOpen.value = !isOpen.value
}

const setLanguage = (lang: 'en' | 'es') => {
  locale.value = lang
  localStorage.setItem('locale', lang)
  isOpen.value = false
}
</script>

<template>
  <div class="flex items-center text-[20px] font-extrabold">
    <Icon icon="ic:round-language" class="text-[45px]" />
    <div class="text-[16px] relative">
      <button @click="toggleDropDown" class="flex flex-col items-center uppercase">
        <span>{{ locale }}</span>
        <Icon
          icon="iconamoon:arrow-down-2-fill"
          class="transition-transform duration-450"
          :class="{ 'rotate-180': isOpen }"
        />
      </button>
      <div v-if="isOpen" class="absolute">
        <button v-if="locale != 'en'" @click="setLanguage('en')" class="">
          {{ $t('global.en') }}
        </button>
        <button v-if="locale != 'es'" @click="setLanguage('es')" class="">
          {{ $t('global.es') }}
        </button>
      </div>
    </div>
  </div>
</template>
