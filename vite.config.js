import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'
import ViteRadar from 'vite-plugin-radar'
import compress from 'vite-plugin-compress'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(), 
		crossOriginIsolation(),
	    ViteRadar({
			// Google Analytics tag injection
			analytics: {
			  id: 'UA-175649416-2',
			},
		  }),
		compress(
			{
				exclude: ["infos.json"]
			}
		)
		],
})
