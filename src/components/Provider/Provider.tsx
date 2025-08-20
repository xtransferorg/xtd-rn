import React, { FC } from 'react';

import { Provider } from '../../core';
import type { ProviderProps } from '../../core';
import { ThemeProvider } from '../Theme';
import { THEME_TOKEN, Token } from '../Theme/constant';
import { merge } from 'lodash';

export interface RNProviderProps extends Omit<ProviderProps, 'theme'> {
  /**
   * 多主题配置
   */
  theme?: Partial<Token>;
}

const RNProvider: FC<RNProviderProps> = ({ theme, ...props }) => {
  const t = merge({}, THEME_TOKEN, theme);
  return (
    <ThemeProvider theme={t}>
      <Provider theme={t} {...props} />
    </ThemeProvider>
  );
};

export default RNProvider;
