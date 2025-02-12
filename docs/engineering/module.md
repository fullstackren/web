# 模块化

## Tree-Shaking

Tree-shaking，中文名称**除屑优化**或**摇树优化**，通过静态分析你导入的代码，并将排除任何实际上没有使用的内容。

比如，我们要使用 `ajax` 方法来实现一个搜索功能，我们可以这样写：

使用 CommonJS，这就**必须导入整个工具或库**：

```js
// 使用 CommonJS 导入整个 utils 对象
const utils = require('./utils');
const query = 'Rollup';
// 使用 utils 对象的 ajax 方法。
utils.ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```

使用 ES 模块，就不需要导入整个 `utils` 对象，**只需导入需要的一个 `ajax` 函数**：

```js
// 使用 ES6 的 import 语句导入 ajax 函数。
import { ajax } from './utils';
const query = 'Rollup';
// 调用 ajax 函数
ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```