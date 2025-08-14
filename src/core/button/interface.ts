import type React from 'react';
import type {
  TextStyle,
  TouchableHighlightProps,
  StyleProp,
  ViewStyle,
  Insets,
} from 'react-native';

import type { SpaceProps } from '../space/interface';

export interface ButtonOptionsType<TValue = any> {
  value: TValue;
  label: string;
  prefix?: React.ReactElement;
  disabled?: boolean;
  badge?: React.ReactNode;
}
export interface ButtonProps
  extends Omit<TouchableHighlightProps, 'underlayColor' | 'activeOpacity'> {
  /**
   * 按钮文案
   */
  text?: string;

  /**
   * 按钮子文案
   */
  subtext?: string;

  /**
   * 文字自定义样式
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * 大小
   * @default 'l'
   */
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';

  /**
   * 类型
   * @default 'primary'
   */
  type?: 'primary' | 'hazy' | 'outline' | 'ghost' | 'link';

  /**
   * 设置危险按钮
   * @default false
   */
  danger?: boolean;

  /**
   * 细边框
   */
  hairline?: boolean;

  /**
   * 是否禁用按钮
   */
  disabled?: boolean;

  /**
   * 是否显示为加载状态
   */
  loading?: boolean;

  /**
   * 加载状态提示文字
   */
  loadingText?: string;

  /**
   * 是否为方形按钮
   */
  square?: boolean;

  /**
   * 是否为圆形按钮
   */
  round?: boolean;

  /**
   * 渲染左侧图标
   */
  renderLeftIcon?: (color: string, size: number) => React.ReactElement;

  /**
   * 按钮颜色，不支持渐变
   */
  color?: string;

  /**
   * 按钮文案颜色
   * @default button_primary_color
   */
  textColor?: string;

  /**
   * onPress debounce wait
   * @default 0
   */
  onPressDebounceWait?: number;
}

export interface ButtonOptionProps
  extends Omit<
      TouchableHighlightProps,
      'underlayColor' | 'activeOpacity' | 'hitSlop'
    >,
    Pick<ButtonProps, 'text' | 'textStyle' | 'size' | 'hairline'> {
  /**
   * 是否选中、高亮
   */
  active?: boolean;

  /**
   * 选中状态文案颜色、背景色高亮
   * @default true
   */
  activeHighlight?: boolean;

  /**
   * 显示的数量
   */
  badge?: React.ReactNode;

  /**
   * 类型
   * @default 'hazy'
   */
  type?: 'hazy' | 'outline' | 'white';

  /**
   * 激活后选项样式
   */
  activeStyle?: StyleProp<ViewStyle>;

  /**
   * 被激活后文本样式
   */
  textActiveStyle?: StyleProp<TextStyle>;

  /**
   * 前缀
   */
  prefix?: React.ReactElement;
  /**
   * 前缀容器样式
   */
  prefixStyle?: StyleProp<ViewStyle>;
  /**
   * 不可操作点击回调
   */
  onDisabledPress?: () => void;

  /**
   * 这定义了触摸事件可以从离视图多远的地方开始。
   */
  hitSlop?: Insets;
}

export interface ButtonOptionGroupProps<TValue = any>
  extends Omit<SpaceProps, 'direction'> {
  /**
   * 选中状态文案颜色、背景色高亮
   * @default true
   */
  activeHighlight?: boolean;

  /**
   * 类型
   * @default 'hazy'
   */
  type?: ButtonOptionProps['type'];

  /**
   * 选项
   */
  options: ButtonOptionsType<TValue>[];

  /**
   * 是否多选
   * @default false
   */
  multiple?: boolean;

  /**
   * 当前值
   */
  value?: TValue | TValue[];

  /**
   * 默认值
   */
  defaultValue?: TValue | TValue[];

  /**
   * 选中状态变化时的回调
   */
  onChange?: (
    value: TValue[] | TValue,
    options: {
      value: TValue;
      label: string;
      disabled?: boolean;
      badge?: number;
      style?: ButtonOptionProps['style'];
    }[]
  ) => void;
  /**
   * 是否可以编辑，readonly 相似，保持 TextInput 自带的属性效果
   * @default true
   */
  editable?: boolean;

  /**
   * 是否可滚动
   * @default false
   */
  scrollable?: boolean;

  /**
   * 单选的情况下是否可以取消选择
   * @default true
   */
  deselect?: boolean;

  /**
   * 自定义选项按钮样式
   */
  optionStyle?: StyleProp<ViewStyle>;

  /**
   * 激活后选项样式
   */
  optionActiveStyle?: StyleProp<ViewStyle>;

  /**
   * 选项中文本样式
   */
  optionTextStyle?: StyleProp<TextStyle>;

  /**
   * 被激活后文本样式
   */
  optionTextActiveStyle?: StyleProp<TextStyle>;

  /**
   * 选项条右侧padding
   */
  fakeRightPadding?: number;

  /**
   * 换行模式下也可以滚动
   * @default false
   */
  scrollableWrap?: boolean;
  /**
   * 不可操作点击回调
   */
  onDisabledPress?: (option: ButtonOptionsType<TValue>) => void;
}
