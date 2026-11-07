<script setup lang="ts">
import Title from './Title.vue'
</script>

<template>
  <Title
    :greeting="$t('hero.title.greeting')"
    :name="$t('hero.title.name')"
    :role="$t('hero.title.role')"
  />
</template>
