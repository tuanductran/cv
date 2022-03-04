import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
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
