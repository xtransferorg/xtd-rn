import React from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import type {
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextProps,
} from 'react-native';
import { CheckboxProps as RNCheckboxProps } from '../../components/Checkbox/interface';

import type { SpaceProps } from '../space/interface';
import { Insets } from 'react-native';

interface CheckboxIconPrivateProps {
  /**
   * 是否选中、高亮
   */
  active?: boolean;

  /**
   * 选中状态颜色
   * @default TOKENS.gray_6
   */
  activeColor?: string;

  /**
   * 图标大小，默认单位为 px
   * @default 20
   */
  size?: number;
}

export interface CheckboxIconProps
  extends Omit<TouchableOpacityProps, 'hitSlop'>,
    CheckboxIconPrivateProps {
  /**
   * 这定义了触摸事件可以从离视图多远的地方开始。
   */
  hitSlop?: Insets;
}

export interface RenderIconProps extends CheckboxIconPrivateProps {
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: TouchableOpacityProps['onPress'];
}

export interface CheckboxProps<ActiveValueT = unknown, InactiveValueT = unknown>
  extends Omit<CheckboxIconPrivateProps, 'active' | 'size' | 'pure'>,
    PropsWithChildren<Record<string, unknown>> {
  /**
   * 用于端到端测试时定位元素
   */
  testID?: string | undefined;
  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 主标题样式,副标题外部容器的样式
   */
  textStyle?: StyleProp<ViewStyle>;

  /**
   * 主标题样式
   */
  labelTextStyle?: StyleProp<TextStyle>;

  /**
   * 副标题样式
   */
  subLabelTextStyle?: StyleProp<TextStyle>;
  /**
   * 内容外部容器演示
   */
  contenStyle?: StyleProp<ViewStyle>;
  /**
   * 内容样式
   */
  contentLabelTextStyle?: StyleProp<TextStyle>;
  /**
   * 图标样式
   */
  iconStyle?: StyleProp<ViewStyle>;

  /**
   * 默认值
   */
  defaultValue?: ActiveValueT | InactiveValueT;

  /**
   * 当前是否选择
   */
  value?: ActiveValueT | InactiveValueT;

  /**
   * 状态变化
   */
  onChange?: (value: ActiveValueT | InactiveValueT) => void;

  /**
   * 选中时对应的值
   * @default true
   */
  activeValue?: ActiveValueT;

  /**
   * 未选中时对应的值
   * @default false
   */
  inactiveValue?: InactiveValueT;

  /**
   * 主标题
   */
  label?: ReactNode;
  /**
   * 主标题的额外属性配置
   */
  labelProps?: TextProps;

  /**
   * 副标题
   */
  subLabel?: ReactNode;
  /**
   * 副标题的额外属性配置
   */
  subLabelProps?: TextProps;

  /**
   * 描述
   */
  contentLabel?: ReactNode;
  /**
   * 描述的额外属性配置
   */
  contentLabelProps?: TextProps;

  /**
   * 是否禁用复选框文本点击
   */
  labelDisabled?: boolean;

  /**
   * 文本位置，可选值为 `'left' | 'right'`
   */
  labelPosition?: 'left' | 'right';

  /**
   * 图标大小
   * @default 20
   */
  iconSize?: number;

  /**
   * 是否禁用复选框
   */
  disabled?: boolean;

  /**
   * 自定义图标
   */
  renderIcon?: (p: RenderIconProps) => ReactNode;

  /**
   * 前置Icon
   * 新增支持svg格式，需uri以svg结尾
   */
  prefixIcon?: string | ReactNode;

  /**
   * 高亮文本
   */
  highlight?: string;
  /**
   * 不可操作点击回调
   */
  onDisabledPress?: () => void;
}

export interface CheckboxGroupOptionType<ActiveValueT = unknown> {
  labelPosition?: 'left' | 'right';
  value: ActiveValueT;
  label: ReactNode;
  labelTextStyle?: StyleProp<TextStyle>;
  subLabel?: ReactNode;
  subLabelTextStyle?: StyleProp<TextStyle>;
  contentLabel?: ReactNode;
  contentLabelTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  prefixIcon?: string | ReactNode;
  testID?: string;
}

export interface CheckboxGroupProps<ActiveValueT = unknown> extends SpaceProps {
  /**
   * 选项
   */
  options: CheckboxGroupOptionType<ActiveValueT>[];

  /**
   * 是否多选
   * @default false
   */
  multiple?: boolean;

  /**
   * 自定义图标
   */
  renderIcon?: (p: RenderIconProps) => ReactNode;

  /**
   * CheckBox.Group的值
   */
  value?: ActiveValueT | ActiveValueT[];

  /**
   * 默认值
   */
  defaultValue?: ActiveValueT | ActiveValueT[];

  /**
   * 状态变化时的回调
   */
  onChange?: (
    value: ActiveValueT[] | ActiveValueT,
    options: { value: ActiveValueT; label: string; disabled?: boolean }[]
  ) => void;
  /**
   * 是否可以编辑，readonly 相似，保持 TextInput 自带的属性效果
   * @default true
   */
  editable?: boolean;

  /**
   * 是否禁用
   * @default true
   */
  disabled?: boolean;

  /**
   * 是否可滚动，主要用于横向排版
   * @default false
   */
  scrollable?: boolean;

  /**
   * Checkbox组件
   */
  checkboxComponent: React.VFC<RNCheckboxProps<ActiveValueT, any>>;

  /**
   * 高亮的文本
   */
  highlight?: string;

  /**
   * Checkbox组件样式
   */
  checkboxComponentStyle?: StyleProp<ViewStyle>;

  /**
   * 不可操作点击回调
   */
  onDisabledPress?: (option: CheckboxGroupOptionType<ActiveValueT>) => void;

  /**
   * labelAlign 对齐方式
   * @default 'middle'
   */
  labelAlign?: 'middle' | 'top';
}
