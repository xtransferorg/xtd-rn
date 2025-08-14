import { ReactNode, ReactElement } from 'react';
import { LayoutRectangle, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { PlacementType } from './enum';

interface TourProps {
  /**
   * 控制蒙层是否可见
   * @default false
   */
  visible?: boolean;
  /**
   * 点击背景触发
   */
  onBackdropPress?: () => void;
  /**
   * 点击目标触发
   */
  onTargetPress?: () => void;
  /**
   * statusBarTranslucent 决定你的模态框是否应该在系统状态栏下。
   * @default true
   */
  statusBarTranslucent?: boolean;
  /**
   * 是否显示箭头
   * @default true
   */
  arrow?: boolean;
  /**
   * 设置所有 tour 箭头颜色
   */
  arrowColor?: string;
  // /**
  //  * 自定义关闭按钮 设计去除
  //  */
  // closeIcon?: ReactNode;
  /**
   * 引导卡片相对于目标元素的位置
   */
  placement?: PlacementType;
  /**
   * 跳过引导时的回调函数
   */
  onSkip?: () => void;
  /**
   * 引导完成时的回调
   */
  onFinish?: () => void;
  /**
   * 是否启用蒙层
   */
  mask?: boolean;
  /**
   * 蒙层颜色
   */
  maskColor?: string;
  /**
   * 蒙层不透明度（0~1）
   */
  maskOpacity?: number;
  /**
   * 步骤改变时的回调，current 为当前的步骤
   */
  onChange?: (current: number) => void;
  /**
   * 当前处于哪一步
   */
  current?: number;
  /**
   * 启用跳过功能
   * @default false
   */
  skip?: boolean;
  /**
   * 自定义指示器样式
   */
  indicatorsStyle?: StyleProp<TextStyle>;
  /**
   * 自定义指示器(包括skip在内)
   */
  indicatorsRender?: (current: number) => ReactElement;
  /**
   * 完整底部包括指示器、按钮
   */
  footerRender?: (current: number) => ReactElement;
  /**
   * 每一提示步骤配置
   */
  steps?: TourStepProps[];
}

interface TourStepProps {
  /**
   * 样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 目标位置（相对视窗）& 宽高信息
   */
  layout?: LayoutRectangle;
  /**
   * 引导卡片相对于目标元素的位置
   */
  placement?: PlacementType;
  /**
   * 是否显示箭头
   * @default true
   */
  arrow?: boolean;
  /**
   * 设置所有 tour 箭头颜色
   */
  arrowColor?: string;
  /**
   * 一般用于展示的图片或者视频
   */
  cover?: ReactElement;
  /**
   * cover容器style
   */
  coverContainerStyle?: StyleProp<ViewStyle>;
  /**
   * 标题
   */
  title?: string;
  /**
   * 标题样式(title为string生效)
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * 主要描述部分
   */
  description?: ReactNode;
  /**
   * 自定义主要描述部分样式(description为string生效)
   */
  descriptionStyle?: StyleProp<TextStyle>;
  /**
   * 自定义下一步按钮
   */
  nextButton?: ReactNode;
  /**
   * 自定义上一步按钮
   */
  prevButton?: ReactNode;
  /**
   * 启用跳过功能
   * @default false
   */
  skip?: boolean;
  /**
   * 自定义指示器样式
   */
  indicatorsStyle?: StyleProp<TextStyle>;
  /**
   * 自定义指示器(包括skip在内)
   */
  indicatorsRender?: (current: number) => ReactNode;
  /**
   * 完整底部包括指示器、按钮
   */
  footerRender?: (current?: number) => ReactNode;
}

interface RectangleProps {
  rect?: LayoutRectangle;
  /**
   * 是否启用蒙层
   */
  mask?: boolean;
  /**
   * 蒙层颜色
   * @default #181721
   */
  maskColor?: string;
  /**
   * 蒙层不透明度
   * @default 0.4
   */
  maskOpacity?: number;
  /**
   * 圈选留白padding
   * @default 4
   */
  rectPadding?: number;
  /**
   * 每一提示步骤
   */
  step?: ReactElement;
  /**
   * 点击背景容触发
   */
  onBackdropPress?: () => void;
  /**
   * 点击目标触发
   */
  onTargetPress?: () => void;
  /**
   * 引导卡片相对于目标元素的位置
   */
  placement?: PlacementType;
  /**
   * 是否显示箭头
   * @default true
   */
  arrow?: boolean;
  /**
   * 设置所有 tour 箭头颜色
   */
  arrowColor?: string;
  /**
   * statusBarTranslucent 决定你的模态框是否应该在系统状态栏下。
   * @default true
   */
  statusBarTranslucent?: boolean;
}

interface TourRef {}

export { TourProps, TourRef, TourStepProps, RectangleProps };
