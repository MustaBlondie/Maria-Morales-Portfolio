/// <reference types="vite/client" />

declare module '~icons/*' {
  import { DefineComponent } from 'vue'
  // Acepta cualquier propiedad común de un elemento SVG/HTML
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
  export default component
}
