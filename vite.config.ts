import { defineConfig } from 'vite';
import { getDirname } from '@adonisjs/core/helpers';
import inertia from '@adonisjs/inertia/client';
import react from '@vitejs/plugin-react';
import adonisjs from '@adonisjs/vite/client';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: true, entrypoint: 'inertia/app/ssr.tsx' } }),
    react(),
    adonisjs({ entrypoints: ['inertia/app/app.tsx'], reload: ['resources/views/**/*.edge'] }),
    ViteImageOptimizer({
      jpeg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 75,
      },
      avif: {
        quality: 50,
      },
      svg: {
        multipass: true,
      },
    }),
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/inertia/`,
    },
  },
})
