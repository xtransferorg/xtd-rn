import { Key, PropsWithChildren, ReactNode } from 'react';
import { StyleProp, ViewStyle, TextStyle, TextProps } from 'react-native';

export type NotificationStatus = 'success' | 'error' | 'warning' | 'info';

export interface NotificationProps extends PropsWithChildren {
  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 是否显示左侧类型图标
   */
  showIcon?: boolean;

  /**
   * 自定义底部按钮
   */
  btn?: ReactNode;

  /**
   * 通知类型
   */
  status: NotificationStatus;

  /**
   * 是否显示通知栏
   */
  visible?: boolean;

  /**
   * 通知栏倒计时结束时关闭，如果等于 0 则不会自动关闭
   * @default 5000
   */
  duration?: number;

  /**
   * 通知栏标题
   */
  title: string;
  /**
   * 通知栏标题样式
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * 通知栏标题自定义属性
   */
  titleProps?: TextProps;

  /**
   * 通知栏描述
   */
  description: string;
  /**
   * 通知栏描述样式
   */
  descriptionStyle?: StyleProp<TextStyle>;
  /**
   * 通知栏描述自定义属性
   */
  descriptionProps?: TextProps;

  /**
   * 通知栏顶部距离
   */
  offset?: number;

  /**
   * 通知栏开始关闭事件
   */
  onClose?: () => void;

  /**
   * 通知栏关闭完成事件
   */
  onClosed?: () => void;

  /**
   * 次要按钮点击事件
   */
  onWeakPress?: () => Promise<void>;

  /**
   * 主要按钮点击事件
   */
  onSolidPress?: () => Promise<void>;

  /**
   * 通知栏关闭事件
   */
  onRequestClose?: () => void;
}

export interface NotificationRef {
  close: (finishedCallback?: () => void) => void;
}

export type NotificationStaticFn = (args: Omit<HolderProps, 'status'>) => void;

export interface NotificationInstance {
  success: NotificationStaticFn;
  error: NotificationStaticFn;
  info: NotificationStaticFn;
  warning: NotificationStaticFn;
  destroy: (key?: Key) => void;
}

export interface HolderRef {
  open: (props: HolderProps) => void;
  destroy: (key: Key) => void;
}

export interface HolderProps extends NotificationProps {
  key: Key;
}
