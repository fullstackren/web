# HTML 元素

## &lt;!--...--&gt; 标签

这是HTML里的"悄悄话"标签，专门用来写一些不想让用户看到的小秘密。浏览器会假装没看见这些内容，但开发者们可都靠它来写注释呢！

### 用法

```html
<!-- 这是我和代码之间的悄悄话，用户看不见哦 -->
<p>这是用户能看见的内容</p>
```

## &lt;!DOCTYPE&gt; 声明

这是每个HTML文档的"开场白"，就像电影开头的"本故事纯属虚构"一样重要。它告诉浏览器："嘿，接下来我要用HTML5来写代码啦！"

### 用法

```html
<!DOCTYPE html>
<html>
<head>
<title>我的第一个网页</title>
</head>

<body>
欢迎来到我的小天地！
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

这是HTML里的"翻译官"，专门负责解释那些让人摸不着头脑的缩写词。比如"HTML"、"CSS"这些专业术语，有了它，鼠标一放上去就能看到完整解释啦！

### 用法

```html
<p><abbr title="World Health Organization">WHO</abbr> 成立于 1948 年。</p>
```

## &lt;address&gt;

这是网页的"名片夹"，专门用来放联系方式的。可以是邮箱、电话、地址，甚至是社交媒体账号。浏览器会自动把它变成斜体，还会在前后加个空行，让它看起来更专业！

### 用法

```html
<address>
Written by <a href="mailto:jianghu-talk-it@163.com">江湖聊IT</a>.<br>
来找我们玩：<br>
[web.fullstack.ren](https://web.fullstack.ren/)<br>
中国/浙江/杭州
</address>
```

