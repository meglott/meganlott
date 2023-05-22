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
        'light-green': '#ECF5F5',
        'light-purple': '#F0F0F6',
        'gray': '#979797',
        'button': '#719A9C'
      },
      backgroundImage: {
        'splash-screen': "url('../public/splash-screen.png')",
        'heading': "url('../public/heading.png')",
        'about-background': "url('../public/about-background.png')",
      },
      fontSize: {
        title: ['96px', {lineHeight: '96px', fontWeight: '400'}],
        smTitle: ['36px', {lineHeight: '56px', fontWeight: '400'}],
        mdTitle: ['64px', {lineHeight: '80px', fontWeight: '400'}],
        subtitle: ['32px', {lineHeight: '56px', fontWeight:'400'}],
        smSubtitle: ['24px', {lineHeight: '56px', fontWeight: '400'}],
        mdSubtitle: ['26px', {lineHeight: '42px', fontWeight: '400'}],
        heading: ['64px', {lineHeight: '56px', fontWeight: '400'}],
        'label-lg': ['20px', {lineHeight: '32px', fontWeight: '400'}],
      }
    },
  },
  plugins: [],
}
