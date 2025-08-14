import React from 'react';
import { View, Text } from 'react-native';

import { BottomSafeArea } from '@xrnjs/ui';

const BasicBottomSafeArea = () => {
  return (
    <View>
      <View style={{ backgroundColor: 'pink' }}>
        <Text>aaa</Text>
      </View>
      <BottomSafeArea />
    </View>
  );
};

export default BasicBottomSafeArea;
