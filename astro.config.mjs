import { defineConfig } from 'astro/config';
import content from 'astro-content';

// https://astro.build/config
export default defineConfig({
  integrations: [content()],
});
