# Vue 3 + Typescript + Router + Vite + Pinia

## 1. 安装依赖及启动

```js
pnpm install //安装依赖

pnpm dev // 启动

```

## 2. 功能配置说明

1. 自动引入

    ​	  [unplugin-vue-components GitHub](https://github.com/antfu/unplugin-vue-components)

    ```js

    pnpm add unplugin-vue-components -D

    import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

    plugins: [
        ...
        Components({
        resolvers: [
            // naive ui 的自动引入，只需要这一句
            NaiveUiResolver()
            // AntDesign vue 的自动引入，只需要这一句
            // AntDesignVueResolver()
        ]
        }),
    ...
    ]
    
    ```

2. 自动压缩/开启压缩报告

    ```js
    rollup-plugin-visualizer // 自动打开打包报告
    vite-plugin-compression // 是否开启压缩

    // 安装
    pnpm add rollup-plugin-visualizer vite-plugin-compression -D

    import { visualizer } from "rollup-plugin-visualizer"
    import compressPlugin from 'vite-plugin-compression';

    visualizer({
        open: true, // 是否直接打开报告
        gzipSize: true, // 是否显示 gzipSize
        brotliSize: false // 是否显示brotliSize
    }),
    compressPlugin({
        ext: '.gz', // 选择压缩后的文件名
        algorithm: 'gzip', // 何中方式压缩 brotliCompress gzip
        deleteOriginFile: false // 是否删除原文件
    })
    ```

3. mock 数据

    ​		[mock Github](https://github.com/vbenjs/vite-plugin-mock)

    ```js
    pnpm add vite-plugin-mock -D
    
    import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
    
    import api from './api';
    
    export function setupMockServer() {
        createProdMockServer(api);
    }
    
    ```

4. vite-plugin-html

     [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html/blob/main/README.zh_CN.md)

    HTML 压缩能力,EJS 模版能力,多页应用支持,支持自定义entry,支持自定义template

    ```js
    pnpm add vite-plugin-html -D
    
    import { createHtmlPlugin } from 'vite-plugin-html'
    
    createHtmlPlugin({
      minify: true,
      /**
       * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
       * @default src/main.ts
       */
      entry: 'src/main.ts',
      /**
       * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
       * @default index.html
       */
      template: 'public/index.html',
    
      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          title: 'index',
          injectScript: `<script src="./inject.js"></script>`,
        },
      },
    }),
    
    ```
