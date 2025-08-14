import React from 'react';

import Portal from '../Portal';
import { FloatingLayerProps } from './interface';
import FloatingLayer from './FloatingLayer';

const floatingKeySet = new Set<number>();

export const close = (key: number) => {
  Portal.remove(key);
  floatingKeySet.delete(key);
};

export const closeAll = () => {
  floatingKeySet.forEach((_key) => {
    Portal.remove(_key);
  });
  floatingKeySet.clear();
};

export const Instance = (options: FloatingLayerProps) => {
  const key = Portal.add(
    <FloatingLayer
      {...options}
      visible={true}
      onPressOverlay={() => {
        options.onPressOverlay?.();
        options.closeOnPressOverlay && close(key);
      }}
    />
  );

  floatingKeySet.add(key);

  return {
    key,
    close: () => {
      close(key);
    },
  };
};
