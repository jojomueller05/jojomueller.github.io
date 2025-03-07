// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://jojomueller05.github.io',
  base: 'jojomueller05.github.io',
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [alpinejs()]
});