/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'light-gray': '#D9D9D9',
        'title-text': '#ECF5F5'
      },
      backgroundImage: {
        'splash-screen': "url('../public/splash-screen.png')",
      },
      fontSize: {
        title: ['96px', {lineHeight: '96px', fontWeight: '400'}],
        subtitle: ['32px', {lineHeight: '56px', fontWeight:'400px'}],
      }
    },
  },
  plugins: [],
}
