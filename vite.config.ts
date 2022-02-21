import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        // naive ui 的自动引入，只需要这一句
        NaiveUiResolver(),
        // AntDesign vue 的自动引入，只需要这一句
        // AntDesignVueResolver()
      ],
    }),
  ],
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
