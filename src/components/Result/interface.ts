import { ComponentType, ReactNode } from 'react';
import type { TextStyle, StyleProp, ViewStyle, ViewProps } from 'react-native';
import { ButtonProps } from '@xrnjs/ui';

export interface ResultProps extends ViewProps {
  /**
   * subtitle 文字样式
   */
  subtitleTextStyle?: StyleProp<TextStyle>;

  /**
   * subTitle 文字样式
   */
  titleTextStyle?: StyleProp<TextStyle>;

  /**
   * icon 样式
   */
  iconStyle?: StyleProp<ViewStyle>;

  /**
   * 操作区
   */
  extra?: ReactNode;

  /**
   * 自定义 icon
   */
  renderIcon?: (color: string, size: number) => ReactNode;

  /**
   * 结果的状态，决定图标和颜色
   */
  status: ResultStatus;

  /**
   * subtitle 文字
   */
  subtitle?: ReactNode;

  /**
   * title 文字
   */
  title?: ReactNode;

  /**
   * layout icon 和文字的布局方式
   */
  layout?: 'vertical' | 'horizontal';

  /**
   * 主要按钮文案
   */
  primaryText?: ReactNode;
  /**
   * 主要按钮属性
   */
  primaryProps?: ButtonProps;

  /**
   * 次要按钮文案
   */
  secondaryText?: ReactNode;
  /**
   * 主要按钮文案
   */
  secondaryProps?: ButtonProps;
  /**
   * 自定义拓展区
   */
  expand?: ReactNode;
}

export interface ResultIconProps extends ViewProps {
  width?: number;
  height?: number;
}

export interface IconProps {
  color?: string;
  size?: string | number;
  fillColor?: string;
}
export type IconType = ComponentType<IconProps>;

export type ResultStatus =
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'waiting'
  | 'reject';
