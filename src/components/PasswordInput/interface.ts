import { InputProps } from '../Input/interface';

export interface PasswordInputProps extends InputProps {
  /**
   * 是否显示眼睛控制按钮
   */
  showSecureControl?: boolean;
  /**
   * 安全输入框的状态
   */
  secureTextEntry?: boolean;
  /**
   * 默认是否显示密码输入框
   */
  defaultSecureTextEntry?: boolean;
  /**
   * 眼睛控制按钮的大小
   */
  eyeSize?: number;
  /**
   * 眼睛控制按钮的颜色
   */
  eyeColor?: string;
  /**
   * 眼睛样式
   */
  eyeStyle?: React.CSSProperties;
  /**
   * 状态（安全）变化时的回调
   */
  onChangeSecureTextEntry?: (secure: boolean) => void;
}
