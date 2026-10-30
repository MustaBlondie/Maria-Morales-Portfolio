import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  function applyTheme() {
    if (typeof document === 'undefined') return

    // Añadir o eliminar la clase dark del elemento html
    document.documentElement.classList.toggle('dark', isDark.value)

    // Adaptar los controles nativos del navegador
    document.documentElement.style.colorScheme = isDark.value ? 'dark' : 'light'

    // Guardar la preferencia
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme()
  }

  function loadTheme() {
    if (typeof window === 'undefined') return

    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      isDark.value = true
    } else if (savedTheme === 'light') {
      isDark.value = false
    } else {
      // Si no hay preferencia guardada, consultar el sistema
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    applyTheme()
  }

  // Inicializar el tema al crear el store
  loadTheme()

  return {
    isDark,
    toggleTheme,
    loadTheme,
  }
})
