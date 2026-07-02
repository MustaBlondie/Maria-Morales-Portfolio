import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/store/theme'

export function useThemeBorder() {
  const themeStore = useThemeStore()
  const { isDark } = storeToRefs(themeStore)

  const borderClass = computed(() => ({
    'border-light': isDark.value,
    'border-dark': !isDark.value,
  }))

  return { borderClass }
}
