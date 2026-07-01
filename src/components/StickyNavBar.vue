<script setup lang="ts">
import Container from './Container.vue'
import ThemeToggle from './ThemeToggle.vue'
</script>
<template>
  <Container>
    <div class="mx-auto w-full max-w-[1440px] flex justify-around my-6">
      <ThemeToggle />
      <div>
        <nav class="flex gap-7 text-[20px] font-extrabold tracking-wider">
          <a href="#about">ABOUT</a>
          <a href="#cv">CV</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACTS</a>
        </nav>
      </div>
      <div class="flex items-end pb-10 text-[20px] font-extrabold tracking-wider">
        <button>ES</button>
        <span class="mx-1">/</span>
        <button>EN</button>
      </div>
    </div>
  </Container>
</template>
