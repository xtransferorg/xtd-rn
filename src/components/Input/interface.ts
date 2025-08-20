import { ReactNode } from 'react';
import {
  StyleProp,
  TextStyle,
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
  TextInputFocusEventData,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import { LoadingProps } from '../Loading/Loading';

export type InputInstance = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
};

export type InputFocusEvent = NativeSyntheticEvent<TextInputFocusEventData>;
export type InputChangeEvent = NativeSyntheticEvent<TextInputChangeEventData>;
export type ContentSizeChangeEvent =
  NativeSyntheticEvent<TextInputContentSizeChangeEventData>;
export type KeyPressEvent = NativeSyntheticEvent<TextInputKeyPressEventData>;

export type InputFormatTrigger = 'onBlur' | 'onChange';

export type InputClearTrigger = 'always' | 'focus';

export interface InputCommonProps extends Omit<TextInputProps, 'onChange'> {
  /**
   * 可以点击清除图标删除内容，会触发 onChange 事件
   */
  allowClear?: boolean;

  /**
   * 输入框的值
   */
  value?: string;

  /**
   * 默认值
   */
  defaultValue?: string;
  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * input 样式
   */
  inputStyle?: StyleProp<TextStyle>;
  /**
   * 输入框占位提示文字
   */
  placeholder?: string;
  /**
   * 是否禁用输入框
   * @default false
   */
  disabled?: boolean;
  /** 名称，提交表单的标识符	 */
  name?: string;
  /** 是否为只读状态，只读状态下无法输入内容	 */
  readOnly?: boolean;
  /**  是否自动聚焦	 */
  autoFocus?: boolean;
  /** 输入的最大字符数 */
  maxLength?: number;
  /**
   * 输入内容格式化函数
   * thousandSeparators 千分位分隔符
   */
  formatter?:
    | 'thousandSeparators'
    | 'unit'
    | ((value: string | number) => string);
  /**
   * 格式化函数触发的时机
   * @default 'onChange'
   */
  formatTrigger?: InputFormatTrigger;

  /**
   * 无边框样式
   * @default false
   */
  borderNone?: boolean;

  /**
   * 输入框内容变化时的回调
   */
  onChange?: (value: string) => void;

  /**
   * 点击清除按钮时的回调函数
   */
  onClear?: () => void;

  /**
   * 输入框聚焦时触发
   */
  onFocus?: (e: InputFocusEvent) => void;

  /**
   * 输入框失焦时触发
   */
  onBlur?: (e: InputFocusEvent) => void;

  /**
   * 键盘弹起时触发此事件
   */
  onKeyPress?: (e: KeyPressEvent) => void;
  /** 当输入值超出maxLength时触发 */
  onOverLimit?: () => void;
  /**
   * 前缀插槽
   */
  prefix?: ReactNode;
  /**
   * 前缀插槽自定义样式
   */
  prefixStyle?: StyleProp<ViewStyle>;
  /**
   * 后缀插槽
   */
  suffix?: ReactNode;
  /**
   * 后缀插槽自定义样式
   */
  suffixStyle?: StyleProp<ViewStyle>;
  /**
   * 显示清除图标的时机
   * always 表示输入框不为空时展示 focus 表示输入框聚焦且不为空时展示
   * @default 'focus'
   */
  clearTrigger?: InputClearTrigger;

  /**
   * 占位文字颜色
   */
  placeholderTextColor?: string;

  /**
   * 自定义占位文字样式，showCustomPlaceholder 为 `true` 时生效
   */
  placeholderStyle?: StyleProp<TextStyle>;
  /**
   * 字体大小区间，小于等于这个长度的话，字体为当前大小
   */
  fontSizeRange?: number[];
  /**
   * 长度大小区间，小于等于这个长度的话，字体为当前大小
   */
  textInputLengthRange?: number[];

  /**
   *  input业务类型
   */
  bizInputType?: BizInputType;
  /**
   * Input外部样式
   */
  inputWrapper?: StyleProp<ViewStyle>;

  /**
   * 自定义的placeholder外部样式
   */
  placeholderWrapper?: StyleProp<ViewStyle>;

  /**
   * 是否自动将 onChange 事件的值转为数值
   *
   * 仅在 formatter='thousandSeparators' 时生效
   * @default false
   */
  autoTransformToNumber?: boolean;

  /**
   * 设置校验状态
   */
  status?: 'error';

  /**
   * 是否点击容器自动聚焦
   * @default true
   */
  autoPressFocus?: boolean;

  /*
   * 用于处理用户的输入，如果传递函数则会在 onChange 时调用，通常和 formatter 搭配使用
   */
  parser?: (value: string) => string;

  /**
   * 加载状态
   * @default false
   */
  loading?: boolean;

  /**
   * loading属性
   */
  loadingProps?: LoadingProps;

  /**
   * 小数点分隔符
   * @default '.'
   */
  decimalSeparator?: string;

  /**
   * 千分位分隔符
   * @default ','
   */
  thousandSeparator?: string;

  /**
   * 小数点精度，仅在 type='number' 时生效
   */
  precision?: number;
}

export type BizInputType = 'normal' | 'amount';

export type InputType =
  | 'tel'
  | 'text'
  | 'digit'
  | 'number'
  | 'search'
  | 'password';

export type InputTextAlign = 'left' | 'center' | 'right';

export type InputSize = 'small' | 'default' | 'large' | 'max';

export interface InputProps extends InputCommonProps {
  /**
   * 输入框类型
   */
  type?: InputType;
  /**
   * 输入框对齐方式 (left对齐非编辑态iOS显示有问题 rn)
   * @default auto
   */
  align?: InputTextAlign;
  /**
   * @deprecated
   * 千分位分隔符（仅对defaultValue生效）
   * 已废弃，建议使用 thousandSeparator
   */
  thousandSeparators?: boolean;

  /**
   * 屏幕阅读器标签
   */
  accessibilityLabel?: string;

  /**
   * 输入框尺寸
   */
  size?: InputSize;
}

export type InputAutosizeConfig = {
  maxHeight?: number;
  minHeight?: number;
};

export interface TextAreaProps extends InputCommonProps {
  /**
   * 输入框行数
   */
  rows?: number;
  /**
   * 是否自适应内容高度，只对 textarea 有效
   * 可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px
   */
  autoSize?: boolean | InputAutosizeConfig;
  /**
   * 是否展示字数，需要和maxLength配合使用
   */
  showCount?: boolean;
}

export type BaseInputProps = InputProps & TextAreaProps;
