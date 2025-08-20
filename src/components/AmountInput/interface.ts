import {
  StyleProp,
  ViewStyle,
  ImageStyle,
  ImageProps,
  TextStyle,
} from 'react-native';
import { UriProps } from 'react-native-svg';
import { SelectProps, Option, Group } from '../Select/interface';
import { InputProps } from '@xrnjs/ui';

export interface AmountInputProps {
  /**
   * 输入金额回调
   */
  onChange?: (value: Values) => void;

  /**
   * 选择货币类型回调
   */
  onChangeSelect?: (value: string) => void;

  /**
   * 选择全部余额的回调
   */
  onSelectAll?: (value: string) => void;

  /**
   * 格式化金额
   */
  formatBalance?: (balance: string) => string;

  /**
   * 控制币种选择界面显示与隐藏
   */
  selectVisible?: boolean;

  /**
   * 币种选择界面显示与隐藏的回调
   */
  onSelectVisibleChange?: (visible: boolean) => void;

  /**
   * 格式化金额
   */
  value?: Values;
  /**
   * 显示选择货币类型
   */
  showSelectCurrency?: boolean;
  /**
   * 选项 同Select
   */
  options: Option[] | Group[];
  /**
   * @deprecated 已废弃
   * 默认货币类型，不传的话，默认为CNY
   */
  defaultCurrency?: string;
  /**
   * 是否显示可用余额
   */
  showBalance?: boolean;
  /**
   * @deprecated 已废弃
   * 可用余额
   */
  availableBalance?: string;
  /**
   * 显示出售全部
   */
  showSellAll?: boolean;
  /**
   * 全部文案
   */
  allText?: string;

  /**
   * Input 的属性，属性会直接覆盖而不是合并
   */
  inputProps?: InputProps;

  /**
   * Select 的属性，属性会直接覆盖而不是合并
   */
  selectProps?: Partial<SelectProps>;

  /**
   * 标题
   */
  selectTitle?: string;

  /**
   * 是否可点击
   */
  disabled?: boolean;

  /**
   * 显示placeholder
   */
  placeholder?: string;

  /**
   * Input 前后缀，主要用户调整回显图标&文字大小样式，以适应特殊场景需求
   */
  currencyInputProps?: {
    /**
     * 图片容器样式
     */
    imageStyle?: StyleProp<ViewStyle | ImageStyle>;
    /**
     * 图片 Props 针对自定义图标元素
     */
    imageProps?: Partial<UriProps | ImageProps>;
    /**
     * 文字样式
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * 提示文字样式
     */
    placeholdStyle?: StyleProp<TextStyle>;
    /**
     * 箭头图标 Props
     */
    arrowProps?: {
      /**
       * 颜色
       */
      color?: string;
      /**
       * 大小
       */
      size?: string | number;
      /**
       * 填充色
       */
      fillColor?: string;
    };
  };

  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 自定义底部文案
   */
  availableBalanceText?: string;
  /**
   * 自定义底部文案和数值分割
   * @default ：
   */
  availableBalanceColon?: string;
  /**
   * select显示位置
   * @default prefix
   */
  selectPosition?: 'prefix' | 'suffix';

  /**
   * 切换select选项自动清空数值
   * @default true
   */
  autoClear?: boolean;
  /**
   * 格式化保留的小数位的问题
   * @default 2
   * @deprecated 请用 precision 替代
   */
  decimalNum?: number;

  /**
   * 小数点精度
   * @default 2
   */
  precision?: number;
}

export interface Values {
  amount?: string;
  currency?: string;
  canUseAmount?: number;
}

export { Option, Group };
