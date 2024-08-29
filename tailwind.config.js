/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "src/js/main.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Quicksand", "arial"]
      },
   
    },
  },
  plugins: [],
}

