<script setup lang="ts">
import AboutTitle from '@/components/AboutTitle.vue'
import Container from '@/components/Container.vue'
</script>

<template>
  <Container>
    <div
      id="about"
      class="w-full max-w-[1100px] px-3 mb-14 sm:pt-[50px] md:pt-[100px] flex flex-wrap gap-14"
    >
      <div class="w-full max-w-[550px]">
        <AboutTitle />
        <div>
          <p
            class="mb-4 text-[16px] md:text-[18px] tracking-[0.15em] text-text-secondary-light dark:text-text-secondary-dark"
          >
            {{ $t('about.descriptionOne') }}
          </p>
          <p
            class="hidden md:block text-[16px] md:text-[18px] tracking-[0.15em] text-text-secondary-light dark:text-text-secondary-dark"
          >
            {{ $t('about.descriptionTwo') }}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  </Container>
</template>
