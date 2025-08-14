import { ReactNode, ReactElement } from 'react';
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  SectionListProps,
} from 'react-native';
import {
  PopupHeaderProps,
  PopupProps,
  InputProps,
  ErrorBlockProps,
} from '@xrnjs/ui';

export type IndexBarValue = string | string[];

export interface IndexBarBaseData {
  /**
   * 列表选项的value
   */
  value: string;
  /**
   * 标题
   */
  label: ReactNode;
  /**
   * 标题前面的icon
   */
  prefix?: ReactElement;
  /**
   * 描述
   */
  description?: ReactNode;
}

export interface IndexBarGroupItem<
  Data extends IndexBarBaseData = IndexBarBaseData
> {
  /**
   * IndexBarGroup对应的唯一索引
   */
  value?: string;
  /**
   * IndexBarGroup对应的标题
   */
  label?: ReactNode;
  /**
   * IndexBarGroup中要渲染的列表数据
   */
  data: readonly Data[];
}

export interface IndexBarProps<Data extends IndexBarBaseData = IndexBarBaseData>
  extends PopupProps {
  /**
   * 用于端到端测试时定位元素
   */
  testID?: string | undefined;

  /**
   * IndexBar弹出层头部属性集合
   */
  headerProps?: PopupHeaderProps;

  /**
   * IndexBar弹出层列表部分属性集合
   */
  listProps?: SectionListProps<Data>;

  /**
   * 自定义IndexBar容器样式
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * 自定义IndexBar容器高度
   */
  containerHeight?: number;

  /**
   * 自定义SideBar样式
   */
  sideBarStyle?: StyleProp<ViewStyle>;

  /**
   * 列表标题样式
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * 列表描述样式
   */
  descriptionStyle?: StyleProp<TextStyle>;

  /**
   * 列表数据为空时，自定义空组件
   */
  emptyProps?: ErrorBlockProps;

  /**
   * 列表描述位置
   * @default bottom
   */
  descPlacement?: 'right' | 'bottom';

  /**
   * 设置IndexBar的模式为多选还是单选
   * @default single
   */
  mode?: 'multiple' | 'single';

  /**
   * 是否支持筛选列表
   * @default true
   */
  showSearch?: boolean;

  /**
   * 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。
   * @param inputValue 输入框的值
   * @param option 当前遍历的选项
   * @returns 是否符合筛选条件
   */
  filterOption?: (value: string, option: Data) => boolean;

  /**
   * 列表描述样式
   */
  searchProps?: InputProps;

  /**
   * 是否开启侧边栏功能
   * @default false
   */
  disableSidebar?: boolean;

  /**
   * 是否展示列表分割线
   * @default false
   */
  showLine?: boolean;
  /**
   * 自定义分割线样式
   */
  lineStyle?: StyleProp<ViewStyle>;
  /**
   * 索引栏内容
   */
  groups?: IndexBarGroupItem<Data>[];

  /**
   * 热门选项标题
   */
  hotSectionTitle?: ReactNode;

  /**
   * 热门选项配置
   */
  hotGroups?: Data[];

  /**
   * 热门选项行数
   * @default 1
   */
  hotRowNumber?: number;

  /**
   * 自定义内容的渲染
   */
  children?: ReactNode;

  /**
   * IndexBar列表选中项的最大数量
   */
  max?: number;

  /**
   * IndexBar列表选中项的值
   */
  value?: IndexBarValue;

  /**
   * 内容项的点击事件
   */
  onChange?: (
    value: IndexBarValue,
    index?: number,
    section?: IndexBarGroupItem<Data>
  ) => void;

  /**
   * 选中项是否需要回显
   * @default true
   */
  showFooterValue?: boolean;
  /**
   * 选中项回显区域的样式
   */
  valueStyle?: StyleProp<ViewStyle>;

  /**
   * 自定义底部内容
   */
  footer?: ReactNode;
  /**
   * 底部容器样式
   */
  footerStyle?: StyleProp<ViewStyle>;
  /**
   * 底部是否显示分割线
   * @default false
   */
  splitLine?: boolean;
  /**
   * 不可操作点击回调
   */
  onDisabledPress?: (value: IndexBarBaseData) => void;
}

export interface IndexBarRef {
  /**
   * 重置IndexBar的值
   */
  reset: () => void;
  /**
   * 关闭IndexBar,清空选中项
   */
  clear: () => void;
}
