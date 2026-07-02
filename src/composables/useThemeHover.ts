import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/store/theme'

export function useThemeHover() {
  const themeStore = useThemeStore()
  const { isDark } = storeToRefs(themeStore)

  const hoverClass = computed(() => ({
    'hover:bg-[rgba(253,212,189,0.40)]': isDark.value,
    'hover:bg-[rgba(17,19,20,0.40)]': !isDark.value,
  }))

  return { hoverClass }
}
