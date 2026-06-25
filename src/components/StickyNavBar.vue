<script setup lang="ts">
import Container from './Container.vue'
import ThemeToggle from './ThemeToggle.vue'
</script>
<template>
  <Container>
    <div
      class="mx-auto w-full max-w-[1440px] flex justify-around bg-stickyNavbar [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] p-7"
    >
      <ThemeToggle />
      <div>
        <nav class="flex gap-7 text-[20px] font-extrabold tracking-wider">
          <a href="#about">ABOUT</a>
          <a href="#cv">CV</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACTS</a>
        </nav>
      </div>
      <div class="flex text-[20px] font-extrabold tracking-wider">
        <button>ES</button>
        <span> / </span>
        <button>EN</button>
      </div>
    </div>
  </Container>
</template>
