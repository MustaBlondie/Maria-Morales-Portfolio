/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111314', // Color principal para bg en darkmode
        primaryText: '#F8B6BA', // Color letras en darkmode
        secondary: '#FDD4BD', // Color principal para bg en lightmode
      },
    },
  },
  plugins: [],
}
