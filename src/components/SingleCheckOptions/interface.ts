import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type SingleCheckOptionsValue = string | number;

export interface SingleCheckOptionsOption<V> {
  // 文字
  label: ReactNode;
  // 描述
  description?: ReactNode;
  // 选项的值
  value: V;
  // 是否禁用
  disabled?: boolean;
}

export type SingleCheckOptionsProps<V> = {
  // 可选项
  options: SingleCheckOptionsOption<V>[];
  // 行展示数
  columns?: number;
  // 是否全局禁止选中
  disabled?: boolean;
  // 默认项
  defaultValue?: V | V[];
  // 选中项
  value?: V | V[];
  // 选项改变时触发
  onChange?: (v: V | V[]) => void;
  // 是否显示对勾角标
  showCheckMark?: boolean;
  style?: StyleProp<ViewStyle>;
};
