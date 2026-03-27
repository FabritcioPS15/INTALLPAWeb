/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#3E5F1E',
        'secondary-green': '#5C7F2A',
        'accent-green': '#7FAF3B',
        'gold-primary': '#D89B2B',
        'gold-dark': '#A86F1F',
        'gold-soft': '#E3B44C',
        'bg-light': '#F5F3EF',
        'neutral-gray': '#4A4A4A',
        'light-gray': '#E0E0E0',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
