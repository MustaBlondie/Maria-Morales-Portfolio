<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="flex flex-col gap-9 text-[24px] font-extrabold tracking-wider ml-[149px] mt-[100px]">
    <RouterLink to="/about">ABOUT</RouterLink>
    <RouterLink to="/cv">CV</RouterLink>
    <RouterLink to="/projects">PROJECTS</RouterLink>
    <RouterLink to="/contact">CONTACTS</RouterLink>
  </nav>
</template>
