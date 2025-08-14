import type { LocaleProviderProps } from '../../components/Locale/interface';
import type { ThemeProviderProps } from '../theme/interface';

export interface ProviderProps extends ThemeProviderProps, LocaleProviderProps {
  /**
   * 用来标识portal host, 主要用于后续动态add等操作明确哪个host来处理
   */
  portalTag?: string;
}
