/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-dark': '#111314',
        'bg-light': '#CC9DA0',

        // Textos principales
        'text-dark': '#F8B6BA',
        'text-light': '#111314',

        // Textos secundarios
        'text-secondary-dark': '#F6DCDE',
        'text-secondary-light': '#F00000',

        // Bordes
        'border-dark': '#111314',
        'border-light': '#FCC9DA0',
      },
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
      },
      screens: {
        900: '900px', //
      },
    },
  },
  plugins: [],
}
