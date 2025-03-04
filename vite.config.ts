import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/images/*",
          dest: "images",
        },
      ],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
