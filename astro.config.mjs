// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://farajialireza82.github.io',
  base: '/',
  build: {
    assets: 'assets',
    // Optimize build output
    inlineStylesheets: 'auto',
  },
  image: {
    // Enable image optimization
    domains: ['farajialireza82.github.io'],
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimize build output
      cssCodeSplit: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro']
          }
        }
      }
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['astro']
    }
  },
  // Enable compression
  compressHTML: true,
  // Optimize for static generation
  output: 'static',
  // Performance optimizations
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});
