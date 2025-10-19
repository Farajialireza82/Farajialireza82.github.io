// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://farajialireza82.github.io',
  base: '/',
  build: {
    assets: 'assets'
  },
  image: {
    // Enable image optimization
    domains: ['farajialireza82.github.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimize build output
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'gallery': ['./src/utils/imageUtils.ts']
          }
        }
      }
    }
  },
  // Enable compression
  compressHTML: true,
  // Optimize for static generation
  output: 'static',
});
