<script setup lang="ts">
import Container from '@/components/Container.vue'
import { useThemeBorder } from '@/composables/useThemeBoder'
import { Icon } from '@iconify/vue'

const { borderClass } = useThemeBorder()
</script>

<template>
  <Container>
    <div id="contact" class="mx-2 md:mx-28 border px-5 pt-3" :class="borderClass">
      <div class="pb-3">
        <h3 class="font-bold md:text-right text-[40px] md:text-[60px]">Contact me</h3>
      </div>
      <div class="flex flex-col md:flex-row gap-3 md:gap-5">
        <div class="flex-1 md:border-r" :class="borderClass">
          <div class="flex md:flex-col gap-2 mb-5">
            <Icon icon="mdi:gmail" class="text-[30px] md:text-[45px]" />
            <a href="mailto:victorina23x@gmail.com">
              <h3 class="md:text-[15px] 900:text-[20px]">MaVMoZu@gmail.com</h3>
            </a>
          </div>
        </div>
        <div class="flex-1 md:border-r" :class="borderClass">
          <div class="flex md:flex-col gap-2 mb-5">
            <Icon icon="mdi:github" class="text-[30px] md:text-[45px]" />
            <a href="https://github.com/MustaBlondie" target="_blank" rel="noopener noreferrer"
              ><h3 class="md:text-[15px] 900:text-[20px]">MustaBlondie</h3></a
            >
          </div>
        </div>
        <div class="flex-1">
          <div class="flex md:flex-col gap-2 mb-5">
            <Icon icon="mdi:linkedin" class="text-[30px] md:text-[45px]" />
            <a
              href="https://www.linkedin.com/in/maria-morales-a956a4246/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 class="md:text-[15px] 900:text-[20px]">Maria Morales</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
