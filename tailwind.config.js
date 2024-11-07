/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      custom: ['heroicBrutal', 'sans-serif'], // 'custom' est le nom de votre classe Tailwind
    },},
  },
  plugins: [],
}




