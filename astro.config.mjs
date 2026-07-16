import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portfolio-yulio64neos.pages.dev',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;

        const redirectedRoutes = [
          '/',
          '/about/',
          '/blog/',
          '/contact/',
          '/projects/',
          '/services/',
        ];

        return !redirectedRoutes.includes(pathname);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});