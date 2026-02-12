/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8E7",
        leaf: "#4CAF50",
        milk: "#FFFFFF",
        sky: "#E0F2F1",
        earth: "#8D6E63",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
