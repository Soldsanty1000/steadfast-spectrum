// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://benevolent-truffle-884d4d.netlify.app/",
  integrations: [preact()]
});