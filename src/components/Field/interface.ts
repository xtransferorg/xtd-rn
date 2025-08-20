import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';

export interface FieldProps {
  /**
   * field容器样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * @description 标签名称
   * @type string
   */
  label?: React.ReactNode;
  /**
   * label外层容器样式
   */
  labelWrapperStyle?: StyleProp<ViewStyle>;
  /**
   * label容器样式
   */
  labelContainerStyle?: StyleProp<ViewStyle>;
  /**
   * label 样式
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * 是否必填，默认false展示“（选填）” 前提label有值
   * @default false
   */
  requiredMark?: boolean;
  /**
   * 布局
   * @default vertical
   */
  layout?: 'horizontal' | 'vertical';
  /**
   * 展示控件下划线
   * @default false
   */
  showDividerLine?: boolean;
  /**
   * 是否为错误状态显示
   * @default false
   */
  error?: boolean;
  /**
   * 提示信息
   */
  message?: string;
  /**
   * message外层容器样式
   */
  messageWrapperStyle?: StyleProp<ViewStyle>;

  /**
   * 错误提示
   */
  errorMessage?: string;

  /**
   * 是否显示错误下划线
   */
  showErrorDividerLine?: boolean;

  /**
   * 是否显示错误icon
   */
  showErrorIcon?: boolean;

  children?: React.ReactNode;

  /**
   * 左侧显示icon
   */
  icon?: React.ReactNode;

  /**
   * 左侧显示icon时最外部容器样式
   */
  iconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * 无icon时容器样式
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * label 前的插槽
   */
  prefix?: React.ReactNode;

  /**
   * label 后的插槽
   */
  suffix?: React.ReactNode;
  /**
   * 是否显示疑问图标 前提label有值
   */
  showQuestionIcon?: boolean;
  /**
   * 点击疑问图标回调
   */
  onClickQuestionIcon?: (event: GestureResponderEvent) => void;
}

export interface FieldTitleProps {
  /**
   * 标题容器样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 标题前缀竖条样式
   */
  headerStyle?: StyleProp<ViewStyle>;
  /**
   * 标题文本
   */
  label?: string;
  /**
   * 标题文本样式
   */
  labelStyle?: StyleProp<TextStyle>;
}
