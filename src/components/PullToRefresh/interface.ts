import { ReactNode } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { Locale } from '../Locale/interface';

export interface Props {
  // 容器样式
  style?: ViewStyle;
  // 下拉刷新的header组件类
  HeaderComponent?: ReactNode;
  // Header 组件的高度，也是触发刷新的下拉距离
  headerHeight?: number;
  // 下拉过程中，可以触发刷新的下拉距离。不穿，则默认等于 headerHeight
  refreshTriggerHeight?: number;
  // 正在刷新时，容器保持的顶部距离，如果用户不传，则默认等于 headerHeight
  refreshingHoldHeight?: number;
  // 当前是否正在下拉刷新请求数据中
  refreshing: boolean;
  // 下拉刷新达到阈值时，回调父级
  onRefresh?: (() => void) | null | undefined;
  // 子组件，只能是  ScrollView/FlatList 等
  children: JSX.Element;
  // 内部滚动组件，contentOffset.y <= topPullThreshold 时，触发顶部的下拉刷新动作
  topPullThreshold?: number;
  // 完成后延迟消失的时间，单位为 ms
  completeDelay?: number;
  //国际化
  locale: Locale['PullToRefresh'];
}

export interface PullToRefreshHeaderProps {
  // 当前下拉的距离，也穿给header，方便组件内部进行各种自定义计算
  pullDistance: number;
  // 当前下拉的百分比 [0, 1]
  percentAnimatedValue: Animated.AnimatedDivision<number>;
  // 下拉百分比 [0, 1] 因为percentAnimatedValue 不能直接读取当前值，需要给header直接一个当前比例，方便内部处理
  percent: number;
  // 当前是否正在刷新中
  refreshing: boolean;
}
