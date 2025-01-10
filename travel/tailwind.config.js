/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        merriw: ['Merriweather', 'serif'], // Add Dancing Script to the font family
      },
    },
  },
  plugins: [],
}