// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://farajialireza82.github.io',
  base: '/alireza_faraji',
  vite: {
    plugins: [tailwindcss()],
  },
});
