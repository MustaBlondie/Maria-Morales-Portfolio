<script setup lang="ts">
import Container from '@/components/Container.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectSmallCard from '@/components/ProjectSmallCard.vue'
import { useThemeBorder } from '@/composables/useThemeBoder'

const { borderClass } = useThemeBorder()
</script>
<template>
  <Container>
    <div id="projects" class="mt-[200px] px-20 900:pb-[150px] 900:border-b-4" :class="borderClass">
      <h2 class="text-right font-bold text-[96px]">{{ $t('projects.projectsMainTitle') }}</h2>
      <ProjectCard />
      <div>
        <ProjectSmallCard />
      </div>
    </div>
  </Container>
</template>
