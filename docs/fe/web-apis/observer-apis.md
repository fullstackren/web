# 前端 Observer APIs，建议在脑海中先留个痕

## IntersectionObserver

**作用**：监听目标元素与视口（或指定父元素）的交叉状态（是否可见）。
**使用场景**：图片懒加载、广告曝光统计、滚动动画触发。

```js
// 实例：元素进入视口时加载图片
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // 替换 data-src 为实际 URL
      observer.unobserve(img);   // 加载后停止观察
    }
  });
});

// 观察所有带有 data-src 的图片
document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});
```

## MutationObserver

**作用**：监听 DOM 树的变化（节点增删、属性修改等）。
**使用场景**：动态内容监控（如富文本编辑器）、第三方脚本行为追踪。

```js

```