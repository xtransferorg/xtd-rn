import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  memo,
  useMemo,
} from 'react';
import type { LayoutChangeEvent, ViewStyle } from 'react-native';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconMASuccess2, IconMAFail2 } from '../../icons/index';
import { ShouldRender } from '@xrnjs/ui';
import { renderTextLikeJSX } from '../../core/helpers';
import { isNumber, isArray } from 'lodash';
import { usePersistFn } from '../../utils';
import { validProgress, isObject } from './utils';
import { ProgressProps, LineGradientColor, ViewLayout } from './interface';
import createStyle from './styles/line.style';
import { useTheme } from '../Theme/Theme';

const LineProgress: React.FC<ProgressProps> = ({
  progressStyle,
  percent = 0,

  format,
  status = 'normal',

  strokeColor = undefined,
  trailColor = undefined,

  size = 'default',

  pivotText,
  showInfo = true,
  percentPosition = 'right',

  children,

  animated = false,
  animationDuration = 200,
  onAnimationEnd,
}) => {
  const token = useTheme();
  const styles = createStyle(token);

  const { strokeWidth, strokeHeight } = useMemo(() => {
    let progressWidth;
    let progressHeight = 8;
    if (isObject(size)) {
      progressWidth = (size as ViewLayout)?.width;
      progressHeight = (size as ViewLayout)?.height || 8;
    }
    if (size === 'small') {
      progressWidth = 200;
      progressHeight = 6;
    }

    if (isNumber(size)) {
      progressWidth = size;
    }
    if (isArray(size)) {
      [progressWidth, progressHeight] = size;
    }

    return {
      strokeWidth: progressWidth,
      strokeHeight: progressHeight,
    };
  }, [size]);

  const AnimatedValue = useRef(new Animated.Value(0)).current;
  const validPercent = useMemo(() => validProgress(percent), [percent]);

  const onAnimationEndPersistFn = usePersistFn((n: number) => {
    onAnimationEnd?.(n);
  });

  const borderRadius = token['--line-height-5'];

  const isLinearGradient = strokeColor && typeof strokeColor !== 'string';

  const [progressLayout, setProgressLayout] = useState<ViewLayout>({
    width: 0,
    height: 0,
  });

  const { barInfo, barColor } = useMemo(() => {
    const progressInfoStyle = StyleSheet.flatten([
      percentPosition === 'top' && { marginBottom: token['--spacing-2'] },
      percentPosition === 'right' && { marginLeft: token['--spacing-2'] },
      percentPosition === 'bottom' && { marginTop: token['--spacing-2'] },
      percentPosition === 'left' && { marginRight: token['--spacing-2'] },
    ]);

    const firstText = renderTextLikeJSX(pivotText, styles.pivot, {
      numberOfLines: 1,
    });
    let secondText = renderTextLikeJSX(`${validPercent}%`, styles.pivot, {
      numberOfLines: 1,
    });
    if (status === 'success' && validPercent >= 100) {
      secondText = <IconMASuccess2 size={20} />;
    }
    if (status === 'exception') {
      secondText = <IconMAFail2 size={20} />;
    }

    const realPivotText = firstText || secondText;

    const formatText = format
      ? format(validPercent, realPivotText)
      : realPivotText;

    let color: string = token['--color-primary-6'];
    if (status === 'success' && validPercent >= 100) {
      color = token['--color-success-7'];
    }
    if (status === 'exception') {
      color = token['--color-danger-7'];
    }

    return {
      barInfo: (
        <ShouldRender condition={showInfo}>
          <View
            style={StyleSheet.flatten([
              progressInfoStyle,
              ['top', 'bottom'].includes(percentPosition) && { width: '100%' },
            ])}
          >
            {children || formatText}
          </View>
        </ShouldRender>
      ),
      barColor: strokeColor || color,
    };
  }, [showInfo, validPercent, status, format, strokeColor]);

  useEffect(() => {
    const action = Animated.timing(AnimatedValue, {
      toValue: (progressLayout.width * validPercent) / 100,
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
    AnimatedValue,
    validPercent,
    animationDuration,
    progressLayout.width,
    animated,
    onAnimationEndPersistFn,
  ]);

  const strokeStyle: ViewStyle = {
    height: strokeHeight,
    backgroundColor: trailColor || token['--color-fill-2'],
    borderRadius: borderRadius,
  };

  const barStyle: ViewStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: AnimatedValue as unknown as number,
    height: strokeHeight,
    borderRadius: borderRadius,
    backgroundColor: barColor as string,
  };

  const onLayoutProgress = useCallback(
    ({ nativeEvent }: LayoutChangeEvent) => {
      const { layout } = nativeEvent;
      // 没有设置进度条宽高时，使用容器的宽高
      const progressWidth = strokeWidth || layout.width;
      const progressHeight = strokeHeight || layout.height;

      AnimatedValue.setValue((progressWidth * validPercent) / 100);
      setProgressLayout({ width: progressWidth, height: progressHeight });
    },
    [AnimatedValue, strokeWidth, strokeHeight, validPercent]
  );

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        { width: strokeWidth || '100%' },
        percentPosition === 'top' && styles.top,
        percentPosition === 'right' && styles.right,
        percentPosition === 'bottom' && styles.bottom,
        percentPosition === 'left' && styles.left,
        progressStyle,
      ])}
    >
      <View
        style={StyleSheet.flatten([
          strokeStyle,
          ['top', 'bottom'].includes(percentPosition) && { width: '100%' },
          ['left', 'right'].includes(percentPosition) && { flex: 1 },
        ])}
        onLayout={onLayoutProgress}
      >
        <Animated.View style={barStyle}>
          <ShouldRender condition={!!isLinearGradient}>
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              colors={strokeColor as LineGradientColor}
              style={[styles.gradient, { borderRadius: borderRadius }]}
            />
          </ShouldRender>
        </Animated.View>
      </View>
      {barInfo}
    </View>
  );
};

export default memo(LineProgress);
