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

2.
