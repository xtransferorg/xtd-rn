import { ReactNode, ComponentType } from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { PopupProps } from '../../core/popup/interface';
import { TextButtonProps } from './interface';
import { Fill } from '../Button/enum';

export type StatusType = 'info' | 'warning' | 'error' | 'success';
export interface ModalProps extends PopupProps {
  /**
   * 状态对话框的状态
   */
  status?: StatusType;
  /**
   * 状态对话框状态样式
   */
  statusStyle?: StyleProp<ViewStyle>;
  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 自定义内容
   */
  content?: ReactNode;

  /**
   * 内容样式
   */
  contentStyle?: StyleProp<ViewStyle>;

  /**
   * 标题
   */
  title?: ReactNode;

  /**
   * 标题样式
   */
  titleStyle?: StyleProp<ViewStyle>;

  /**
   * 文本内容，支持通过\n换行
   */
  message?: ReactNode;

  /**
   * 文本样式
   */
  messageStyle?: StyleProp<ViewStyle & TextStyle>;

  /**
   * 文本内容，支持通过\n换行
   */
  extraNode?: ReactNode;

  /**
   * 文本样式
   */
  extraNodeStyle?: StyleProp<ViewStyle>;

  /**
   * 自定义footer，设置为null时不显示footer
   */
  footer?: ReactNode | null;

  /**
   * 弹窗宽度
   * @default 320
   */
  width?: number | string;

  /**
   * 是否展示确认按钮
   * @default true
   */
  showConfirmButton?: boolean;

  /**
   * 是否展示取消按钮
   * @default false
   */
  showCancelButton?: boolean;

  /**
   * 确认按钮文字
   * @default 确定
   */
  confirmButtonText?: string;

  /**
   * 确认按钮loading
   * @default false
   */
  confirmButtonLoading?: boolean;

  /**
   * 确认按钮属性
   */
  confirmButtonProps?: TextButtonProps & { fill?: Fill };

  /**
   * 取消按钮文字
   * @default 取消
   */
  cancelButtonText?: string;

  /**
   * 取消按钮loading
   * @default false
   */
  cancelButtonLoading?: boolean;

  /**
   * 取消按钮属性
   */
  cancelButtonProps?: TextButtonProps & { fill?: Fill };

  /**
   * 点击取消
   */
  onPressCancel?: () => void;

  /**
   * 点击确定
   */
  onPressConfirm?: () => void;

  /**
   * 操作按钮列表
   */
  actions?: (TextButtonProps & { key: string })[];

  /**
   * 图片
   */
  imgSource?: ImageSourcePropType;

  /**
   * 图片尺寸
   * @default middle
   */
  imgSize?: 'small' | 'middle' | 'large';

  /**
   * 是否取消图文弹窗按钮样式
   * @default false
   */
  solidButton?: boolean;

  /**
   * 图文按钮展示类型，仅在图文按钮下生效
   * @default row
   */
  buttonsDirection?: 'row' | 'column';

  /**
   * 关闭图标
   */
  closeIcon?: ReactNode;

  /**
   * 营销弹窗高度（根据宽高比 3:4计算）
   */
  marketingHeight?: boolean;
  /**
   * 是否营销弹窗
   */
  isMarketingModal?: boolean;

  /**
   * 是否显示关闭按钮
   */
  showClose?: boolean;

  /**
   * 点击关闭按钮事件
   */
  onPressClose?: () => void;
}

export type { ModalFooterProps } from './ModalFooter';
export type { TextButtonProps } from './TextButton';
export type { ModalMethodProps } from './ModalInstance';

interface Props {
  color?: string;
  size?: string | number;
  fillColor?: string;
}

export type Icon = ComponentType<Props>;
