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
				cookie_domain: 'auto',
				cookie_expires: 63072000,
				cookie_prefix: 'none',
				cookie_update: true,
				cookie_flags: '',
				send_page_view: true,
				allow_google_signals: true,
				allow_ad_personalization_signals: true,
			  },
			},
		  }),
		viteSingleFile()
		],
		build: {
			target: "esnext",
			assetsInlineLimit: 100000000,
			chunkSizeWarningLimit: 100000000,
			cssCodeSplit: false,
			brotliSize: false,
			rollupOptions: {
				inlineDynamicImports: true,
				output: {
					manualChunks: () => "bundle.js",
				},
			},
		},
})
