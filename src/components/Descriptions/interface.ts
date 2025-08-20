import { ReactNode } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface DescriptionsItem {
  /**
   * 列表项的标题
   */
  title?: ReactNode;
  /**
   * 列表项的内容
   */
  content?: ReactNode;
}

export interface DescriptionsProps {
  /**
   * 内容是否展示边框
   * @default false
   */
  bordered?: boolean;
  /**
   * 头部右边自定义内容
   */
  extra?: ReactNode;
  /**
   * 是否可以展开收起，前提是title需有值或者配置了header
   * @default true
   */
  expanded?: boolean;
  /**
   * 是否展开 受控
   */
  value?: boolean;
  /**
   * 默认是否展开
   */
  defaultValue?: boolean;
  /**
   * 展开收起变化通知
   * @param value 是否展开
   */
  onChange?: (value: boolean) => void;
  /**
   * 描述列表最外层容器的样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 是否水平布局
   * @default false
   */
  horizontal?: boolean;
  /**
   * 描述列表的标题
   */
  title?: ReactNode;
  /**
   * 标题样式 title非element时候生效
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * 描述列表的内容项
   */
  items?: DescriptionsItem[];
  /**
   * 每一项的外层容器样式
   */
  itemStyle?: StyleProp<ViewStyle>;
  /**
   * 描述列表的内容项的标题样式，非element时候生效
   */
  itemTitleStyle?: StyleProp<TextStyle>;
  /**
   * 描述列表的内容项的内容样式，非element时候生效
   */
  itemContentStyle?: StyleProp<TextStyle>;
  /**
   * 内容是否可以长按选择 内容为string时候有效
   * @default false
   */
  selectable?: boolean;
}
