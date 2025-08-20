import type { PropsWithChildren, ReactNode } from 'react';
import type { StyleProp, ViewStyle, TextProps } from 'react-native';
import type { PopoverProps as RNPVProps } from 'react-native-popover-view/src/Types';
import type { PopoverPlacement as Placement } from 'react-native-popover-view';

export type PopoverPlacement = `${Placement}`;

export interface PopoverItemProps<T> {
  /**
   * -
   */
  value: T;

  /**
   * 禁用选项
   */
  disabled?: boolean;

  /**
   * 弹出层, 深色, Popover的mode会覆盖该值
   */
  dark?: boolean;

  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 是否显示分割线
   * @default false
   */
  divider?: boolean;

  /**
   * 选择后的回调
   */
  onSelect?: (value: T) => void;

  [key: string]: any;
}

export type PopoverAction = {
  /**
   * 选项文字
   * */
  text: string;
  /**
   * 文字左侧的图标，支持传入图标名称或图片链接
   * */
  icon?: ReactNode;
  /**
   * 选项文字颜色
   * */
  color?: string;
  /**
   * 是否为禁用状态
   * */
  disabled?: boolean;
  /**
   * 是否显示分割线
   */
  divider?: boolean;
  /**
   * 为对应选项添加额外的样式
   * */
  style?: StyleProp<ViewStyle>;
};

export interface PopoverProps<T>
  extends Omit<
      RNPVProps,
      'from' | 'isVisible' | 'animationConfig' | 'onRequestClose' | 'placement'
    >,
    PropsWithChildren<{}> {
  /**
   * 卡片内容
   */
  content?: ReactNode;
  /**
   * 选项列表
   * @description 和content必须有一个值，content优先级更高
   */
  actions?: PopoverAction[];
  /**
   * @deprecated 已废弃
   * 触发方式
   * @default 'onPress'
   */
  trigger?: 'onLongPress' | 'onPress' | 'onPressIn';

  /**
   * 弹出位置
   * @default 'auto'
   */
  placement?: PopoverPlacement;

  /**
   * 弹出层深色模式或者亮色模式 'dark' | 'light'
   * @default 'dark''
   */
  mode?: 'dark' | 'light';

  /**
   * 显示阴影
   * @default false
   */
  shadow?: boolean;

  /**
   * 显示箭头
   * @default true
   */
  arrow?: boolean;

  /**
   * 点击区域样式
   */
  triggerStyle?: StyleProp<ViewStyle>;

  /**
   * 点击 Popover.Item 的回调
   */
  onSelect?: (node: T, index?: number) => void;

  /**
   * 点击弹层是否关闭
   * @default: true
   */
  closeOnClickPopover?: boolean;

  /**
   * 点击遮罩层是否关闭
   * @default: true
   */
  closeOnClickOverlay?: boolean;

  /**
   * 自定义渲染弹出层
   */
  renderContentComponent?: (
    nodes: ReactNode,
    closePopover: () => void
  ) => ReactNode;

  /**
   * 弹出的动画过渡时间
   * @default 300
   */
  duration?: number;

  /**
   * 'rn-modal' mode on Android only.
   * Android状态栏是否半透明 true: 应用的内容可以在状态栏处显示
   */
  statusBarTranslucent?: boolean;

  /**
   * @deprecated 已废弃
   * 禁用弹出
   *  */
  disabled?: boolean;
}

export interface PopoverTextProps extends TextProps {
  /**
   * 显示文案
   */
  text: string;

  /**
   * 弹出层 深色 Popover 会覆盖该值
   */
  dark?: boolean;

  /**
   * 是否显示分割线
   * @default false
   */
  divider?: boolean;

  /**
   * 禁用选项
   */
  disabled?: boolean;

  [key: string]: any;
}

export type PopoverInstance = {
  /**
   * 打开popover
   * */
  show: () => void;
  /**
   * 关闭popover
   * */
  hide: () => void;
};
