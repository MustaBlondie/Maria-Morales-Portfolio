<script setup lang="ts">
import Container from '@/components/Container.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectSmallCard from '@/components/ProjectSmallCard.vue'
</script>
<template>
  <Container>
    <div id="about" class="mt-[200px] px-20">
      <h2 class="text-right font-bold text-[96px]">{{ $t('projects.projectsMainTitle') }}</h2>
      <ProjectCard />
    </div>
    <div>
      <ProjectSmallCard />
    </div>
  </Container>
</template>
