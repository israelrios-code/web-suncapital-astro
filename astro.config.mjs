import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  build: {
    assets: "astro",
  },
  integrations: [tailwind()],
});
