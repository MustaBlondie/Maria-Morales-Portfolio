import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import './styles/fonts.css'
import App from './App.vue'

import en from './locales/en.json'
import es from './locales/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
    es: es,
  } as any,
})

const pinia = createPinia()
const app = createApp(App)

app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#app')
