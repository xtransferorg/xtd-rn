import React, { FC, ReactNode } from 'react';
import { Animated, View, TouchableWithoutFeedback } from 'react-native';

const ViewAnimated = Animated.createAnimatedComponent(View);

export interface PressableAnimatedProps {
  onPress?: () => void;
  style?: any;
  children?: ReactNode;
}

const PressableAnimated: FC<PressableAnimatedProps> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <ViewAnimated style={props.style}>{props.children}</ViewAnimated>
    </TouchableWithoutFeedback>
  );
};

export default PressableAnimated;
