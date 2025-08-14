import type {
  TouchableWithoutFeedbackProps,
  FlexStyle,
  Insets,
} from 'react-native';

export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around';

export type FlexAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';

export interface FlexProps
  extends Omit<TouchableWithoutFeedbackProps, 'hitSlop'> {
  /**
   * 项目定位方向
   */
  direction?: FlexStyle['flexDirection'];

  /**
   * 子元素的换行方式
   */
  wrap?: FlexStyle['flexWrap'];

  /**
   * 子元素在主轴上的对齐方式
   */
  justify?: FlexJustify;

  /**
   * 子元素在交叉轴上的对齐方式
   */
  align?: FlexAlign;
  /**
   * 这定义了触摸事件可以从离视图多远的地方开始。
   */
  hitSlop?: Insets;
}

export interface FlexItemProps
  extends Omit<TouchableWithoutFeedbackProps, 'hitSlop'> {
  flex?: FlexStyle['flex'];
  /**
   * 这定义了触摸事件可以从离视图多远的地方开始。
   */
  hitSlop?: Insets;
}
