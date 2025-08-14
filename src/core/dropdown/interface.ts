import type {
  PropsWithChildren,
  MutableRefObject,
  ReactNode,
  Ref,
} from 'react';
import type {
  View,
  ViewProps,
  TextProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';

import type { PopupPropsCommon } from '../popup/interface';
import type { TreeProps } from '../tree/interface';
import { FilterLayoutType } from './enum';
import { Insets } from 'react-native';

export interface DropdownBadgeProps extends TextProps {
  /**
   * 徽标内容/展示的数字
   */
  count?: string | number | boolean;
}

export interface DropdownItemOption<T> {
  /**
   * 文字
   */
  label: string;

  /**
   * 标识符
   */
  value: T;

  /**
   * 徽章
   */
  badge?: number | string | boolean;

  children?: DropdownItemOption<T>[];
}

export interface DropdownTextProps
  extends Omit<TouchableOpacityProps, 'hitSlop'> {
  /**
   * 标题文案样式
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * 激活标题文案样式
   */
  textActiveStyle?: StyleProp<TextStyle>;

  /**
   * 图标样式
   */
  iconStyle?: StyleProp<ViewStyle>;

  /**
   * 是否禁用菜单
   * @default false
   */
  disabled?: boolean;

  /**
   * 菜单项标题
   */
  title: string;

  /**
   * 是否激活状态
   * @default false
   */
  active?: boolean;

  /**
   * 是否可点击 配合
   * @default true
   */
  pressable?: boolean;

  /**
   * 菜单标题和选项的选中态颜色
   * @default dropdown_active_color
   */
  activeColor?: string;

  /**
   * 选项中的图标未选中态颜色
   */
  arrowIconColor?: string;

  /**
   * 选项中的图标激活态颜色
   */
  arrowIconActiveColor?: string;

  /**
   * icon大小
   */
  iconSize?: number;

  /**
   * 箭头默认朝向
   * @default 'down'
   */
  direction?: 'up' | 'down';

  /**
   * 徽章
   */
  badge?: number | string | boolean;

  /**
   * 自定义icon
   */
  icon?: (active: boolean) => ReactNode;
  /**
   * 标题行数
   */
  numberOfLines?: number;
  /**
   * 标题样式
   */
  cusTextStyle?: StyleProp<TextStyle>;
  /**
   * 这定义了触摸事件可以从离视图多远的地方开始。
   */
  hitSlop?: Insets;
}

export interface DropdownItemProps<T>
  extends Partial<
      Pick<
        DropdownTextProps,
        | 'iconStyle'
        | 'disabled'
        | 'arrowIconColor'
        | 'arrowIconActiveColor'
        | 'iconSize'
        | 'textActiveStyle'
        | 'icon'
      >
    >,
    Pick<TreeProps, 'search' | 'onSearch' | 'cancellable'>,
    PropsWithChildren<{}>,
    Pick<PopupPropsCommon, 'useNative' | 'overlay'> {
  /**
   * 标题样式
   */
  titleStyle?: StyleProp<ViewStyle>;

  /**
   * 标题文案样式
   */
  titleTextStyle?: StyleProp<TextStyle>;

  /**
   * 选项数组
   */
  options: DropdownItemOption<T>[];

  /**
   * 当前选中的选项值
   */
  value?: T;

  /**
   * 默认值
   */
  defaultValue?: T;

  /**
   * 点击选项导致 value 变化时触发
   */
  onChange?: (v: T, d: DropdownItemOption<T>) => void;

  /**
   * 动画时长，单位秒
   * @default animation_duration_fast
   */
  duration?: number;

  /**
   * 菜单栏 z-index 层级
   * @default 10
   */
  zIndex?: number;

  /**
   * 是否在点击外部元素后关闭菜单
   * @default true
   */
  closeOnPressOutside?: boolean;

  /**
   * 候选项加载中
   */
  loading?: boolean;

  /**
   * 没有值时提示文案
   */
  placeholder?: string;

  /**
   * 自定义展开面板内容
   */
  customPanelContent?: ReactNode;

  /**
   * 当打开面板时触发
   */
  onPanelOpen?: () => void;

  /**
   * 当关闭面板后触发
   */
  onPanelClosed?: () => void;

  /**
   * 每项选中的标签
   */
  itemLabel?: string;

  /**
   * 每一项ref
   */
  ref?: Ref<ItemRef>;
}

export interface DropdownContext
  extends Partial<
      Pick<DropdownTextProps, 'iconStyle' | 'activeColor' | 'direction'>
    >,
    Partial<
      Pick<
        DropdownItemProps<any>,
        | 'titleStyle'
        | 'titleTextStyle'
        | 'duration'
        | 'zIndex'
        | 'closeOnPressOutside'
      >
    > {
  /**
   * 菜单的 Ref，内部使用不向外暴露
   */
  MenuRef: MutableRefObject<View>;

  /**
   * 布局类型
   */
  filterLayoutType?: DropdownMenuProps['filterLayoutType'];
}

// DropdownItem Context
export interface DropdownItemContext {
  /**
   * 设置每项的激活态
   */
  setActive: ((active: boolean) => void) | undefined;

  /**
   * 设置每项面板的展开收起状态
   */
  setVisible: (visible: boolean) => void;

  /**
   * 关闭面板
   */
  close: () => void;
}

export interface DropdownMenuProps
  extends Omit<Partial<DropdownContext>, 'MenuRef'>,
    ViewProps,
    PropsWithChildren<{}> {
  /**
   * 是否显示分割线
   * @default true
   */
  divider?: boolean;

  /**
   * 布局类型
   * @default FilterLayoutType.EquallyDivide
   */
  filterLayoutType?: FilterLayoutType;

  /**
   * Text numberOfLines，默认为 1，通常搭配 ellipsizeMode 使用
   */
  numberOfLines?: number;
}

export interface DropdownPopupProps
  extends Pick<DropdownItemProps<any>, 'zIndex' | 'closeOnPressOutside'>,
    PopupPropsCommon,
    PropsWithChildren<{}> {
  /**
   * 触发目标高度，计算弹出层应该出现的位置（上面、下面）
   */
  targetHeight: number;

  /**
   * 触发目标 pageY
   */
  targetPageY: number;

  /**
   * 点击非内容的遮罩阴影
   */
  onPressShade?: TouchableOpacityProps['onPress'];

  /**
   * 是否开启顶部/底部安全区适配
   * @default true
   */
  safeAreaInset?: boolean;

  /**
   * 是否渲染 shade 元素，某些场景不需要遮罩非选项区域
   * @default true
   */
  showShade?: boolean;

  /**
   * 内容包裹层的样式
   */
  contentStyle?: StyleProp<ViewStyle>;
}

export interface DropdownSelectorMethodProps<T>
  extends Omit<
      DropdownItemProps<T>,
      | 'iconStyle'
      | 'disabled'
      | 'titleStyle'
      | 'titleTextStyle'
      | 'value'
      | 'onChange'
      | 'loading'
    >,
    PropsWithChildren<{}>,
    Pick<PopupPropsCommon, 'useNative' | 'overlay'> {
  /**
   * 触发目标高度
   */
  targetHeight: number;

  /**
   * 触发目标 pageY
   */
  targetPageY: number;

  /**
   * 类似确定的回调，当选择到最末端时触发，部分业务需要把选项其他值提取出来
   */
  onConfirm?: (v: T, d: DropdownItemOption<T>) => void;

  /**
   * 取消
   */
  onCancel?: () => void;

  onClosed?: PopupPropsCommon['onClosed'];

  /**
   * 菜单标题和选项的选中态颜色
   * @default dropdown_active_color
   */
  activeColor?: string;

  /**
   * 自定义展开面板内容
   */
  customPanelContent?: ReactNode;

  /**
   * 展开、关闭面板的方法
   */
  setActive?: (active: boolean) => void;

  /**
   * 每一项ref
   */
  ref?: Ref<ItemRef>;
}

/**
 * 每一项ref
 */
export interface ItemRef {
  /**
   * 关闭面板
   */
  close: () => void;
}
