import { useState } from 'react';
import { ViewProps } from 'react-native';

export const useMaxLayoutWidth = () => {
  const [maxLayoutWidth, setMaxLayoutWidth] = useState<number>(0);

  const handleLayout: ViewProps['onLayout'] = (event) => {
    const { width } = event.nativeEvent.layout;
    setMaxLayoutWidth(Math.max(width, maxLayoutWidth));
  };

  return { maxLayoutWidth, handleLayout };
};
