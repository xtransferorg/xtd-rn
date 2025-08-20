import type { InputProps } from '../Input/interface';
export interface OcrPictureOption {
  /**
   * 图片高度
   */
  height: number;
  /**
   * 图片uri
   */
  uri: string;
  /**
   * 图片宽度
   */
  width: number;
  /**
   * 文件大小
   */
  fileSize: number;
  /**
   * 文件类型
   */
  type: string;
}

export enum OcrPictureDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export interface BaseOcrPictureProps {
  /**
   * 头部文案
   */
  tip: string | undefined;

  /**
   * 方向
   */
  direction: OcrPictureDirection;
  /**
   * 超时时间
   */
  timeout?: number;
  /**
   * 业务侧回调函数
   */
  onScan: (option: OcrPictureOption) => Promise<string | undefined>;
  /**
   * 成功回调函数
   * @param result 识别结果
   */
  onSuccess: (result: any) => void;
  /**
   * 错误回调函数
   * @param error 错误信息
   */
  onError: (error: Error) => void;
}

export interface OcrPictureProps extends BaseOcrPictureProps {
  /**
   * 是否显示输入框
   */
  enableInput: boolean;
  /**
   * 输入框的props
   */
  inputProps?: Omit<InputProps, 'suffix'>;
}

export interface OcrPictureRef {
  open: () => void;
  close: () => void;
}

export interface IOcrCameraProps
  extends Omit<OcrPictureProps, 'inputProps' | 'enableInput'> {
  onClose: () => void;
  onLoading: (loading: boolean) => void;
}

export type OcrPictureMethodProps = Omit<
  OcrPictureProps,
  'enableInput' | 'inputProps'
>;

export interface FileInfo {
  fileSize: number;
  type: string;
}
