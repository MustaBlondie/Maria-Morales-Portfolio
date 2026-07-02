/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#111314', // Fondo en modo oscuro / texto en modo claro
        darkText: '#F8B6BA', // Texto en modo oscuro
        light: '#FDD4BD', // Fondo en modo claro
      },
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}
