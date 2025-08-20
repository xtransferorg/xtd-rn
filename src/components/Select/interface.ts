import type { ReactElement, ReactNode } from 'react';
import { Type } from './enum';
import {
  StyleProp,
  ViewStyle,
  ImageProps,
  ImageStyle,
  GestureResponderEvent,
  TextStyle,
} from 'react-native';
import { UriProps } from 'react-native-svg';
import { FloatingLayerProps, InputProps } from '@xrnjs/ui';
import React from 'react';

export interface Option {
  /**
   * 选项值
   */
  value: string;

  /**
   * 选项显示文本
   */
  label: ReactNode;

  /**
   * label样式
   */
  labelTextStyle?: StyleProp<TextStyle>;

  /**
   * 选项子文本
   */
  subLabel?: ReactNode;

  /**
   * subLabel样式
   */
  subLabelTextStyle?: StyleProp<TextStyle>;

  /**
   * 选项内容文本
   */
  contentLabel?: ReactNode;

  /**
   * contentLabel样式
   */
  contentLabelTextStyle?: StyleProp<TextStyle>;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 标签位置
   */
  labelPosition?: 'left' | 'right';

  /**
   * 自定义图标
   * 新增支持svg格式，需uri以svg结尾
   */
  prefixIcon?: string | ReactNode;
}

export interface Group {
  /**
   * 分组标题
   */
  label: ReactNode;

  /**
   * 子选项 用于分组
   */
  children: Option[];
}
export interface SelectProps extends Omit<FloatingLayerProps, 'onConfirm'> {
  /**
   * 用于端到端测试时定位元素
   */
  testID?: string | undefined;
  /**
   * 选择器类型
   */
  type: Type;

  /**
   * 是否显示
   */
  visible: boolean;

  /**
   * 选中的值
   */
  value?: string | string[];

  /**
   * 同 FloatLayer.onPressOverlay
   */
  onPressOverlay?: () => void;

  /**
   * 确认按钮回调
   * @param value 选中的值
   * @param searchStr 确认时搜索框中的内容
   */
  onConfirm?: (value: string | string[], searchStr?: string) => void;

  /**
   * 取消按钮回调
   */
  onCancel?: () => void;

  /**
   * 选中值改变回调
   */
  onChange?: (value: string | string[]) => void;

  /**
   * 选项
   */
  options: Option[] | Group[];

  /**
   * 默认值
   */
  defaultValue?: string | string[];

  /**
   * 同 FloatLayer.title
   */
  title?: string;

  /**
   * 是否显示 FloatLayer 底部区域
   */
  showFooter?: boolean;

  /**
   * 同 FloatLayer.showConfirmButton
   */
  showConfirmButton?: boolean;

  /**
   * 取消按钮容器样式
   */
  cancelBtnContainerStyle?: StyleProp<ViewStyle>;

  /**
   * 确认按钮容器样式
   */
  confirmBtnContainerStyle?: StyleProp<ViewStyle>;

  /**
   * 当 icon 为 string 类型时，支持修改 icon 的样式和调整图片的行为
   */
  currencySelectProps?: {
    /**
     * 图片容器样式
     */
    imageStyle?: StyleProp<ViewStyle | ImageStyle>;
    /**
     * 图片 Props
     */
    imageProps?: UriProps | ImageProps;
  };

  /**
   * 是否显示搜索框，只有当 label 为 string 类型时有效
   * @default false
   */
  showSearch?: boolean;

  /**
   * 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。
   * @param inputValue 输入框的值
   * @param option 当前遍历的选项
   * @returns 是否符合筛选条件
   */
  filterOption?: (value: string, option: Option) => boolean;

  /**
   * 文本框值变化时回调
   */
  onSearch?: (value: string) => void;

  /**
   * 顶部搜索框的 Props
   */
  searchInputProps?: InputProps;

  /**
   * 是否允许取消，仅在 type 为 Type.radio 时有效
   * @default true
   */
  cancelable?: boolean;

  /**
   * 取消时的回调
   */
  onRepeatClick?: () => void;

  /**
   * 自定义底部区域
   */
  customFooter?: ReactNode;

  /**
   * 弹出内容容器样式
   */
  contentStyle?: StyleProp<ViewStyle>;

  /**
   * 是否填充整个容器，设置这个属性会让默认边距失效
   * @default false
   */
  itemFullContainer?: boolean;

  /**
   * 搜索没有数据时显示的文案
   */
  searchEmptyText?: string;

  /**
   * 没有数据时显示的文案
   */
  dataEmptyText?: ReactNode;

  /**
   * 不可操作点击回调
   */
  onDisabledPress?: (item: Option) => void;
  /**
   * 内容额外配置，位于内容最底部，通常是添加提示信息
   */
  extra?: ReactElement;
}

export interface SelectInputItem {
  /**
   * 实际值
   */
  value: string;
  /**
   * 展示值
   */
  label?: ReactNode;
}

export type SelectInputSize = 'small' | 'default' | 'large';

export interface SelectInputProps {
  /**
   * 当前的展示值
   */
  value?: ReactNode | SelectInputItem[];
  /**
   * 大小
   * @default 'default'
   */
  size?: SelectInputSize;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 提示信息
   */
  placeholder?: string;
  /**
   * 是否允许清空
   * @default true
   */
  allowClear?: boolean;
  /**
   * 点击清空时候回调
   */
  onClear?: () => void;
  /**
   * 点击回调
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * 是否多个展示
   * @default false
   */
  multiple?: boolean;
  /**
   * 是否显示关闭 multiple为ture时候生效
   * @defalut false
   */
  closable?: boolean;
  /**
   * 点击关闭回调
   */
  onClose?: (item: SelectInputItem) => void;
  /**
   * 最外层容器样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 自定义内容
   */
  content?: React.ReactElement;
  /**
   * 后缀插槽 可以自定义图标等
   */
  suffix?: ReactNode;
  /**
   * 自动化测试使用
   */
  testID?: string;
  /**
   * 校验错误状态 边框红色
   */
  status?: 'error';
}
