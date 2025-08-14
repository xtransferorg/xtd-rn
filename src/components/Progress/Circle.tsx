import React, { useMemo, useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, Easing } from 'react-native';
import Svg, { Circle, G, LinearGradient, Stop, Defs } from 'react-native-svg';
import { ProgressProps } from './interface';
import { usePersistFn } from '../../utils';
import { IconMACheckmark1, IconMACancellation1 } from '../../icons/index';
import { ShouldRender } from '@xrnjs/ui';
import { renderTextLikeJSX } from '../../core/helpers';
import { isNumber, isArray, isString } from 'lodash';
import { validProgress } from './utils';
import createStyle from './styles/circle.style';
import { useTheme } from '../Theme/Theme';

type strokeLinecap = 'butt' | 'square' | 'round';

const defaultWidth = 120;
const defaultHeight = 120;
const defaultStrokeWidth = 6;

const CircleProgress = (props: ProgressProps) => {
  const {
    progressStyle,
    percent = 0,

    format,
    status = 'normal',

    strokeColor = undefined,
    trailColor = undefined,

    size = 'default',

    pivotText,
    showInfo = true,

    children,

    animated = false,
    animationDuration = 200,
    onAnimationEnd,
  } = props;
  const token = useTheme();
  const styles = createStyle(token);

  const validPercent = useMemo(() => validProgress(percent), [percent]);

  const { circleWidth, circleHeight, strokeWidth, circleColor, circleInfo } =
    useMemo(() => {
      let progressWidth = defaultWidth;
      let progressHeight = defaultHeight;
      let borderWidth = defaultStrokeWidth;

      if (size === 'small') {
        progressWidth = defaultWidth / 2;
        progressHeight = defaultHeight / 2;
        borderWidth = defaultStrokeWidth / 2;
      }

      if (isNumber(size)) {
        progressWidth = size;
        progressHeight = size;
      }

      if (isArray(size)) {
        progressWidth = (size?.[0] ?? defaultWidth) as number;
        progressHeight = (size?.[0] ?? defaultHeight) as number;
        borderWidth = (size?.[1] ?? defaultStrokeWidth) as number;
      }

      const firstText = renderTextLikeJSX(pivotText, styles.pivot, {
        numberOfLines: 1,
      });
      let secondText = renderTextLikeJSX(`${validPercent}%`, styles.pivot, {
        numberOfLines: 1,
      });

      let color: string = token['--color-primary-6'];
      if (status === 'success' && validPercent >= 100) {
        color = token['--color-success-7'];
        secondText = (
          <IconMACheckmark1
            size={progressWidth / 2}
            fillColor={token['--color-success-7']}
          />
        );
      }
      if (status === 'exception') {
        color = token['--color-danger-7'];
        secondText = (
          <IconMACancellation1
            size={progressWidth / 2}
            fillColor={token['--color-danger-7']}
          />
        );
      }

      const realPivotText = firstText || secondText;

      const formatText = format
        ? format(validPercent, realPivotText)
        : realPivotText;

      return {
        // 圆环宽
        circleWidth: progressWidth,
        // 圆环高
        circleHeight: progressHeight,
        // 圆形进度条宽度
        strokeWidth: borderWidth,
        // 圆形进度条颜色
        circleColor: strokeColor || color,
        // 圆形进度条中间的文案
        circleInfo: (
          <ShouldRender condition={showInfo}>
            <View
              style={StyleSheet.flatten([
                {
                  width: progressWidth / 2,
                  height: progressWidth / 2,
                  top: progressWidth / 4,
                  left: progressWidth / 4,
                },
                styles.circleInfo,
              ])}
            >
              {children || formatText}
            </View>
          </ShouldRender>
        ),
      };
    }, [validPercent, size, status, showInfo, format]);

  const radius = circleWidth / 2; // 外层半径
  const innerRadius = radius - strokeWidth; // 内层半径
  const circumference = 2 * radius * Math.PI; // 总周长

  const progress = useRef(new Animated.Value(0.5)).current;
  const radian = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [2 * Math.PI, 0.23 * Math.PI],
  });
  const circumferenceWithProgress = Animated.multiply(radius, radian);
  const AnimatedCircleProgress = Animated.createAnimatedComponent(Circle);

  // 圆环背景色，支持单色和多颜色组成的渐变色
  const linearGradientColors = isArray(circleColor)
    ? circleColor.map((i, j) => ({
        stop: `${(((j + 1) / circleColor.length) * 100).toFixed(2) + '%'}`,
        color: i as string,
      }))
    : [];
  const outerCircleCommonConfig = {
    fill: 'none',
    cx: radius,
    cy: radius,
    r: innerRadius,
    strokeLinecap: 'round' as strokeLinecap,
    strokeWidth: strokeWidth,
    strokeDasharray: `${circumference}  ${circumference}`,
  };

  const onAnimationEndPersistFn = usePersistFn((n: number) => {
    onAnimationEnd?.(n);
  });

  useEffect(() => {
    const action = Animated.timing(progress, {
      toValue: validPercent / 100,
      duration: animated ? animationDuration : 0,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    action.start(({ finished }) => {
      if (finished) {
        onAnimationEndPersistFn(validPercent);
      }
    });

    return () => {
      action.stop();
    };
  }, [
    progress,
    validPercent,
    animationDuration,
    animated,
    onAnimationEndPersistFn,
  ]);

  return (
    <View style={StyleSheet.flatten([styles.container, progressStyle])}>
      <Svg width={circleWidth} height={circleHeight}>
        <Defs>
          <LinearGradient x1="100%" y1="100%" x2="0%" y2="0%" id="gradient">
            {linearGradientColors.map((item, index) => (
              <Stop key={index} offset={item.stop} stopColor={item.color} />
            ))}
          </LinearGradient>
        </Defs>
        <G origin={`${radius}, ${radius}`} rotation={-90}>
          <Circle
            stroke={trailColor || token['--color-fill-2']}
            {...outerCircleCommonConfig}
          />
          <AnimatedCircleProgress
            stroke={isString(circleColor) ? circleColor : 'url(#gradient)'}
            {...outerCircleCommonConfig}
            strokeDashoffset={circumferenceWithProgress}
          />
        </G>
      </Svg>
      {circleInfo}
    </View>
  );
};

export default CircleProgress;
