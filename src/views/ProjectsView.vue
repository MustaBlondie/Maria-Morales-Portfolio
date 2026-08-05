<script setup lang="ts">
import Container from '@/components/Container.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectSmallCard from '@/components/ProjectSmallCard.vue'
</script>
<template>
  <Container>
    <div id="projects" class="mt-[200px] px-5 md:px-20">
      <h2 class="text-right font-bold text-[45px] md:text-[96px]">
        {{ $t('projects.projectsMainTitle') }}
      </h2>
      <ProjectCard />
      <div>
        <ProjectSmallCard />
      </div>
    </div>
  </Container>
</template>
