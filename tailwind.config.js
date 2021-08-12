module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    maxHeight: {
      0: '0',
      xs: '300px',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
