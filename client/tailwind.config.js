/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'blackDim':'#1A1A1A',
        'blackGrey':'#212121',
        'customBlue':'#01ABF3'
      }
    },
  },
  plugins: [],
}