import {defineConfig} from 'vite'

export default defineConfig({
    base: "./", // 👈 ОБЯЗАТЕЛЬНО

    server: {
        proxy: {
            '/api': {
                target: 'https://api.themoviedb.org/3',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})