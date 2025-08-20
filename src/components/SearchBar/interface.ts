import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { InputProps } from '../Input/interface';

export interface SearchBarProps extends Omit<InputProps, 'style' | 'onChange'> {
  /**
   * 最外层容器样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 内层容器样式
   */
  wrapStyle?: StyleProp<ViewStyle>;
  /**
   * input 容器样式
   */
  inputWrapperStyle?: StyleProp<ViewStyle>;
  /**
   * input 样式
   */
  inputStyle?: InputProps['style'];
  /**
   * 左侧内容
   */
  leftExtra?: React.ReactNode;

  /**
   * 左侧内容样式
   */
  leftExtraStyle?: StyleProp<ViewStyle>;
  /**
   * 右侧内容
   */
  rightExtra?: React.ReactNode;

  /**
   * 右侧内容样式
   */
  rightExtraStyle?: StyleProp<ViewStyle>;
  /**
   * input是否显示search图标
   * @default true
   */
  searchIcon?: boolean;
  /**
   * 配色类型
   * @default default
   */
  colorType?: 'default' | 'primary';
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 背景主色
   */
  backgroundColor?: string;

  /**
   * 输入框变化回调
   */
  onChange?: (val: string | number) => void;
}
