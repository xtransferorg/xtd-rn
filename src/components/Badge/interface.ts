import type { TextStyle, ViewStyle, StyleProp, ViewProps } from 'react-native';

export interface BadgeProps extends ViewProps {
  /**
   * 显示成自定义样式
   * @default false
   */
  custom?: boolean;
  /**
   * 文案部分样式
   */
  countStyle?: StyleProp<ViewStyle>;

  /**
   * 文案容器自定义样式
   */
  countContainerStyle?: StyleProp<ViewStyle>;

  /**
   * 数字文案样式
   */
  countTextStyle?: StyleProp<TextStyle>;

  /**
   * 徽标内容/展示的数字
   */
  count?: number | string;

  /**
   * 徽标背景颜色
   * @default #FF4D4D
   */
  color?: string;

  /**
   * 不展示数字，只有一个小红点
   * @default false
   */
  dot?: boolean;

  /**
   * 最大值，超过最大值会显示 {max}+，仅当 count 为数字时有效
   * @default 99
   */
  max?: number;

  /**
   * 数据是否在加载中，如果在加载中就暂时不显示 count
   * @default false
   */
  loading?: boolean;

  /**
   * 当数值为 0 时，是否展示 Badge
   * @default false
   */
  showZero?: boolean;

  /**
   * 设置状态点的位置偏移
   * @default dot ? [4, -4] : [9, -8]
   */
  offset?: [number, number];

  /**
   * 设置 Badge 为状态点
   */
  status?: 'primary' | 'success' | 'warning' | 'error';
}
