// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";



// https://astro.build/config
export default defineConfig({
  site: "https://ultro.browning.edu",

  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true,
  },

  integrations: [
    icon(),
    sitemap(),
    (await import("@playform/compress")).default({
      Exclude: [
        (File: string) => File.includes("dist/old/"), // Excluded for preservation purposes
      ],
    }),
  ],
});
