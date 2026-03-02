<script setup ts></script>
<template>
  <div
    class="hidden sm:flex justify-between my-8 px-9 py-3 border-t border-b border-b-black font-semibold"
  >
    <router-link to="/about">
      <div class="cursor-pointer">ABOUT</div>
    </router-link>

    <router-link to="/projects">
      <div class="cursor-pointer">PROJECTS</div>
    </router-link>

    <router-link to="/contact">
      <div class="cursor-pointer">CONTACT</div>
    </router-link>
    <div class="cursor-pointer">EN/SP</div>
  </div>
</template>
