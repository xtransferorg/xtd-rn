---
title: PdfViewer PDF查看器
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
---

# PdfViewer PDF查看器

用于在应用中显示 PDF 文档的组件，支持本地文件、网络文件和 Base64 格式。
不支持在线预览，可以在app中查看

## 何时使用

- 需要在应用内预览 PDF 文档
- 显示合同、报告、说明书等文档
- 需要支持缩放、翻页等交互功能
- 处理密码保护的 PDF 文件

## 使用示例

### 基础用法

```tsx | pure
import { PdfViewer } from '@xrnjs/ui';

// 本地文件
<PdfViewer 
  source={{ uri: 'file:///path/to/document.pdf' }}
  style={{ flex: 1 }}
/>

// 网络文件
<PdfViewer 
  source={{ 
    uri: 'https://example.com/document.pdf',
    cache: true 
  }}
  style={{ flex: 1 }}
/>

// Base64 数据
<PdfViewer 
  source={{ 
    uri: 'data:application/pdf;base64,JVBERi0xLjMK...' 
  }}
  style={{ flex: 1 }}
/>
```

### 配置选项

```tsx | pure
import { PdfViewer } from '@xrnjs/ui';

<PdfViewer
  source={pdfSource}
  enablePaging={true}
  enableAnnotationRendering={true}
  enableAntialiasing={true}
  fitPolicy={0}
  scale={1.0}
  minScale={0.5}
  maxScale={3.0}
  spacing={10}
  horizontal={false}
  onLoadComplete={(numberOfPages, filePath) => {
    console.log('PDF 加载完成:', numberOfPages);
  }}
  onPageChanged={(page, numberOfPages) => {
    console.log('当前页:', page);
  }}
  onError={(error) => {
    console.error('PDF 错误:', error);
  }}
/>
```

### 密码保护

```tsx | pure
import { PdfViewer } from '@xrnjs/ui';

<PdfViewer
  source={{ uri: 'https://example.com/protected.pdf' }}
  password="your-password"
  onError={(error) => {
    if (error.message?.includes('password')) {
      // 处理密码错误
    }
  }}
/>
```

### 事件处理

```tsx | pure
import { PdfViewer } from '@xrnjs/ui';

<PdfViewer
  source={pdfSource}
  onPageSingleTap={(page, x, y) => {
    console.log('单击页面:', page, x, y);
  }}
  onPageDoubleTap={(page, x, y) => {
    console.log('双击页面:', page, x, y);
    // 实现双击缩放
  }}
  onScaleChanged={(scale) => {
    console.log('缩放变化:', scale);
  }}
  onLoadProgress={(percent) => {
    console.log('加载进度:', percent);
  }}
/>
```

## API

### PdfViewer

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| source | PDF 文档源 | `Source \| number` | - |
| password | PDF 密码（用于加密文档） | `string` | `''` |
| scale | 缩放比例 | `number` | `1.0` |
| minScale | 最小缩放比例 | `number` | `1.0` |
| maxScale | 最大缩放比例 | `number` | `3.0` |
| horizontal | 是否水平滚动 | `boolean` | `false` |
| page | 当前页码 | `number` | `1` |
| enablePaging | 是否启用分页 | `boolean` | `false` |
| enableRTL | 是否启用从右到左阅读 | `boolean` | `false` |
| enableAnnotationRendering | 是否渲染注释 | `boolean` | `true` |
| enableAntialiasing | 是否启用抗锯齿 | `boolean` | `true` |
| fitPolicy | 适应策略 | `0 \| 1 \| 2` | `2` |
| spacing | 页面间距 | `number` | `10` |
| style | 样式 | `ViewStyle` | - |
| trustAllCerts | 是否信任所有证书 | `boolean` | `true` |
| onLoadComplete | 加载完成回调 | `(numberOfPages: number, filePath: string) => void` | - |
| onPageChanged | 页面变化回调 | `(page: number, numberOfPages: number) => void` | - |
| onError | 错误回调 | `(error: any) => void` | - |
| onPageSingleTap | 单击页面回调 | `(page: number, x: number, y: number) => void` | - |
| onScaleChanged | 缩放变化回调 | `(scale: number) => void` | - |
| onLoadProgress | 加载进度回调 | `(percent: number) => void` | - |

### Source

PDF 文档源类型：

```typescript
type Source = {
  uri?: string;           // 文档 URI（本地文件路径或网络地址）
  cache?: boolean;        // 是否缓存
  expiration?: number;    // 缓存过期时间
  method?: string;        // HTTP 方法
  headers?: object;       // HTTP 请求头
};
```

### fitPolicy 适应策略

- `0`: 适应宽度（FIT_WIDTH）
- `1`: 适应高度（FIT_HEIGHT）  
- `2`: 适应页面（FIT_POLICY）


## 注意事项

### 平台差异

- **Android**: 对于 `content://` 协议的文件，组件会自动复制到临时目录
- **iOS**: 对于 `file://` 协议的文件，组件会自动处理 URL 解码

### 性能优化

- 大文件建议启用缓存：`source={{ uri: '...', cache: true }}`
- 合理设置缩放范围：`minScale` 和 `maxScale`
- 适当的页面间距可以提升用户体验

### 错误处理

- 始终提供 `onError` 回调处理加载失败
- 网络文件加载失败时可以提供重试机制
- 密码保护的文件需要提供密码输入界面

### 安全考虑

- 生产环境建议设置 `trustAllCerts={false}`
- 对于敏感文档，避免启用缓存
- 验证 PDF 文件来源的可信性

## 最佳实践

1. **文件大小控制**: 避免加载过大的 PDF 文件，建议单个文件不超过 50MB
2. **缓存策略**: 网络文件建议启用缓存，本地文件无需缓存
3. **用户体验**: 提供加载进度指示和错误提示
4. **内存管理**: 及时释放不需要的 PDF 资源
5. **响应式设计**: 根据设备屏幕大小调整显示参数
