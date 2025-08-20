import type {
  StyleProp,
  TouchableWithoutFeedbackProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import type { ReactNode } from 'react';

export type PlacementType = 'top' | 'right' | 'bottom' | 'left';
export type SwiperType = 'inner' | 'outer';

export interface SwiperProps extends ViewProps {
  /** 滑块宽度 */
  width?: number;

  /** 滑块高度 */
  height?: number;

  /**
   * 初始位置索引值
   * @default 0
   */
  initialSwipe?: number;

  /**
   * 是否允许手势滑动
   * @default true
   */
  touchable?: boolean;

  /**
   * 自动轮播间隔，单位为 ms
   * @default 3000
   */
  autoplay?: boolean | number;

  /**
   * 是否开启循环播放
   * @default false
   */
  loop?: boolean;

  /**
   * App 后台时是否继续轮播
   * @default false
   */
  loopBackground?: boolean;

  /**
   * 是否为纵向滚动
   * @default false
   */
  vertical?: boolean;

  /** 每一页轮播结束后触发 */
  onChange?: (index: number) => void;

  /**
   * 自定义指示器
   * @default true
   */
  indicator?: boolean | ((total: number, current: number) => ReactNode);

  /** 默认指示器样式 */
  indicatorStyle?: ViewStyle;

  /** 轮播图子节点 */
  children?: ReactNode;

  /** 展示轮播图滑动提示 */
  showCounter?: boolean;

  /**
   * 自定义容器样式
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * 指示器位置，vertical = true，placement传left和right生效,默认right，否则传top和bottom生效
   * @default bottom
   */
  placement?: PlacementType;

  /**
   * 指示器类型（inner位于容器内， outer位于容器外），vertical = true，只有inner生效
   * @default inner
   */
  swiperType?: SwiperType;
}

export type SwiperItemProps = {
  children?: ReactNode;
} & TouchableWithoutFeedbackProps;

export type SwiperInstance = {
  activeIndex: number;
  swipeTo: (index: number) => void;
  swipeNext: () => void;
  swipePrev: () => void;
  pause: () => void;
  resume: () => void;
};
