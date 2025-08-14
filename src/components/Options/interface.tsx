import { ReactNode } from 'react';
import {
  StyleProp,
  TextProps,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';

export interface IconProps {
  color?: string;
  size?: string | number;
  fillColor?: string;
}

export type OptionsValue = string | number | null;

export interface OptionsOption<V> {
  /**
   * 文字
   */
  label?: ReactNode;

  /**
   * 描述
   */
  description?: ReactNode;

  /**
   * 图标
   */
  icon?: ReactNode;

  /**
   * 图片url
   */
  imageSource?: ImageSourcePropType;

  /**
   * 选项的值
   */
  value: V;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 文字样式
   */
  labelStyle?: StyleProp<ViewStyle>;

  /**
   * 描述样式
   */
  descriptionStyle?: StyleProp<ViewStyle>;

  /**
   * 文字 Text 属性
   */
  labelTextProps?: TextProps;

  /**
   * 描述 Text 属性
   */
  descriptionTextProps?: TextProps;

  /**
   * icon 属性
   */
  iconProps?: IconProps;
}

export type OptionsProps<V = OptionsValue, S = boolean> = {
  /**
   * 数据源
   */
  options: OptionsOption<V>[];

  /**
   * 行展示数量
   */
  columns?: number;

  /**
   * 是否全宽展示，如果为 true，则会在计算 Option 宽度时，减去左右 padding，反之亦然。在使用时需要把容器左右 padding 设置为 0
   * @default false
   */
  fullColumn?: boolean;

  /**
   * 是否允许多选
   * @default false
   */
  multiple?: boolean;

  /**
   * @description 是否显示默认图标
   * @default false
   */
  showIcon?: boolean;
  /**
   * @description icon与label水平还是垂直布局
   * @default horizontal
   */
  mode?: 'vertical' | 'horizontal';

  /**
   * 是否全局禁止选中
   */
  disabled?: boolean;

  /**
   * 默认项
   */
  defaultValue?: V | V[];

  /**
   * 选中项
   */
  value?: V | V[];

  /**
   * value 是否为单个值，如果是单个值，value 为 V，否则为 V[]。只有在 multiple 为 false 时有效
   * @default false
   */
  single?: S;

  /**
   * 选项改变时触发
   */
  onChange?: (v: S extends false ? V[] : V) => void;

  /**
   * 是否显示对勾角标
   */
  showCheckMark?: boolean;

  /**
   * 选项之间的间距
   * @default 10
   */
  gap?: number;

  /**
   * 选项之间的水平间距
   * @default 10
   */
  gapVertical?: number;

  /**
   * 选项之间的垂直间距
   * @default 10
   */
  gapHorizontal?: number;

  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 单选的时候是否允许取消, 默认可以取消
   * @default true
   */
  cancelable?: boolean;

  /**
   * 图片样式
   */
  imageStyle?: StyleProp<ImageStyle>;
  /**
   * 不可操作时点击回调通知
   */
  onDisabledPress?: (option: OptionsOption<V>) => void;
  /**
   * icon 属性 方便统一设置
   */
  iconProps?: IconProps;
  /**
   * 每一项选项样式 方便统一设置
   */
  optionStyle?: StyleProp<ViewStyle>;
};

export default (_: OptionsOption<OptionsValue>) => null;
