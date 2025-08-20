import React, { memo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Locale from '../../components/Locale/locale';
import Portal from '../portal';
import Theme from '../theme';

import type { ProviderProps } from './interface';

/**
 * 统一的配置
 * 将来 Portal 准备统一的入口，https://github.com/callstack/react-native-paper/blob/master/src/components/Portal/Portal.tsx
 */
const Provider: React.FC<ProviderProps> = ({
  children,
  theme,
  langType,
  portalTag,
}) => {
  return (
    <SafeAreaProvider>
      <Locale langType={langType}>
        <Theme theme={theme}>
          <Portal.Host tag={portalTag}>{children}</Portal.Host>
        </Theme>
      </Locale>
    </SafeAreaProvider>
  );
};

export default memo(Provider);
