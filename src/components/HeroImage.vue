<template>
  <div class="relative w-[372px] max-w-full aspect-[372/431]">
    <div class="absolute top-0 right-0 w-[72%] h-[97%]">
      <div
        aria-hidden="true"
        class="w-full h-full inset-0 border border-btn-border-light dark:border-btn-border-dark [--grid-color:theme(colors.btn-border-light)] dark:[--grid-color:theme(colors.btn-border-dark)]"
        :style="{
          backgroundImage: `
          repeating-linear-gradient(
            to right,
            transparent 0,
            transparent calc(100% / 6 - 1px),
            var(--grid-color) calc(100% / 6 - 1px),
            var(--grid-color) calc(100% / 6)
          ),
          repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent calc(100% / 8 - 1px),
            var(--grid-color) calc(100% / 8 - 1px),
            var(--grid-color) calc(100% / 8)
          )
        `,
        }"
      ></div>
    </div>

    <div class="absolute top-[9.28%] left-0 w-[77%] h-[188px]">
      <div class="w-full h-full bg-bg-hero-recta"></div>
    </div>

    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[86%]">
      <img class="max-w-full max-h-full" src="../assets/images/Hero_Maria_image.png" alt="Maria" />
    </div>
  </div>
</template>
