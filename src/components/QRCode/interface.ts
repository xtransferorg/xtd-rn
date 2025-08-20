import { ReactElement } from 'react';
import { QRCodeStatusEnum } from './QRCodeStatus';
import type { QRCodeProps as QRCodeOriginProps } from 'react-native-qrcode-svg';

export interface StatusRenderInfo {
  status: keyof typeof QRCodeStatusEnum;
  onRefresh?: () => void;
}

export interface SVGInstance {
  toDataURL: (callback: (dataURL: string) => void) => void;
}
export interface QRCodeSaveProps {
  cancelText: string; // 取消按钮文案
  actionText: string; // 保存按钮文案
  saveScucessText: string; // 保存成功提示文案
  permissionFailedText: string; // 权限获取失败提示文案
}
export interface QRCodeProps extends QRCodeOriginProps {
  testID?: string;
  /**
   * 二维码状态
   */
  status?: keyof typeof QRCodeStatusEnum;
  /**
   * 自定义渲染状态
   * @param info
   * @returns
   */
  statusRender?: (info: StatusRenderInfo) => ReactElement;
  /**
   * 纠错登记
   */
  errorLevel?: 'L' | 'M' | 'Q' | 'H';
  /**
   * 是否显示边框
   */
  bordered?: boolean;
  /**
   * 是否显示阴影
   */
  shadow?: boolean;
  /**
   * 是否显示扫描成功提示
   */
  loadingText?: string;
  /**
   * 扫描成功文案
   */
  scanSuccessText?: string;
  /**
   * 二维码过期文案
   */
  expiredText?: string;
  /**
   * 刷新二维码文案
   */
  refreshText?: string;
  /**
   * 保存二维码配置
   */
  saveActionProps?: QRCodeSaveProps;
  /**
   * 自定义刷新事件
   */
  onRefresh?: () => void;
  /**
   * 自定义保存事件
   */
  onSave?: (instance: SVGInstance) => void;
}
