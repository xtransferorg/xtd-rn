import type { PropsWithChildren } from 'react';
import type { ViewStyle, StyleProp } from 'react-native';

export interface OverlayProps extends PropsWithChildren<{}> {
  /**
   * 最外层样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 是否展示遮罩层
   * @default false
   */
  visible: boolean;

  /**
   * z-index 层级
   * @default 1
   */
  zIndex?: number;

  /**
   * 动画时长，单位毫秒，默认值 300
   * @default animation_duration_base
   */
  duration?: number;

  /**
   * 点击弹层
   */
  onPress?: () => void;

  /**
   * 当点击返回按钮时触发
   * @support Android
   */
  onRequestClose?: () => boolean;

  /**
   * 自定义遮罩层颜色
   * @default overlay_background_color
   */
  backgroundColor?: string;

  /**
   * 是否使用原生 Modal
   */
  useNative?: boolean;

  /**
   * 是否透明状态栏，只有在 useNative 为 true 时生效
   * @support Android
   */
  statusBarTranslucent?: boolean;
}
