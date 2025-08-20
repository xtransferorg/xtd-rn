import type React from 'react';
import type { PopupPropsCommon } from '../../core/popup/interface';

export type ToastType =
  | 'text'
  | 'loading'
  | 'success'
  | 'fail'
  | 'warn'
  | 'icon';

export type ToastMethods = {
  close: () => void;
  setMessage: (s: string) => void;
};

export interface ToastProps
  extends Omit<
    PopupPropsCommon,
    'visible' | 'duration' | 'closeOnPressOverlay' | 'useNative'
  > {
  /**
   * 提示类型，可选值为 `'text' | 'loading' | 'success' | 'fail' | 'warn | 'icon'`
   * @default 'text'
   */
  type?: ToastType;

  /**
   * 位置，可选值为 `'top' | 'bottom' | 'middle'`
   * @default 'middle'
   */
  position?: 'top' | 'bottom' | 'middle';

  /**
   * 文本内容(支持模板字符串\n换行)
   * @default ''
   */
  message?: string;

  /**
   * 是否显示背景遮罩层
   * @default false
   */
  overlay?: boolean;

  /**
   * 是否禁止背景点击
   * @default false
   */
  forbidPress?: boolean;

  /**
   * 是否在点击后关闭
   * @default false
   */
  closeOnPress?: boolean;

  /**
   * 是否在点击遮罩层后关闭
   * @default false
   */
  closeOnPressOverlay?: boolean;

  /**
   * @deprecated 已经废弃 加载图标类型
   * @default 'circular'
   */
  loadingType?: 'circular' | 'spinner';

  /**
   * 展示时长(ms)，值为 0 时，toast 不会消失
   * @default 2000
   */
  duration?: number;

  /**
   * 自定义图标
   */
  icon?: React.ReactNode;

  /**
   * 是否使用原生Modal弹框提示
   * @default true 避免被覆盖情况
   */
  useNative?: boolean;
}

export interface ToastOptions extends ToastProps {}
