<script setup lang="ts">
import Title from './Title.vue'
</script>

<template>
  <Title :greeting="$t('about.title')" :role="$t('about.role')" />
</template>
