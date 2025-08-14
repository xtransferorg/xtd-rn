import { ImageProps as XrnImageProps } from '@xrnjs/image';

export interface ImageProps extends XrnImageProps {
  /**
   * 图片宽度 和RN的Image保持一致 权重 style > source > props
   */
  width?: number;
  /**
   * 图片高度 和RN的Image保持一致 权重 style > source > props
   */
  height?: number;
}
