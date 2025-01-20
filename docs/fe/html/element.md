# HTML 元素

## &lt;!--...--&gt; 标签

注释标签用于在源代码中插入注释。注释不会在浏览器中显示。

### 用法

```html
<!-- 这是一条注释。注释不会在浏览器中显示。 -->
<p>这是一个段落。</p>
```

## &lt;!DOCTYPE&gt; 声明

所有 HTML 文档都必须以 <!DOCTYPE> 声明开始。这个声明不是 HTML 标签，而是向浏览器提供有关所期望的文档类型的“信息”。

### 用法

```html
<!DOCTYPE html>
<html>
<head>
<title>文档的标题</title>
</head>

<body>
文档的内容 ......
</body>

</html>
```

## &lt;a&gt; 超链接小能手

这个标签可是网页里的"任意门"，想去哪点哪！通过href属性，它能带你去其他网页、文件、邮箱，甚至同一页面的某个位置。

### 用法

| <div style="width: 100px">属性</div> | <div style="width: 100px">值</div> | 描述及用法 |
|:-|:-|:-|
| download | 文件名 | 下载文件时，给文件起个新名字，比如：<br/>`<a href="https://web.fullstack.ren/" download="江湖聊IT">点我下载</a>` |
| href | URL | 这是链接的"目的地"，想去哪就填哪：<br/>`<a href="https://web.fullstack.ren/">点我去江湖聊IT</a>` |
| hreflang | 语言代码 | 告诉浏览器目标网页是什么语言的：<br/>`<a hreflang="zh" >中文页面</a>` |
| media | 媒体查询 | 这个链接最适合在什么设备上打开：<br/>`<a href="print.html" media="print and (resolution:300dpi)">打印专用链接</a>` |
| ping | URL 列表 | 偷偷告诉服务器有人点了这个链接（用空格分开多个地址）：<br/>`<a ping="https://web.fullstack.ren/trackpings">点我试试</a>` |
| referrerpolicy | 各种策略 | 点击时要不要告诉对方你是谁：<br/> `<a referrerpolicy="no-referrer">匿名访问</a>`|
| rel | 各种关系 | 说明这个链接和当前页面的关系：<br/> `<a rel="nofollow">不要跟踪我</a>` |
| target | _blank<br/>_parent<br/>_self<br/>_top | 链接在哪里打开：<br/> `<a target="_blank">新窗口打开</a>` |
| type | 媒体类型 | 告诉浏览器目标是什么类型的文件：<br/> `<a type="text/html">HTML文件</a>` |

## &lt;abbr&gt; 缩写元素

`<abbr>` 标签定义缩写词或首字母缩写词，例如“HTML”、“CSS”、“Mr.”、“Dr.”、“ASAP”、“ATM”。

通过对缩写进行标记，您能够为浏览器、拼写检查和搜索引擎提供有用的信息。

`<abbr>` 标签最初是在 HTML 4.0 中引入的，表示它所包含的文本是一个更长的单词或短语的缩写形式。

提示：当您将鼠标悬停在元素上时，使用全局 title 属性可显示对缩写词/首字母缩略词的描述。

### 用法

```html
<!DOCTYPE html>
<html>
<body>

<h1>abbr 元素</h1>

<p><abbr title="World Health Organization">WHO</abbr> 成立于 1948 年。</p>

</body>
</html>
```

## &lt;address&gt;

`<address>` 标签定义文档或文章的作者/所有者的联系信息。

- 如果 `<address>` 元素位于 `<body>` 元素内，则它表示文档联系信息。
- 如果 `<address>` 元素位于 `<article>` 元素内，则它表示文章的联系信息。
- 提示：`<address>` 元素通常连同其他信息被包含在 `<footer>` 元素中。联系信息可以是电子邮件地址、URL、实际地址、电话号码、社交媒体账号等。

`<address>` 元素中的文本通常以斜体呈现，浏览器总是会在 `<address>` 元素前后添加一个换行符。

### 用法

```html
<address>
Written by <a href="mailto:jianghu-talk-it@163.com">江湖聊IT</a>.<br>
在这里访问我们：<br>
[web.fullstack.ren](https://web.fullstack.ren/)<br>
中国/浙江/杭州
</address>
```