/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#050423',
        'primary-light': '#EAE4DE',
        'accent-purple': '#281362',
        'accent-blue': '#0F8EAE',
        'accent-green': '#78C162',
        'accent-yellow': '#FCBA2A',
        'accent-pink': '#C73484',
        'gradient-top': '#151A3C',
        'gradient-bottom': '#3746A2',
        'font-light-blue': '#82CCFA',
        'font-dark-blue': '#82A8FA',
        'font-cyan': '#65E6DB',
        'font-green': '#8AFAA6',
        'font-orange': '#FAD082',
        'font-peach': '#FA9E82',
        'font-pink': '#FA8282',
        'font-purple': '#C3D6FF'
      },

      textShadow: {
        'primary-dark': '0 2px 4px #050423',
        'primary-light': '0 2px 4px #EAE4DE',
        'accent-purple': '0 2px 4px #281362',
        'accent-blue': '0 2px 4px #0F8EAE',
        'accent-green': '0 2px 4px #78C162',
        'accent-yellow': '0 2px 4px #FCBA2A',
        'accent-pink': '0 2px 4px #C73484',
        'gradient-top': '0 2px 4px #151A3C',
        'gradient-bottom': '0 2px 4px #3746A2',
        'font-light-blue': '0 2px 4px #82CCFA',
        'font-dark-blue': '0 2px 4px #82A8FA',
        'font-cyan': '0 2px 4px #65E6DB',
        'font-green': '0 2px 4px #8AFAA6',
        'font-orange': '0 2px 4px #FAD082',
        'font-peach': '0 2px 4px #FA9E82',
        'font-pink': '0 2px 4px #FA8282',
        'font-purple': '0 2px 4px #C3D6FF'
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}
