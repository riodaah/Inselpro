/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0e27',
        surface: '#0B1220',
        primary: '#2563EB',
        secondary: '#38BDF8',
        accent: '#FACC15',
        'text-main': '#e2e8f0',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

