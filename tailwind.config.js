/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta tomada del logo: negro, ámbar y blanco
        bg: '#0B0B0C',
        surface: '#131315',
        elevated: '#1B1B1E',
        line: '#2A2A2E',
        accent: '#F5A400',
        'accent-light': '#FFC233',
        primary: '#F5A400',
        secondary: '#FFC233',
        'text-main': '#F4F4F5',
        'text-muted': '#A1A1AA',
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
