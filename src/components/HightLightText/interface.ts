import { StyleProp, TextStyle, TextProps } from 'react-native';

export interface HightLightTextProps extends TextProps {
  /**
   * 文本信息
   */
  text: string;

  /**
   * 高亮文本
   */
  highlight?: string;

  /**
   * 文本样式
   */
  style?: StyleProp<TextStyle>;
}
