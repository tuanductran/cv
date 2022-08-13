const colors = require('tailwindcss/colors')
const { color, body } = require('./src/assets/data/infos.json')

module.exports = {
   mode: 'jit',
   darkMode: 'media',
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

   content: [
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],

  plugins: [
      require('flowbite/plugin')
  ],

   purge: [
      './index.html',
      './src/**/*.vue'
   ]
}
