/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      spacing: {
        '5px': '5px'
      }
    },
    colors:{
      'beige':'#f5f5dc',
      'teal':'#008080',
      'white':'#ffffff',
      'black':'#000000',
      'grey':'#363636',
      'blue':'#ADD8E6'
    }
  },
  plugins: [],
}

