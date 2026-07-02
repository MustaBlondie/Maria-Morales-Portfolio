import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/store/theme'

export function useThemeBorder() {
  const themeStore = useThemeStore()
  const { isDark } = storeToRefs(themeStore)

  const borderClass = computed(() => ({
    'border-primaryText': isDark.value,
    'border-primary': !isDark.value,
  }))

  return { borderClass }
}
