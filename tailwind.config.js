const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'primary': '#59ba47',
      },
      gridTemplateRows: {
        'layout': '80px 300px 1fr 48px 48px',
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}