import { ImageStyle, ViewStyle } from 'react-native';

export interface IProps {
  /** 容器的宽度 */
  height?: number;
  /** 容器的高度 */
  width?: number;
  /** 容器样式 */
  style?: ViewStyle;
  /** 图片样式 */
  imageStyle?: ImageStyle;
}
