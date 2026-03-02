// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  output: 'static',
  site: 'https://g8id.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs()],
});
