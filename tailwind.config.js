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
         'sans': ['"system-ui"', '"-apple-system"', '"BlinkMacSystemFont"', '".SFNSText-Regular"', '"sans-serif"', '"ui-monospace"', '"Menlo"', '"Consolas"', '"Monaco"', '"monospace"'],
         'body': ['"system-ui"', '"-apple-system"', '"BlinkMacSystemFont"', '".SFNSText-Regular"', '"sans-serif"', '"ui-monospace"', '"Menlo"', '"Consolas"', '"Monaco"', '"monospace"', '"Font Awesome"']
      }
   },

   plugins: [require("daisyui")],

   daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      darkTheme: "dark",
    },

   purge: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.vue',
      './node_modules/vue3-carousel/dist/**/*.js'
   ]
}