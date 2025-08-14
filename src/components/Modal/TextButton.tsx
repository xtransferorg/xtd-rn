import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Button from '../Button';
import { Fill } from '../Button/enum';
import styles from './styles/text-button.style';

export interface TextButtonProps {
  /**
   * loading状态
   */
  loading?: boolean;
  /**
   * 按钮样式
   */
  style?: StyleProp<ViewStyle>;
  onPress?: TextProps['onPress'];
  /**
   * 按钮文字
   */
  text?: string;
  /**
   * 按钮文字样式
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * 按钮文字颜色
   */
  color?: string;
  key?: string;
  /**
   * 是否横向占满全屏
   */
  block?: boolean;
}

const TextButton: React.FC<TextButtonProps> = ({
  loading,
  style,
  onPress,
  text,
  textStyle,
  color = '#999',
}) => (
  <Button
    loading={loading}
    style={StyleSheet.flatten([styles.textButton, style])}
    textStyle={StyleSheet.flatten([{ color }, textStyle])}
    fill={Fill.outline}
    onPress={onPress}
  >
    {text}
  </Button>
);

export default TextButton;
