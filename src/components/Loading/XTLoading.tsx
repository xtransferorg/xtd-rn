import React, { memo, useRef, useEffect, useCallback } from 'react';
import { Animated, Easing } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const AnimateCircle = Animated.createAnimatedComponent(Circle);
const AnimateSvg = Animated.createAnimatedComponent(Svg);
const DURATION = 1400;

const XTLoading = ({ color, size }: { color?: string; size?: number }) => {
  const strokeDash = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const startRotation = useCallback(() => {
    Animated.loop(
      Animated.timing(strokeDash, {
        toValue: 100,
        duration: DURATION,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      })
    ).start();

    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  useEffect(() => {
    startRotation();
  }, []);

  return (
    <Animated.View
      collapsable={false}
      style={{
        transform: [
          {
            rotate: rotate.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '270deg'],
            }),
          },
        ],
      }}
    >
      <AnimateSvg
        viewBox="0 0 66 66"
        width={size || 20}
        height={size || 20}
        style={{
          transform: [
            {
              rotate: strokeDash.interpolate({
                inputRange: [0, 50, 100],
                outputRange: ['0deg', '135deg', '450deg'],
              }),
            },
          ],
        }}
      >
        <AnimateCircle
          cx="33"
          cy="33"
          r="30"
          fill="none"
          stroke={color || '#666666'}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={200}
          strokeDashoffset={strokeDash.interpolate({
            inputRange: [0, 50, 100],
            outputRange: [187, 46.75, 187],
          })}
        />
      </AnimateSvg>
    </Animated.View>
  );
};

export default memo(XTLoading);
