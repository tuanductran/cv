import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteRadar from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	    ViteRadar({
			// Google Analytics tag injection
			analytics: {
			  id: 'UA-175649416-2',
			},
		  })
		],
})
