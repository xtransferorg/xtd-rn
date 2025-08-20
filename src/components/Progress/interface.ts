import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export const ProgressTypes = ['line', 'circle'] as const;
export type ProgressType = (typeof ProgressTypes)[number];
export const ProgressStatuses = ['normal', 'exception', 'success'] as const;
export type ProgressSize = 'default' | 'small';

export type LineGradientColor = string[];

export type PercentPositionType = 'top' | 'right' | 'bottom' | 'left';

export type ViewLayout = { width: number; height: number };
export interface SuccessProps {
  percent?: number;
  strokeColor?: string;
}

export interface ProgressProps {
  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 进度条样式
   */
  progressStyle?: StyleProp<ViewStyle>;

  /**
   * 进度条类型，可选 line circle
   * @default line
   */
  type?: ProgressType;

  /**
   * 进度条百分比
   * @default 0
   */
  percent?: number;

  /**
   * 进度条内容的模板函数
   */
  format?: (percent?: number, pivotText?: ReactNode) => React.ReactNode;

  /**
   * 进度条状态，可选：success exception normal
   * @default normal
   */
  status?: (typeof ProgressStatuses)[number];

  /**
   * 是否显示进度数值或状态图标
   */
  showInfo?: boolean;

  /**
   * 进度条的色彩
   */
  strokeColor?: string | LineGradientColor;
  /**
   * 未完成的分段的颜色
   */
  trailColor?: string;

  /**
   * 进度条的尺寸
   * @default default
   */
  size?: number | [number, number] | ViewLayout | 'small' | 'default';
  /**
   * 自定义进度条文案
   */
  children?: React.ReactNode;
  /**
   * 自定义进度条文案
   */
  pivotText?: ReactNode;
  /**
   * 进度文案位置，圆环进度条无效
   * @default right
   */
  percentPosition?: PercentPositionType;
  /**
   * 是否开启进度条变动动画
   * @default false
   */
  animated?: boolean;

  /**
   * 动画持续时间
   * @default 200
   */
  animationDuration?: number;

  /**
   * 动画结束的回调
   */
  onAnimationEnd?: (percentage: number) => void;
}
