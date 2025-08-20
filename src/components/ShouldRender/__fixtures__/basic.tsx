import { View, Text } from 'react-native';
import React from 'react';
import ShouldRender from '../ShouldRender';

export default () => {
  return (
    <View>
      <ShouldRender condition={true}>
        <Text>This text should render because the condition is true.</Text>
      </ShouldRender>

      <ShouldRender condition={false}>
        <Text>This text should NOT render because the condition is false.</Text>
      </ShouldRender>

      <ShouldRender condition={Math.random() > 0.5}>
        <Text>This text renders conditionally based on a random value.</Text>
      </ShouldRender>
    </View>
  );
};
