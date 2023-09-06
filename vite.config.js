import path from 'path';
import { defineConfig, loadEnv } from 'vite';
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, '../');

    return {
        base: '/dist/',
        build: {
            outDir: './dist/',
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    app: './src/index.css',
                },
                output: {
                    entryFileNames: `[name].js`,
                    chunkFileNames: `[name].js`,
                    assetFileNames: `[name].[ext]`
                }
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    };
});
