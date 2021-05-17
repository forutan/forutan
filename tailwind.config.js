// import image from "./src/images/hero-pattern.png"
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern' : "url('/img/hero-pattern.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
