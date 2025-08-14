import { StyleProp, TextProps, ViewStyle } from 'react-native';
import { CSSProperties, ReactNode, PropsWithChildren } from 'react';

export type PopupPosition = 'top' | 'bottom' | 'right' | 'left' | 'center';
export interface PopupPropsCommon {
  /**
   * 是否显示
   * @default false
   */
  visible?: boolean;

  /**
   * 动画时长，单位毫秒秒
   * @default 300
   */
  duration?: number;

  /**
   * 是否显示遮罩层
   * @default true
   */
  overlay?: boolean;

  /**
   * 是否在点击遮罩层后关闭
   * @default true
   */
  closeOnPressOverlay?: boolean;

  /**
   * 点击遮罩层时触发
   */
  onPressOverlay?: () => void;

  /**
   * 打开弹出层时触发
   */
  onOpen?: () => void;

  /**
   * 打开弹出层且动画结束后触发
   */
  onOpened?: () => void;

  /**
   * 关闭弹出层时触发
   */
  onClose?: () => void;

  /**
   * 关闭弹出层且动画结束后触发
   */
  onClosed?: () => void;

  /**
   * 当点击返回按钮时触发
   * @support Android
   */
  onRequestClose?: () => boolean;

  /**
   * 是否使用原生弹出层
   * @default false
   */
  useNative?: boolean;

  /**
   * 是否透明状态栏，只有在 useNative 为 true 时生效
   *
   * 但是设置此值会导致键盘遮挡输入框的情况
   *
   * @support Android
   */
  statusBarTranslucent?: boolean;
}

export interface PopupProps extends PopupPropsCommon, PropsWithChildren<{}> {
  /**
   * 手势下滑距离大于此值后触发关闭 0-1
   * @default 0.3
   */
  threshold?: number;

  /**
   * 是否开启手势下滑关闭
   * @default false
   */
  enableSlidingClose?: boolean;

  /**
   * 最外层样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 弹出位置，可选值为 `'top' | 'bottom' | 'right' | 'left' | 'center'`
   * @default 'center'
   */
  position?: PopupPosition;

  /**
   * 是否显示圆角
   * @default false
   */
  round?: boolean;

  /**
   * 是否开启底部安全区适配
   * @default false
   */
  safeAreaInsetBottom?: boolean;

  /**
   * 是否在显示弹层时才渲染节点
   * @default true
   */
  lazyRender?: boolean;

  /**
   * 关闭时销毁 Popup，回退到 lazyRender 的状态
   * @default false
   */
  destroyOnClosed?: boolean;

  /**
   * 蒙层样式
   */
  overlayStyle?: StyleProp<ViewStyle>;

  /**
   * 内容区域可滚动时，滚动到顶部的状态位
   * @inner 仅供内部使用
   */
  contentScrollTop?: boolean;
}

export interface PopupHeaderProps {
  /**
   * header容器样式
   */
  headerStyle?: StyleProp<ViewStyle>;

  /**
   * 取消按钮容器样式
   */
  cancelBtnContainerStyle?: StyleProp<ViewStyle>;

  /**
   * 确认按钮容器样式
   */
  confirmBtnContainerStyle?: StyleProp<ViewStyle>;

  /**
   * 自定义取消按钮
   */
  cancelBtnIcon?: ReactNode;

  /**
   * 取消按钮样式
   */
  cancelBtnStyle?: StyleProp<CSSProperties>;

  /**
   * 取消按钮图标Props
   */
  cancelBtnIconProps?: {
    color?: string;
    size?: string | number;
    fillColor?: string;
  };

  /**
   *  确认按钮样式
   */
  confirmBtnStyle?: StyleProp<ViewStyle>;

  /**
   * 是否展示取消按钮
   * @default true
   */
  showCancelButton?: boolean;

  /**
   * 取消按钮文字
   * @default 取消
   * @deprecated 已经废弃，左侧不再是取消文案
   */
  cancelButtonText?: string;

  /**
   * 点击取消
   */
  onCancel?: TextProps['onPress'];

  /**
   * 是否展示确认按钮
   * @default true
   */
  showConfirmButton?: boolean;

  /**
   * 确认按钮文字
   * @default 确定
   */
  confirmButtonText?: string;

  /**
   * 点击确定
   */
  onConfirm?: TextProps['onPress'];

  /**
   * 标题
   */
  title?: ReactNode;

  /**
   * title容器样式
   */
  titleStyle?: StyleProp<ViewStyle>;

  /**
   * 描述
   */
  description?: ReactNode;
}
