const colors = require('tailwindcss/colors')
const { color, body } = require('./src/assets/data/infos.json')

module.exports = {
   mode: 'jit',   
   darkMode: 'class',

   theme: {
      extend: {
         colors: {
            'main-color': color,
            'color-body': body,
            gray: colors.gray
         }
      },

      fontFamily: {
         'sans': ['"arial"', '"sans-serif"'],
         'body': ['"arial"', '"sans-serif"', '"Font Awesome"']
      }
   },

   purge: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.vue',
      './node_modules/vue3-carousel/dist/**/*.js'
   ]
}