import { ReactNode } from 'react';
import type {
  ViewProps,
  ViewStyle,
  StyleProp,
  ColorValue,
  TextStyle,
} from 'react-native';

export type TagSize = 'l' | 'm' | 's';
/**
 * 基础标签类型
 */
export type BaseTagType = 'primary' | 'hazy' | 'ghost';
export interface TagProps extends ViewProps {
  /**
   * 内部包裹层样式，可以对文案、图标排版影响
   */
  innerStyle?: StyleProp<ViewStyle>;
  /**
   * 是否为可关闭标签
   * @default false
   */
  closable?: boolean;
  /**
   * 关闭时的回调
   */
  onClose?: () => void;
  /**
   * 大小
   * @default 'm'
   */
  size?: TagSize;
  /**
   * 类型
   *
   * @deprecated 已经废弃
   * @default 'primary'
   */
  type?: BaseTagType;
  /**
   * 是否显示标签
   * @default true
   */
  visible?: boolean;
  /**
   * 标签色
   */
  color?: ColorValue;
  /**
   * 按钮文案颜色
   */
  textColor?: ColorValue;
  /**
   * 自定义关闭按钮
   */
  closeIcon?: ReactNode;
  /**
   * 自定义图标
   */
  icon?: ReactNode;
  /**
   * @deprecated 已经废弃
   * 细边框
   */
  hairline?: boolean;
}

/**
 * 扩展标签类型
 */
export enum TagType {
  /**
   * 面标签
   */
  solid = 'solid',

  /**
   * 线标签
   */
  outline = 'outline',
}
/**
 * 标签功能
 */
export enum TagFunc {
  /**
   * 强调标签
   */
  strengthen = 'strengthen',

  /**
   * 普通标签
   */
  normal = 'normal',

  /**
   * 弱化标签
   */
  weaken = 'weaken',

  /**
   * 半透明标签
   */
  translucent = 'translucent',
}

/**
 * 基础标签类型
 */
export type TagStatus =
  | 'processing'
  | 'interrupt'
  | 'terminate'
  | 'error'
  | 'success';
export interface RNTagProps extends TagProps {
  /**
   * 扩展标签类型
   * @default TagType.solid
   */
  tagType?: TagType;

  /**
   * 标签功能
   * @default TagFunc.normal
   */
  tagFunc?: TagFunc;
  /**
   * 自定义label样式
   * @default TagFunc.normal
   */
  labelStyle?: StyleProp<TextStyle>;

  /**
   * 标签状态
   */
  status?: TagStatus;
}
