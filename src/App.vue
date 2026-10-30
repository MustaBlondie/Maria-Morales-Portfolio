<script setup lang="ts">
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import CvView from './views/CvView.vue'
</script>

<template>
  <div
    class="min-h-screen pb-10 bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark transition-colors duration-300 font-roboto"
  >
    <HomeView />
    <AboutView />
    <CvView />
    <ProjectsView />
    <ContactView />
  </div>
</template>
