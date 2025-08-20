import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type StatusType =
  | 'notFound'
  | 'empty'
  | 'finished'
  | 'networkError'
  | 'noAuth'
  | 'noLogin'
  | 'noData'
  | 'systemCompatibility'
  | 'systemUpgrade'
  | 'emptyIcon';

export interface ErrorBlockProps {
  /**
   * 是否小场景
   * @default false
   */
  isSmallScene?: boolean;
  /**
   * 小场景文案
   */
  smallSceneText?: ReactNode;
  /**
   * 标题
   */
  title?: ReactNode;
  /**
   * 标题样式
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * 副标题
   */
  description?: ReactNode;
  /**
   * 自定义副标题样式
   */
  descriptionStyle?: StyleProp<TextStyle>;
  /**
   * 自定义样式
   */
  extra?: ReactNode;
  /**
   * 状态枚举
   *  @default empty
   */
  status?: StatusType;
  /**
   * 插图
   */
  image?: string | ReactNode;
  /**
   * 是否全屏展示
   * @default false
   */
  fullPage?: boolean;
  /** 自定义样式 */
  style?: StyleProp<ViewStyle>;

  /**
   * 底部按钮文案
   */
  footerText?: string;

  /**
   * 底部第二按钮文案
   */
  footerSecondText?: string;

  /**
   * 底部描述文案
   */
  footerDescriptionText?: string;

  /**
   * 底部描述文案样式
   */
  footerDescriptionTextStyle?: StyleProp<TextStyle>;

  /**
   * 自定义底部按钮
   */
  footer?: ReactNode;

  /**
   * 自定义底部描述
   */
  footerDescription?: ReactNode;

  /**
   * 底部按钮点击事件
   */
  onFooterPress?: () => void;

  /**
   * 底部第二按钮点击事件
   */
  onFooterSecondPress?: () => void;

  /**
   * 底部描述点击事件
   */
  onFooterDescriptionPress?: () => void;
}
