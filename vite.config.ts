import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { visualizer } from "rollup-plugin-visualizer";
import compressPlugin from "vite-plugin-compression";

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
    visualizer({
      open: true, // 是否直接打开报告
      gzipSize: true, // 是否显示 gzipSize
      brotliSize: false, // 是否显示brotliSize
    }),
    compressPlugin({
      ext: ".gz", // 选择压缩后的文件名
      algorithm: "gzip", // 何中方式压缩 brotliCompress gzip
      deleteOriginFile: false, // 是否删除原文件
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
