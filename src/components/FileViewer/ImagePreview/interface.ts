import { ReactNode } from 'react';

interface urlObj {
  uri: string;
  type?: string;
}

export interface ImageViewerProps {
  /**
   * 小图展示是横向还是竖向
   * @default true
   */
  horizontal?: boolean;

  /**
   * 需要把图片一个一个的展示
   */
  children?: ReactNode | ReactNode[];

  /**
   * 图片预览组件背景颜色
   * @default #333333
   */
  backgroundColor?: string;
  /**
   * 图片预览组件隐藏
   */
  hiddenPreviewModal?: (() => void) | undefined;
  /**
   * 图片组件预览到哪一个图片
   */
  previewImageIndex?: ((index: number) => void) | undefined;
  /**
   * 展示的第一张图片位置
   */
  initIndex?: number;
  /**
   * 图片地址
   */
  sources: urlObj[];

  /**
   * 提供了此方法之后，会覆盖默认的下载方法
   */
  onDownload?: (index: number) => void;

  /**
   * 控制缩略图的间距
   */
  gap?: number;

  /**
   * 控制缩略图的大小
   */
  size?: number;
}
