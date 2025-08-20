import React, { useRef, useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Dimensions,
  Easing,
  StyleProp,
  ViewStyle,
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: 6,
    backgroundColor: '#F56A00',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    flex: 1,
  },
});

export interface ProgressProps {
  /**
   * 进度条长度
   */
  width?: number;
  /**
   * 进度条颜色
   * @default '#EBEBF0'
   */
  color?: string;
  /**
   * 容器样式
   */
  style?: StyleProp<ViewStyle>;
}

export const ProgressBar = (props: ProgressProps) => {
  const { style, width, color = '#EBEBF0' } = props;
  const progressValue = useRef(new Animated.Value(0)).current;
  const endWidth = width || ScreenWidth;

  const scaleAnim = progressValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, endWidth], // 这里设置最终的宽度为100%
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(progressValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    ).start();
  }, [progressValue]);

  const progressStyle = {
    height: 6,
    transform: [
      {
        translateX: scaleAnim,
      },
    ],
    borderRadius: 0,
    backgroundColor: color || '#EBEBF0',
  };

  return (
    <View
      style={StyleSheet.flatten([styles.container, { width: endWidth }, style])}
    >
      <Animated.View style={[styles.progressBar, progressStyle]} />
    </View>
  );
};
