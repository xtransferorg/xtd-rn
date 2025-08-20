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

需要显示图片时使用，支持多种格式包括 PNG、JPG、WebP、GIF、SVG 等，提供丰富的显示控制和优化功能。

---

## 代码演示

### 基础用法

<code src="./__fixtures__/basicUsage.tsx" />

### 尺寸和位置

<code src="./__fixtures__/resizeAndPosition.tsx" />

### 效果和动画

<code src="./__fixtures__/effectsAndAnimation.tsx" />

### 事件和缓存

<code src="./__fixtures__/eventsAndCache.tsx" />

### 无障碍访问

<code src="./__fixtures__/accessibility.tsx" />

## API

<API hideTitle src="./Image.doc.tsx" />

## 类型定义
```typescript
type ImageSource = {
  /** 图像资源标识符的字符串 */
  uri?: string;
  /** 远程图片请求一起发送的HTTP头的对象 */
  headers?: Record<string, string>;
  /** 宽度 */
  width?: number;
  /** 高度 */
  height?: number;
  /** 用于查询和存储此特定图像的缓存键，默认是uri */
  cacheKey?: string;
  /** 图像是否有动画（例如GIF动画或WebP动画） */
  isAnimated?: boolean;
};
```
```typescript
type ImageContentFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
```
```typescript
type ImageContentPosition = 
  | 'center' | 'top' | 'right' | 'bottom' | 'left'
  | 'top center' | 'top right' | 'top left'
  | 'right center' | 'right top' | 'right bottom'
  | 'bottom center' | 'bottom right' | 'bottom left'
  | 'left center' | 'left top' | 'left bottom'
  | { top?: number | string; left?: number | string }
  | { top?: number | string; right?: number | string }
  | { bottom?: number | string; left?: number | string }
  | { bottom?: number | string; right?: number | string };
```
```typescript
type ImageTransition = {
  /** 过渡的持续时间，单位为毫秒 */
  duration?: number;
  /** 指定过渡效果的速度曲线 */
  timing?: 'ease-in-out' | 'ease-in' | 'ease-out' | 'linear';
  /** 用于过渡的动画效果 */
  effect?: 'cross-dissolve' | 'flip-from-top' | 'flip-from-right' 
         | 'flip-from-bottom' | 'flip-from-left' | 'curl-up' | 'curl-down' | null;
};
```

## 静态方法

Image.clearDiskCache()
清除磁盘缓存。

Image.clearMemoryCache()
清除内存缓存。

Image.getCachePathAsync(uri: string)
获取指定图片的缓存路径。

```typescript
// 使用示例
const cachePath = await Image.getCachePathAsync('https://example.com/image.jpg');
```

## 注意事项

1. **尺寸设置优先级**: style > source > props，建议统一使用一种方式
2. **SVG 支持**: 复杂的 SVG 可能需要特殊处理，建议测试兼容性
3. **缓存策略**: 根据使用场景选择合适的缓存策略，避免内存泄漏
4. **性能优化**: 大图片建议开启降采样，列表场景使用 recyclingKey
5. **无障碍**: 重要图片务必添加 accessibilityLabel 或 alt 属性
6. **平台差异**: 某些功能仅在特定平台可用，注意兼容性处理
