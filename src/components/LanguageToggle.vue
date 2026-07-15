<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const setLanguage = (lang: 'en' | 'es') => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<template>
  <div class="flex items-end pb-10 text-[24px] font-extrabold">
    <button @click="setLanguage('es')">{{ $t('global.es') }}</button>
    <span class="mx-2"> / </span>
    <button @click="setLanguage('en')">{{ $t('global.en') }}</button>
  </div>
</template>
