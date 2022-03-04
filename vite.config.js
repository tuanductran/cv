import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteRadar from 'vite-plugin-radar'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	    ViteRadar({
			// Google Analytics tag injection
			analytics: {
			  id: 'UA-175649416-2',
			  config: {
				send_page_view: false
			  },
			},
		  }),
		viteSingleFile()
		],
		build: {
			target: "esnext",
			assetsInlineLimit: 100000000,
			chunkSizeWarningLimit: 100000000,
			cssCodeSplit: true,
			brotliSize: true,
			rollupOptions: {
				inlineDynamicImports: true,
				output: {
					manualChunks: () => "bundle.js",
				},
			},
		},
})
