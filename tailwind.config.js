/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "slick-prev",
    "slick-next",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

