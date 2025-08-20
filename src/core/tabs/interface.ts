import type { PropsWithChildren, ReactNode } from 'react';

import type { TabBarProps } from '../tab-bar/interface';
import { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';

export interface TabsProps
  extends Omit<
      TabBarProps,
      | 'value'
      | 'defaultValue'
      | 'options'
      | 'onChange'
      | 'indicator'
      | 'divider'
      | 'safeAreaInsetBottom'
      | 'keyboardShowNotRender'
      | 'hidden'
      | 'style'
      | 'height'
      | 'backgroundColor'
    >,
    PropsWithChildren<{}> {
  /**
   * TabBar style
   */
  tabBarStyle?: TabBarProps['style'];

  /**
   * TabBar 高度
   */
  tabBarHeight?: TabBarProps['height'];

  /**
   * TabBar 背景色
   * @default bottom_bar_background_color
   */
  tabBarBackgroundColor?: TabBarProps['backgroundColor'];

  /**
   * 当前激活 tab 面板的 key
   */
  activeKey?: string;

  /**
   * 初始化选中面板的 key，如果没有设置 activeKey
   */
  defaultActiveKey?: string;

  /**
   * 切换面板的回调
   */
  onChange?: (activeKey: string) => void;

  /**
   * 是否显示分割线
   * @default false
   */
  divider?: boolean;
  /**
   *  是否可以左右划动，true 是 false 否
   */
  swipe?: boolean;
  /**
   *  tab 面板默认宽度
   */
  tabWidth?: number;
  /**
   * 是否垂直布局
   * 和swipe互斥，且权重 vertical > swipe
   * @default false
   */
  vertical?: boolean;
  /**
   * 内容的scrollView的样式
   * swipe 或 vertical为true时候有效
   */
  contentScrollViewStyle?: StyleProp<ViewStyle>;
}

export interface TabPaneProps extends PropsWithChildren<{}> {
  /**
   * 对应 activeKey
   */
  key: string;

  /**
   * 选项卡头显示文字
   */
  tab: ReactNode;

  /**
   * 是否在激活时才渲染节点
   * @default true
   */
  lazyRender?: boolean;

  /**
   * 徽标，在每个tab右侧渲染
   */
  badge?: string;
}

export interface TabViewProps extends PropsWithChildren<{}> {
  /**
   * 是否在激活时才渲染节点
   * @default true
   */
  lazyRender?: boolean;

  /**
   * 是否激活
   */
  active?: boolean;
  /**
   * 是否支持左右划动
   */

  swipe?: boolean;
  /**
   *  tab 面板默认宽度
   */
  tabWidth?: number;
  /**
   * 加载&布局更改时调用
   *
   * {nativeEvent: { layout: {x, y, width, height}}}.
   */
  onLayout?: (event: LayoutChangeEvent) => void;
}
