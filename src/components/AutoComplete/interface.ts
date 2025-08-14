import { ReactElement } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { InputProps } from '../Input/interface';

export interface AutoCompleteOption {
  /**
   * 自动补全某一选项的值，必须有值且唯一
   */
  value: string;
  /**
   * 自动补全某一选项显示的内容，不配置值时候显示value
   */
  label?: string | ReactElement;
}

export interface AutoCompleteProps extends InputProps {
  /**
   * 支持清除
   * @default false
   */
  allowClear?: boolean;
  /**
   * 自动获取焦点
   * @default false
   */
  autoFocus?: boolean;
  /**
   * 默认值
   */
  defaultValue?: string;
  /**
   * 当前值(受控)
   */
  value?: string;
  /**
   * 自动补全选项
   */
  options?: AutoCompleteOption[];
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 高亮显示联想的匹配内容（仅内容为字符串支持）
   * @default false
   */
  highlighted?: boolean;
  /**
   * 输入框提示
   */
  placeholder?: string;
  /**
   * 默认是否显示自动补全联想内容
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * 是否显示自动补全联想内容
   */
  open?: boolean;
  /**
   *   input 的 value 变化（包含选中 option导致的变化 value非受控情况）时，调用此函数
   */
  onChange?: (value: string) => void;
  /**
   *  被选中时调用，参数为选中项的 value 值
   */
  onSelect?: (value: string, option: AutoCompleteOption) => void;
  /**
   * 展开和隐藏下拉联想选项的回调
   */
  onVisibleChange?: (open: boolean) => void;
  /**
   * 失去焦点时的回调
   */
  onBlur?: () => void;
  /**
   * 获得焦点时的回调
   */
  onFocus?: () => void;
  /**
   * 清除内容时的回调
   */
  onClear?: () => void;
  /**
   * 外部容器样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 输入框样式
   */
  inputStyle?: StyleProp<ViewStyle>;
  /**
   * 联想列表容器样式 常设置maxHeight，控制显示条数
   */
  optionsStyle?: StyleProp<ViewStyle>;
  /**
   * 联想列表内ScrollView容器样式 一般无需改动
   */
  scrollViewStyle?: StyleProp<ViewStyle>;
  /**
   * 联想列表每一选项的容器样式
   */
  optionStyle?: StyleProp<ViewStyle>;
  /**
   * 联想列表每一选项的展示内容样式
   */
  optionLabelStyle?: StyleProp<TextStyle>;
  /**
   * 自动化测试使用
   */
  testID?: string;

  /**
   * 弹出方向
   */
  placement?: 'top' | 'bottom';

  /**
   * 偏移量
   * @default 0
   */
  offset?: number;
}

export interface AutoCompleteRef {
  /**
   * 失去焦点
   */
  blur: () => void;
  /**
   * 获取焦点
   */
  focus: () => void;
  /**
   * 清空输入内容
   */
  clear: () => void;
}
