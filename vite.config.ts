import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: "es2022",
		cssMinify: "lightningcss",
		cssCodeSplit: true,
		minify: 'terser',
	},
	optimizeDeps: {
		esbuildOptions: {
			target: 'es2022'
		}
	}
});
