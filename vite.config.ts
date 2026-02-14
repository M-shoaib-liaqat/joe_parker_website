import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: "./",   // 🔴 this is important for Vercel
    server: {
      port: 3000,
      host: '0.0.0.0',
      // Proxy API calls in local dev to the Express server (`npm run server`).
      // Without this, fetch('/api/...') will hit the Vite dev server and 404.
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
    plugins: [react()],
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
    define: {
      // Do not expose API keys to the frontend
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    css: {
      postcss: path.resolve(__dirname, 'postcss.config.cjs'),
    },
    build: {
      assetsDir: 'assets',
      outDir: 'dist',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      }
    }
  };
});
