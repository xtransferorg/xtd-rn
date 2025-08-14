---
title: Image 图片展示
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 2
---

# Image 图片

## 何时使用

需要显示图片, 兼容svg格式

---

## 代码演示

<code src="./__fixtures__/index.tsx" />

## 属性

<API hideTitle src="./Image.doc.tsx" />

### ImageSource
``` ts
type ImageSource = {
  /**
   * 图像资源标识符的字符串
   */
  uri?: string;
  /**
   *远程图片请求一起发送的HTTP头的对象
   */
  headers?: Record<string, string>;
  /**
   * 宽度
   */
  width?: number;
  /**
   * 高度
   */
  height?: number;

  /**
   * 用于查询和存储此特定图像的缓存键 默认是uri
   */
  cacheKey?: string;
  /**
   * 图像是否有动画（例如GIF动画或WebP动画）
   */
  isAnimated?: boolean;
};
```
