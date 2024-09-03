/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.js','./public/*.html'],
  theme: {
    extend: {
      keyframes : {
        heroAnimation:{
          '0%' : {transform : 'translateY(-100%)', opacity : '0'},
          '100%' : {transform : 'translateY(0)', opacity : '1'}
        },
        fadeIn : {
          '0%' : {opacity : '0'},
          '100%' : {opacity : '1'}
        }
      },
      animation:{
        heroAnimation : 'heroAnimation 1s ease-out forwards',
        fadeIn : 'fadeIn 2s forwards'
      }
      },
  },
  plugins: [],
}

