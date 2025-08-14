import type React from 'react';
import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  LayoutRectangle,
} from 'react-native';

import type { BottomBarProps } from '../bottom-bar/interface';
import { ReactNode } from 'react';

export type TabValue = number | string;

export type TabItem = {
  value: TabValue;
  label: ReactNode;
  iconRender?: (color?: string, isActive?: boolean) => React.ReactElement;

  /**
   * 徽标，在每个tab右侧渲染
   */
  badge?: string;
};

export interface ILayout {
  tab?: LayoutRectangle;
  text?: LayoutRectangle;
  key?: TabValue;
}

export interface TabBarProps extends BottomBarProps {
  /**
   * 文案颜色
   * @default tab_bar_text_color
   */
  textColor?: string;

  /**
   * 图标颜色
   * @default tab_bar_icon_color
   */
  iconColor?: string;

  /**
   * 激活的文案颜色
   * @default tab_bar_active_text_color
   */
  activeTextColor?: string;

  /**
   * 激活的图标颜色
   * @default tab_bar_active_icon_color
   */
  activeIconColor?: string;

  /**
   * 当前选中的值
   */
  value?: TabValue;

  /**
   * 默认数据
   */
  defaultValue?: TabValue;

  /**
   * tab 数据
   */
  options: TabItem[];

  /**
   * 点击切换回调
   */
  onChange?: (value: TabValue) => void;

  /**
   * 是否采用指示器模式
   * @default false
   */
  indicator?: boolean;

  /**
   * 指示器宽
   * @description 0 表示撑满，其他数值标识固定，不填写与文字同宽
   */
  indicatorWidth?: number;

  /**
   * 指示器高度
   * @description 设置为 0 就是不出现
   * @default 3
   */
  indicatorHeight?: number;

  /**
   * 指示器颜色
   * @default tab_bar_indicator_color
   */
  indicatorColor?: string;

  /**
   * 排列方式，left 标识自适应宽、有滚动条，center 标识居中、无滚动条
   * @default 'center'
   */
  tabAlign?: 'left' | 'center';

  /**
   * 指示器样式
   */
  indicatorStyle?: StyleProp<ViewStyle>;

  /**
   * 所有tab文字样式
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * 被激活tab文字样式
   */
  activeTextStyle?: StyleProp<TextStyle>;

  /**
   * 每个tab容器的样式
   */
  tabStyle?: StyleProp<ViewStyle>;

  /**
   * 排列方式，left 标识自适应宽、有滚动条时父容器样式
   */
  scrollViewStyle?: StyleProp<ViewStyle>;

  /**
   *  排列方式，left 标识自适应宽、有滚动条时内容父容器样式
   */
  scrollViewContainerStyle?: StyleProp<ViewStyle>;

  /**
   * 徽标样式，未被激活
   */
  badgeStyle?: StyleProp<TextStyle>;

  /**
   * 徽标激活样式
   */
  badgeActiveStyle?: StyleProp<TextStyle>;

  /**
   * 自定义指示器
   */
  renderIndicator?: React.ReactNode;

  /**
   * 后置插槽
   */
  suffix?: ReactNode;

  /**
   * 后置插槽宽度，用于计算左侧宽度
   * @default 56
   */
  suffixWidth?: number;

  /**
   * 后置插槽样式
   */
  suffixStyle?: ViewStyle;

  tabWidth?: number;
}
