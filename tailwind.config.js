const colors = require('tailwindcss/colors')
const { color } = require('./public/infos.json')

module.exports = {
   mode: 'jit',   
   darkMode: 'class',

   theme: {
      extend: {
         colors: {
            'main-color': color,
            gray: colors.coolGray
         }
      },

      fontFamily: {
         'sans': ['"Open Sans"', 'sans-serif'],
         'body': ['"Open Sans"', '"Font Awesome"']
      }
   },

   purge: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.vue',
      './node_modules/vue3-carousel/dist/**/*.js',
      './node_modules/aos/src/sass/*.scss'
   ]
}