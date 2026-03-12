import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://portfolio.iamsukosan.com',

  output: 'server',

  adapter: cloudflare(),

  integrations: [
    mdx(),
    react(),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});