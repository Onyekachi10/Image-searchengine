/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
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

