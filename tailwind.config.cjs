const forms = require("@tailwindcss/forms");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f9f2ff', 
          '100': '#f3e6ff', 
          '200': '#e0bfff', 
          '300': '#ce99ff', 
          '400': '#a94dff', 
          '500': '#8400ff', 
          '600': '#7700e6', 
          '700': '#6300bf', 
          '800': '#4f0099', 
          '900': '#41007d'
        },
        secondary: {
          '50': '#fdfff5', 
          '100': '#fbffea', 
          '200': '#f5ffcc', 
          '300': '#efffad', 
          '400': '#e3ff6f', 
          '500': '#d7ff31', 
          '600': '#c2e62c', 
          '700': '#a1bf25', 
          '800': '#81991d', 
          '900': '#697d18'
        },
      },
    },
  },

  plugins: [forms],
};

module.exports = config;
