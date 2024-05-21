/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
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
      'orange': '#F2B14B',
      // 'progressBlue':'#55868C',
      // 'progressBlue' : '#0ACDFF',
      'progressBlue' : '#40E0D0',
      // 'progressPurple':'#7F636E',
      //'progressPurple': '#AF90A9',
      'progressPurple':'#FFDAB9',
      //'progressGreen':'#88D498',
      'progressGreen':'#F5DEB3',
      //'progressRed':'#AFD2E9'
      'progressRed':'#FF6F61'
      // 'red': '#F2C94C'
    }
  },
  daisyui: {
    themes: [],
  },
  plugins: [
    require('daisyui'),
  ],
}

