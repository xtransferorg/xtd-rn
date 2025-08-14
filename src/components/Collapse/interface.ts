import { ReactNode } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface RNCollapseProps {
  /**
   * 是否开启手风琴模式
   * @default false
   */
  accordion?: boolean;

  /**
   * 手风琴模式：string | null
   * 非手风琴模式：string[]
   */
  activeKey?: string | string[] | null;

  /**
   * 自定义箭头
   */
  arrow?: ReactNode | ((active: boolean) => ReactNode);

  /**
   * 默认激活的key
   */
  defaultActiveKey?: RNCollapseProps['activeKey'];

  /**
   * change回调函数
   */
  onChange?: (activeKey: RNCollapseProps['activeKey']) => void;

  /**
   * 子项
   */
  children?: ReactNode;
}

export interface RNCollapseItemProps {
  /** Item样式 */
  style?: ViewStyle;
  /** 头部区域样式 */
  headerStyle?: ViewStyle;
  /** 内容区域样式 */
  contentStyle?: ViewStyle;
  /**
   * 用来确定面板是折叠还是展开状态
   */
  expanded?: boolean;

  /**
   * 展开关闭时回调
   */
  onExpand?: () => void;

  /**
   * 自定义右侧箭头
   */
  arrow?: RNCollapseProps['arrow'];
  /** 箭头区域的样式 */
  arrowStyle?: ViewStyle;

  /**
   * 对应 activeKey
   */
  name: string;

  /**
   * 点击title回调
   */
  onClick?: (event: GestureResponderEvent) => void;

  /**
   * icon
   * @default false
   */
  icon?: boolean | ReactNode;
  /**
   * icon样式
   */
  iconStyle?: StyleProp<ViewStyle>;

  /**
   * title内容
   */
  title?: ReactNode;
  /**
   * title内容样式
   */
  titleStyle?: StyleProp<ViewStyle>;

  /**
   * 描述内容
   */
  description?: ReactNode;

  /**
   * 子项
   */
  children?: ReactNode;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 箭头放置在下方
   */
  arrowPlaceDown?: boolean;

  /**
   * 自定义 '展开' 文案
   */
  expandArrowTip?: ReactNode;

  /**
   * 自定义 '收起' 文案
   */
  collapseArrowTip?: ReactNode;

  /**
   * 隐藏'展开'/'收起' 文案
   * @default false
   */
  hideArrowTip?: boolean;

  /**
   * '展开'/'收起' 文案样式
   */
  arrowTipStyle?: StyleProp<TextStyle>;

  /**
   * 隐藏箭头
   * @default false
   */
  hideArrow?: boolean;

  /**
   * 不显示border
   */
  noBorder?: boolean;

  /**
   * 常驻节点，不随折叠展开而变化
   */
  permanentNode?: ReactNode;
}
