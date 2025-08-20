import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export interface CodeInputProps {
  /**
   * @description 输入框类型
   * @default ''
   */
  type?: 'error';
  /** 默认值 */
  defaultValue?: string;
  /** 是否使用掩码 */
  mask?: boolean;
  /** 容器宽度 */
  containWidth?: number;
  /** 单元格数量 */
  cellCount?: number;
  /** 是否自动聚焦 */
  autoFocus?: boolean;
  /** 代码变化时的回调 */
  onChange?: (code: string) => void;
  /** 输入完成时的回调 */
  onComplete?: (code: string) => void;
  /** 额外的自定义内容 */
  extra?: React.ReactNode;
  /** 自定义单元格样式 */
  cellStyle?: ViewStyle;
  /** 自定义聚焦单元格样式 */
  cellFocusStyle?: ViewStyle;
  /** 自定义单元格文本样式 */
  cellTextStyle?: TextStyle;
}

export interface CodeInputRef {
  setCodeValue: (code: string) => void;
}

export type CellRenderOptions = {
  index: number;
  symbol: string;
  isFocused: boolean;
};
