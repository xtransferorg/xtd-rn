import React, { ReactNode } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { PopupHeaderProps, PopupProps } from '../Popup/interface';

export interface FloatingLayerRef {
  getContainerHeight: () => number;
}

export interface FloatingLayerProps extends PopupProps, PopupHeaderProps {
  /**
   * 分享类浮层，渲染元素的列表
   */
  items?: ReactNode[];
  /**
   * 分享类浮层，文字按钮
   */
  textButton?: string;
  /**
   * 分享类浮层，文字按钮点击事件
   */
  onPressTextButton?: () => void;

  /**
   * footer
   */
  footer?: ReactNode;

  /**
   * 外层容器样式
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * 内容容器样式
   */
  contentStyle?: StyleProp<ViewStyle>;

  /**
   * 底部容器样式
   */
  footerStyle?: StyleProp<ViewStyle>;

  /**
   * 内容区域滚动条是否展示
   */
  showsVerticalScrollIndicator?: boolean;

  /**
   * Popup.Header cancelBtnContainerStyle
   */
  cancelBtnContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Popup.Header confirmBtnContainerStyle
   */
  confirmBtnContainerStyle?: StyleProp<ViewStyle>;

  /**
   * 内容高度
   */
  containerHeight?: number;

  /**
   * 内容区域滚动事件回调
   */
  onContentScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;

  /**
   * 最顶部的额外配置元素
   */
  topExtra?: React.ReactElement;

  /**
   * 标题下的额外配置元素
   */
  headerExtra?: React.ReactElement;

  /**
   * 最外层的滚动视图样式
   */
  scrollStyle?: StyleProp<ViewStyle>;
  /**
   * 底部是否显示分割线，内容滚动时默认显示，前提底部存在
   */
  splitLine?: boolean;

  /**
   * 键盘显示的时候底部距离键盘的间距（往上顶多少）
   * 仅iOS有效 （Android无需、鸿蒙无效）
   */
  keyboardMargin?: number;

  /**
   * 是否处理键盘状态
   */
  autoResize?: boolean;

  /**
   * 是否禁用 react-native-keyboard-manager
   * @default false
   * @description 仅iOS有效
   */
  disableKeyboardManager?: boolean;
}
