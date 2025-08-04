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
      },
    },
  },
  plugins: [],
}