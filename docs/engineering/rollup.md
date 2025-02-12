# Rollup

> [Rollup](https://www.rollupjs.com/) 是一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序。

## 使用方式

### 配置文件方式

这种使用方式支持灵活扩展，**推荐**使用。配置文件是一个 ES 模块，它导出一个默认对象：

::: code-group

```js [rollup.config.mjs/rollup.config.js]
export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    }
  ]
};
```

```cjs [rollup.config.cjs]
// 使用 require 和 module.exports 编写 CommonJS 模块的配置文件

```

:::

### 定义脚本方式

::: code-group

```shell [iife]
# 编译为包含自执行函数（'iife'）的 <script>。
$ rollup main.js --file dist/bundle.iife.js --format iife
```

```shell [cjs]
# 编译为一个 CommonJS 模块 ('cjs')
$ rollup main.js --file dist/bundle.cjs.js --format cjs
```

```shell [umd]
# UMD 格式需要一个包名
$ rollup main.js --file dist/bundle.umd.js --format umd --name "myBundle"
```

:::