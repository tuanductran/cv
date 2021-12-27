import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'
import compress from 'vite-plugin-compress'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), crossOriginIsolation(), compress(), viteCompression()]
})
