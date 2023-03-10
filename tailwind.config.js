/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#12232E',
        bgLightBlue: '#007CC7',
        bgDarkBlue: '#203647',
        textLightBlue: '#EEFBFB',
        textDarkBlue: '#4DA2DA',
      },
      fontFamily: {
        sans: ['Inconsolata', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        xSmallHeight: { raw: '(max-height: 490px)' },
        smallHeight: { raw: '(max-height: 725px)' },
      },
      height: {
        '100dvh': '100dvh',
      },
    },
  },
  plugins: [],
};
