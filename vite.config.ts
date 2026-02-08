import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    c<<<<<<< HEAD
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
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
      build: {
        assetsDir: 'assets',
        outDir: 'dist',
        rollupOptions: {
          output: {
            assetFileNames: 'assets/[name]-[hash][extname]'
          }
=======
  const env = loadEnv(mode, '.', '');
  return {
    base: "./",   // 🔴 THIS IS THE FIX
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      assetsDir: 'assets',
      outDir: 'dist',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]'
>>>>>>> 8bc44e6900ff8a1eaa89e96e4d3fe9908686fc35
        }
      }
    }
  };
