import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/store/theme'

export function useThemeHoverUnderline() {
  const themeStore = useThemeStore()
  const { isDark } = storeToRefs(themeStore)

  const hoverUnderlineClass = computed(() => ({
    'border-b-[3px] border-transparent transition-all duration-300 hover:border-[rgba(253,212,189,0.40)]':
      isDark.value,
    'border-b-[3px] border-transparent transition-all duration-300 hover:border-[rgba(17,19,20,0.40)]':
      !isDark.value,
  }))

  return { hoverUnderlineClass }
}
