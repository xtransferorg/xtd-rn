import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  StyleProp,
  TextInputProps,
  TextInputFocusEventData,
  ViewStyle,
} from 'react-native';
import React from 'react';

export interface StepperProps
  extends Omit<TextInputProps, 'defaultValue' | 'onChange' | 'value'> {
  /**
   * 容器的样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 输入框占位提示文字
   */
  placeholder?: string;

  /**
   * 文本框高亮(ios上的光标)颜色
   */
  selectionColor?: string;

  /**
   * 初始值，当 value 为空时生效
   */
  defaultValue?: number;

  /**
   * 当前值
   */
  value?: number;

  /**
   * 固定小数位数
   */
  digits?: number;

  /**
   * 禁用步进器
   * @default false
   */
  disableMinus?: boolean;

  /**
   * 禁用增加步进器
   * @default false
   */
  disablePlus?: boolean;

  /**
   * 禁用输入框
   * @default false
   */
  inputReadOnly?: boolean;

  /**
   * 是否允许为空
   * @default false
   */
  allowEmpty?: boolean;

  /**
   * 限制输入整数
   * @default false
   */
  integer?: boolean;

  /**
   * 立即触发 onChange 事件
   */
  immediate?: boolean;

  /**
   * 输入框宽度
   * @default 100
   */
  inputWidth?: number;

  /**
   * 最大值
   * @default Number.MAX_VALUE
   */
  max?: number;

  /**
   * 最小值
   * @default 0
   */
  min?: number;

  /**
   * 步长
   * @default 1
   */
  step?: number;

  /**
   * 前置图标
   */
  prefixIcon?: React.ReactNode;

  /**
   * 后置图标
   */
  suffixIcon?: React.ReactNode;
  /**
   * 大小
   */
  size?: 'default' | 'large';

  /**
   * 输入框失焦时触发
   */
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;

  /**
   * 输入框获焦时触发
   */
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;

  /**
   * 当绑定值变化时触发的事件
   */
  onChange?: (value?: number) => void;

  /**
   * 点击增加按钮时触发
   */
  onPlus?: (e: GestureResponderEvent, value?: number | string) => void;

  /**
   * 点击减少按钮时触发
   */
  onMinus?: (e: GestureResponderEvent, value?: number | string) => void;

  /**
   * 通过 beforeChange 属性可以在输入值变化前进行校验和拦截。
   */
  beforeChange?: (value?: number | string) => boolean | Promise<boolean>;
  /**
   * 禁用输入&编辑-完全禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 设置校验状态
   */
  status?: 'error';

  /**
   * 小数点分隔符
   * @default '.'
   */
  decimalSeparator?: string;

  parser?: (text: string, decimalSeparator: string) => string;

  /**
   * @deprecated 规划中的功能，暂时不实现
   * 通过 formatter 属性可以格式化显示的值。
   */
  // formatter?: (value?: number) => string;
  /**
   * @deprecated 规划中的功能，暂时不实现
   * 通过 parser 属性可以格式化输入的值。
   */
  // parser?: (text: string) => number;
}

export interface StepperRef {
  blur: () => void;
  focus: () => void;
}
