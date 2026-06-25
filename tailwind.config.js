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
      backgroundImage: {
        stickyNavbar:
          'linear-gradient(to bottom, rgba(0,0,0,0.17) 0%, rgba(17,19,20,0.15) 57%, rgba(248,182,186,0.05) 100%)',
      },
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}
