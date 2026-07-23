<script setup lang="ts"></script>
<template>
  <div class="flex mt-[100px] gap-24">
    <div class="grid grid-cols-2 gap-4">
      <div class="w-[212px] h-[236px]">
        <img
          src="../assets/images/1.jpeg"
          alt="project_second_image"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col gap-y-3">
        <div>
          <a href="#" class="font-bold text-[20px]">{{ $t('projects.projMainTitle') }}</a>
          <p class="font-semibold text-[20px]">{{ $t('projects.projYear') }}</p>
        </div>

        <p class="font-semibold text-[20px]">{{ $t('projects.projIntro') }}</p>
        <p class="font-semibold text-[20px]">{{ $t('projects.projTechStackList') }}</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="w-[212px] h-[236px]">
        <img
          src="../assets/images/1.jpeg"
          alt="project_second_image"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col gap-y-3">
        <div>
          <a href="#" class="font-bold text-[20px]">{{ $t('projects.projMainTitle') }}</a>
          <p class="font-semibold text-[20px]">{{ $t('projects.projYear') }}</p>
        </div>

        <p class="font-semibold text-[20px]">{{ $t('projects.projIntro') }}</p>
        <p class="font-semibold text-[20px]">{{ $t('projects.projTechStackList') }}</p>
      </div>
    </div>
  </div>
</template>
