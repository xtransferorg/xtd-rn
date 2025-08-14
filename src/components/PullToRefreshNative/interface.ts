import { LottieViewProps, AnimationObject } from 'lottie-react-native';
import { ReactNode } from 'react';
import { Animated, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface AnimatedLottieViewSelfProps extends Omit<LottieViewProps, 'source'> {
  /**
   * The source of animation. Can be referenced as a local asset by a string, or remotely
   * with an object with a `uri` property, or it can be an actual JS object of an
   * animation, obtained (for example) with something like
   * `require('../path/to/animation.json')`
   */
  source?: string | AnimationObject | { uri: string }; // 组件内部有默认值，因此改成可选值
}

export interface PullToRefreshProps {
  /**
   * 容器样式
   */
  style?: ViewStyle;

  /**
   * 下拉刷新的header组件
   */
  headerComponent?: ReactNode;

  /**
   * 上拉加载更多的footer组件类
   */
  // FooterComponent?: ReactNode;

  /**
   * headerComponent 组件的最小高度，也是触发刷新的下拉距离
   * @default 166 / 2
   */
  headerHeight?: number;

  /**
   * headerComponent 组件容器的样式
   */
  headerStyle?: ViewStyle;

  /**
   * 下拉过程中，可以触发刷新的下拉距离。不传，则默认等于 headerHeight
   */
  // refreshTriggerHeight?: number;

  /**
   * 正在刷新时，容器保持的顶部距离，如果用户不传，则默认等于 headerHeight
   */
  // refreshingHoldHeight?: number;

  /**
   * 当前是否正在下拉刷新请求数据中
   */
  refreshing: boolean;

  /**
   * 是否还有更多数据
   */
  // noMoreData?: boolean;

  /**
   * 下拉刷新的回调函数，返回一个 Promise，当 Promise resolve 时，下拉刷新结束
   */
  onRefresh?: () => Promise<any>;

  /**
   * 上拉加载更多
   */
  // onLoadMore?: () => void;

  /**
   * 子组件
   */

  children: JSX.Element;

  /**
   * 传递给 Lottie Component
   */
  lottieProps?: AnimatedLottieViewSelfProps;

  /**
   * 下拉刷新的自定义文案
   */
  text?: string;
  /**
   * 下拉刷新文案的自定义样式
   */
  textStyle?: StyleProp<TextStyle>;
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
