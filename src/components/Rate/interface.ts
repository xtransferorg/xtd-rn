import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface Character {
  normal: React.ReactElement | string;
  selected: React.ReactElement | string;
}

export interface CharacterSize {
  width?: number;
  height?: number;
}
export interface RateProps {
  /**
   * 最外层容器样式
   */
  style?: ViewStyle;

  /**
   * 星星容器的样式
   */
  starStyle?: ViewStyle;

  /**
   * 默认值
   */
  defaultValue?: number;

  /**
   * 自定义字符
   */
  character?: Character | Character[];

  /**
   * 星的总数
   */
  count?: number;

  /**
   * 星的个数，受控值
   */
  value?: number;

  /**
   * 自定义每一项的提示信息
   */
  tooltips?: string[];

  /**
   * 是否允许清除
   */
  allowClear?: boolean;

  /**
   * 是否只读，不能选择
   */
  readonly?: boolean;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 描述信息，每一个描述对应一个星。如果一颗星都没有，则显示第一个描述。
   *
   * 如果配置了 description 但是和 count 或者 character 长度不一致的情况下会导致 description 不展示
   */
  description?: ReactNode[];

  children?: ReactNode;

  /**
   * 选择时的回调
   */
  onChange?: (value: number) => void;

  /**
   * 是否单选展现形式
   * @default false
   */
  single?: boolean;

  /**
   * 是否显示默认背景效果
   * @default false
   */
  background?: boolean;
  /**
   * 每一项的尺寸
   * @default {width: 48, hegiht: 48}
   */
  size?: CharacterSize;

  /**
   * 是否启用容器宽度自动计算每项宽度
   * 注意：确保横向是展开
   * @default false
   */
  useContainerWidth?: boolean;
}
