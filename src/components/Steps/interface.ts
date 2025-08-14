import { ReactNode } from 'react';
import { StyleProp, TextProps, ViewStyle } from 'react-native';

export interface StepProps {
  /**
   *自定义节点icon
   */
  dot?: ReactNode;
  /**
   * 标题
   */
  title?: ReactNode;
  /**
   * 描述
   */
  description?: ReactNode;
  /**
   * 描述
   */
  descriptionProps?: TextProps;
  /**
   * 时间
   */
  time?: ReactNode;
  /**
   * 步骤状态 wait|finish
   */
  status?: 'wait' | 'process' | 'finish';
  /**
   * 索引
   */
  index?: number;
}

export interface StepsProps {
  /**
   * 指定当前步骤，从0开始记数
   * @default -1
   */
  current?: number;
  /**
   * 步骤数据
   */
  data: StepProps[];

  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 指定步骤条方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * 是否收起，direction为horizontal有效
   * @default false
   */
  collapse?: boolean;

  /**
   * 从下往上，direction为vertical有效
   * @default false
   */
  reverse?: boolean;
}
