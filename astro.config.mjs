// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://alireza-faraji.github.io',
  base: '/alireza_faraji.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
