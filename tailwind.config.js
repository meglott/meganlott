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
        'title-sm': ['42px', {lineHeight: '56px', fontWeight: '400'}],
        'title-md': ['72px', {lineHeight: '80px', fontWeight: '400'}],
        subtitle: ['32px', {lineHeight: '56px', fontWeight:'400'}],
        smSubtitle: ['24px', {lineHeight: '56px', fontWeight: '400'}],
        'subtitle-md': ['32px', {lineHeight: '42px', fontWeight: '400'}],
        heading: ['80px', {lineHeight: '56px', fontWeight: '400'}],
        'label-lg': ['20px', {lineHeight: '32px', fontWeight: '400'}],
      },
      fontFamily: {
        'permanent-marker': ['Permanent Marker', 'sans-serif']
      },
      dropShadow: {
        'polaroid': '-5px 5px 5px rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [],
}
