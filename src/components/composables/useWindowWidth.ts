import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useWindowWidth() {
  const windowWidth = ref(window.innerWidth)

  const handleResize = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    windowWidth,
    isMobile: computed(() => windowWidth.value < 640),
  }
}
