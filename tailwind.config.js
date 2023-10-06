/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'darkGrey': '#121212',
      'white': '#ffffff',
      'beige': 'rgb(239, 239, 239)',
      'black': '#252525',
      'yellow': '#F2C94C',
      'red': '#F2994A',
      'yellowShadow': '#F2C94C',
      // 'red': '#F2C94C'
    }
  },
  plugins: [],
}

