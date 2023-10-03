/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        // theme colors
        primary : '#709F36',
        accent: colors.neutral,
        secondery:'#1d1a12',
        baseColor:colors.white,
        txtDark: colors.stone,
        txtLight: colors.white,
        //  status color & status text colors 
        status : {
          red : '#e27c7c',
          text : {
            red : '#dc3545',
            orange: '#ffc107',
            green : '#28a745',
            blue:'#17a2b8'
          }
        },
        // categoryIconBg: "#c0d9df",
        // brandIconBg: "#feb7bf"
      },
      screens: {
        xsm: '450px',
        xxsm: '320px',
      }
    },
  },
  plugins: [],
}