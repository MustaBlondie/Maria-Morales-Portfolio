<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
const { locale } = useI18n()

const setLanguage = (lang: 'en' | 'es') => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<template>
  <div class="hidden md:flex items-center text-[20px] font-extrabold">
    <Icon icon="ic:round-language" class="text-[45px]" />
    <div class="flex flex-col items-center text-[16px]">
      <button @click="setLanguage('en')">{{ $t('global.en') }}</button>
      <Icon icon="iconamoon:arrow-down-2-fill" class="text-center" />
    </div>
  </div>
</template>
