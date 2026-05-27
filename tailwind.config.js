/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111314', // Color principal para bg en darkmode - letras en lightmode
        secondary: '#FDD4BD', // Color principal para bg en lightmode - letras en darkmode
      },
    },
  },
  plugins: [],
}
