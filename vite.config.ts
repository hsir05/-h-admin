import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /\/#\//,
        replacement: resolve(process.cwd(), ".", "types") + "/",
      },
      {
        find: "@",
        replacement: resolve(process.cwd(), ".", "src") + "/",
      },
    ],
    dedupe: ["vue"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/main.scss";',
      },
    },
  },
  server: {
    host: "0.0.0.0",
  },
});
