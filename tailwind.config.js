/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    tailwindScrollbar({nocompatible: true}),
    tailwindScrollbarHide
  ],
}

