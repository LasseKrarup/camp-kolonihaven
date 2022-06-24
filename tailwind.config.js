const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'darkgreen': "#00A896",
        'lightgreen': "#02C39A",
        'darkblue': '#028090',
      },
    },
    screens: {
      "xs": "376px",
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
