import React from 'react';
import type { ViewStyle, StyleProp, TextStyle } from 'react-native';

export type NoticeBarType = 'remind' | 'warn' | 'fail' | 'success';
export interface NoticeBarProps {
  /**
   * 全局通告栏 middle
   * 模块通告栏 small
   * @default middle
   */
  size?: 'middle' | 'small';
  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 容器圆角
   * @default 0
   */
  borderRadius?: number;

  /**
   * 内容样式
   */
  contentStyle?: StyleProp<TextStyle>;

  /**
   * 左侧icon
   * 设置true时展示默认内置icon
   */
  leftIcon?: React.ReactNode | NoticeBarType | true;

  /**
   * 右侧icon
   */
  rightIcon?: React.ReactNode;

  /**
   * 右侧icon点击事件回调函数
   */
  onRightPress?: () => void;

  /**
   * 背景色
   */
  backgroundColor?: string;

  /**
   * 通知标题
   */
  title?: React.ReactNode;

  /**
   * 通知文本内容
   */
  text?: React.ReactNode;

  /**
   * 内容类型，默认为 'text'
   * @default 'text'
   */
  showType?: 'text' | 'multipleLines';

  /**
   * 通知文本内容数组, 默认会设置 numberOfLines 为 2, 点击 显示更多 弹窗提示文本内容
   */
  texts?: {
    content: React.ReactNode;
  }[];

  /**
   * 是否展示左侧的小圆点, 默认多行为true，单行为false
   */
  showBullets?: boolean;

  /**
   * 配置texts的前提下，显示更多的文案
   * @default '显示更多'
   */
  showMoreText?: React.ReactNode;

  /**
   * 配置texts的前提下，弹窗标题的文案
   * @default '详情'
   */
  popupTitle?: React.ReactNode;

  /**
   * 配置texts的前提下，弹窗是否使用原生
   * @default false
   */
  popupUseNative?: boolean;

  /**
   * 点击通知栏时触发
   */
  onPress?: () => void;

  children?: React.ReactNode;

  /**
   * 是否开启跑马灯展示，内容长度溢出时默认开启
   */
  scrollable?: boolean;

  /**
   * 是否开启文本换行，只在scrollable为false时生效
   */
  wrapable?: boolean;

  /**
   * 滚动速率 (px/s)
   * @default 60
   */
  speed?: number;

  /**
   * 动画延迟时间 (ms)
   * @default 1000
   */
  delay?: number;

  /**
   * 滚动栏内容行数，只在scrollable为false时生效
   */
  numberOfLines?: number;

  /**
   * 内容溢出时渲染，只有在 scrollable 为 false 时并且 numberOfLines有值时 生效
   */
  renderOverFlow?: (isOverflow: boolean) => React.ReactNode;

  /**
   * 每当滚动栏重新开始滚动时触发
   */
  onReplay?: () => void;
}

export type DetailButtonProps = Pick<
  NoticeBarProps,
  'texts' | 'showBullets' | 'popupTitle' | 'showMoreText' | 'popupUseNative'
>;

export type MarqueeProps = Pick<
  NoticeBarProps,
  | 'wrapable'
  | 'scrollable'
  | 'speed'
  | 'delay'
  | 'text'
  | 'onReplay'
  | 'numberOfLines'
  | 'renderOverFlow'
> & {
  style: StyleProp<TextStyle>;
};

export type NoticeBarInstance = {
  /** 重置通知栏到初始状态	 */
  reset: () => void;
};
