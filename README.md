# Vue 3 + Typescript + Router + Vite + Pinia

## 1. 安装依赖及启动

```js
pnpm install //安装依赖

pnpm dev // 启动

```

## 2. 功能配置说明

1. 自动引入

    [GitHub](https://github.com/antfu/unplugin-vue-components)

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
    ollup-plugin-visualizer // 自动打开打包报告
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

    ```js
    pnpm add vite-plugin-mock -D

    
    ```
