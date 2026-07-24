<script setup lang="ts"></script>
<template>
  <div class="flex mt-[100px]">
    <div class="grid grid-cols-2 grid-rows-2 gap-9">
      <div class="row-span-2 h-[682px]">
        <img
          src="../assets/images/social.jpeg"
          alt="project_main_image"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="w-[340px] h-[379px]">
        <img
          src="../assets/images/1.jpeg"
          alt="project_second_image"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col gap-y-3">
        <div>
          <a href="#" class="font-bold text-[32px]">{{ $t('projects.projMainTitle') }}</a>
          <p class="font-semibold text-[32px]">{{ $t('projects.projYear') }}</p>
        </div>

        <p class="text-[32px]">{{ $t('projects.projIntro') }}</p>
        <p class="font-semibold text-[32px]">{{ $t('projects.projTechStackList') }}</p>
      </div>
    </div>
  </div>

  <div class="flex mt-[100px]">
    <div class="grid grid-cols-2 grid-rows-2 gap-9">
      <div class="w-[340px] h-[379px] justify-self-end">
        <img src="../assets/images/1.jpeg" alt="" class="w-full h-full object-cover" />
      </div>
      <div class="row-span-2 h-[682px]">
        <img src="../assets/images/social.jpeg" alt="" class="w-full h-full object-cover" />
      </div>
      <div class="flex flex-col gap-y-3 text-right">
        <div>
          <a href="#" class="font-bold text-[32px]">{{ $t('projects.projMainTitle') }}</a>
          <p class="font-semibold text-[32px]">{{ $t('projects.projYear') }}</p>
        </div>

        <p class="text-[32px]">{{ $t('projects.projIntro') }}</p>
        <p class="font-semibold text-[32px]">{{ $t('projects.projTechStackList') }}</p>
      </div>
    </div>
  </div>
</template>
