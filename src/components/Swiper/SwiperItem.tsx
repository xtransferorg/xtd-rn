import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import type { SwiperItemProps } from './interface';

const SwiperItem = (props: SwiperItemProps) => {
  const { children, style, testID, accessibilityLabel, ...rest } = props;
  return (
    <TouchableWithoutFeedback {...rest}>
      <View
        style={style}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SwiperItem;
