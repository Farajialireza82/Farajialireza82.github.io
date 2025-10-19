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
          manualChunks: (id) => {
            // Create vendor chunks for node_modules dependencies
            if (id.includes('node_modules')) {
              // Group by package name for better caching
              const packageName = id.split('node_modules/')[1].split('/')[0];
              return 'vendor';
            }
          }
        }
      }
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
