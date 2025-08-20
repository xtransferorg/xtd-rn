import { ReactNode, ComponentType } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

type Icon = ComponentType<{
  color?: string;
  size?: string | number;
  fillColor?: string;
}>;

export type RightIcon = { icon: Icon; onPress: () => void; label?: string };
export interface NavBarProps {
  /**
   * 是否显示返回区域的箭头, 也可以传入 ReactNode 进行自定义
   * @default true
   */
  backArrow?: boolean | ReactNode;
  /**
   * 左侧内容，渲染在返回区域的右侧
   */
  left?: ReactNode;
  /**
   * 右侧内容
   */
  right?: ReactNode | RightIcon[];
  /**
   * 标题，可以为字符串，也可以自定义节点
   */
  children?: ReactNode;

  /**
   * 标题，可以为字符串，也可以自定义节点
   */
  title?: ReactNode;
  /**
   * 标题样式
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * 描述，可以为字符串，也可以自定义节点
   */
  description?: ReactNode;
  /**
   * 描述样式
   */
  descriptionStyle?: StyleProp<TextStyle>;

  /**
   * 安卓端：导航栏所在页面是否是沉浸式页面, 该属性对ios无效
   * @default false
   */
  translucent?: boolean;

  /**
   * 导航栏区域自定义内容
   */
  customNavBar?: ReactNode;
  /**
   * 点击返回区域后的回调
   */
  onBack?: () => void;
  /**
   * 左侧区域的样式属性
   */
  leftStyle?: StyleProp<ViewStyle>;
  /**
   * 右侧区域的样式属性
   */
  rightStyle?: StyleProp<ViewStyle>;
  /**
   * 中间区域的样式属性
   */
  centerStyle?: StyleProp<ViewStyle>;
  /**
   * statusBar容器样式属性
   */
  statusBarStyle?: StyleProp<ViewStyle>;
  /**
   * navbar容器样式属性
   */
  navBarStyle?: StyleProp<ViewStyle>;
  /**
   * navbar父容器样式属性
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 自适配高度, 安卓导航栏高度为56（react-navigation源码里有说明）, ios导航栏高度为44
   * @default false
   */
  autoHeight?: boolean;

  /**
   * 内容是否居中，默认 props?.children 或 props?.title 为 string 时居中
   */
  enableContentCenter?: boolean;
}

export interface NavBarRef {}
