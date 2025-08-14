import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import {
  View,
  Animated,
  Text,
  Platform,
  Easing,
  StyleSheet,
} from 'react-native';
import type {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  TextLayoutEventData,
} from 'react-native';
import type { MarqueeProps, NoticeBarInstance } from './interface';
import { isNumber } from 'lodash';
import styles from './styles/marquee.style';
import ShouldRender from '../ShouldRender';
import { PlatformOS } from '../../utils';

const isWeb = Platform.OS === 'web';

const Marquee = forwardRef<NoticeBarInstance, MarqueeProps>((props, ref) => {
  const {
    scrollable,
    speed = 60,
    delay = 1000,
    style,
    text,
    wrapable,
    numberOfLines,
    renderOverFlow,
    onReplay,
  } = props;

  const translateX = useRef(new Animated.Value(0)).current;
  const wrapWidth = useRef(0);
  const contentWidth = useRef(0);
  const [inNumberOfLines, setNumberOfLines] = useState(
    PlatformOS.isIos || PlatformOS.isHarmony ? 0 : numberOfLines
  );
  const [isOverflow, setOverflow] = useState(false);

  const startTimer = useRef<NodeJS.Timeout | null>(null);
  const translateAnimated = useRef<Animated.CompositeAnimation>();

  const handleTextLayout = (event: LayoutChangeEvent) => {
    contentWidth.current = event.nativeEvent.layout.width;
  };

  const handleContainerLayout = (event: LayoutChangeEvent) => {
    wrapWidth.current = event.nativeEvent.layout.width;
  };

  const tryStart = () => {
    if (!wrapable && scrollable && contentWidth.current > wrapWidth.current) {
      startMove();
    }
  };

  const startMove = () => {
    const duration = (contentWidth.current / speed) * 1000;
    translateAnimated.current = Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: -contentWidth.current,
          duration,
          easing: Easing.linear,
          useNativeDriver: !isWeb,
        }),
        Animated.timing(translateX, {
          toValue: wrapWidth.current,
          duration: 0,
          easing: Easing.linear,
          useNativeDriver: !isWeb,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration,
          easing: Easing.linear,
          useNativeDriver: !isWeb,
        }),
      ])
    );

    translateAnimated.current.start(() => {
      onReplay?.();
    });
  };

  const reset = () => {
    startTimer.current && clearTimeout(startTimer.current);

    startTimer.current = setTimeout(() => {
      tryStart();
    }, delay ?? 0);
  };

  const onTextLayout = ({
    nativeEvent,
  }: NativeSyntheticEvent<TextLayoutEventData>) => {
    if (isNumber(numberOfLines)) {
      const { lines } = nativeEvent;
      if (PlatformOS.isIos || PlatformOS.isHarmony) {
        setNumberOfLines(numberOfLines);
        if (inNumberOfLines === 0) {
          setOverflow(lines.length > numberOfLines);
        }
      } else {
        setOverflow(lines.length > numberOfLines);
      }
    }
  };

  useEffect(() => {
    reset();
  }, [text, scrollable, wrapable]);

  useImperativeHandle(ref, () => ({ reset }));

  return (
    <View
      style={StyleSheet.flatten([styles.container])}
      onLayout={handleContainerLayout}
    >
      {wrapable ? (
        <Text
          style={style}
          numberOfLines={inNumberOfLines}
          onTextLayout={onTextLayout}
        >
          {text}
        </Text>
      ) : (
        <Animated.View
          style={StyleSheet.flatten([
            styles.contentRow,
            scrollable && styles.scrollableRow,
            { transform: [{ translateX }] },
          ])}
          onLayout={handleTextLayout}
        >
          <Text numberOfLines={1} ellipsizeMode="tail" style={style}>
            {text}
          </Text>
        </Animated.View>
      )}

      <ShouldRender condition={isNumber(numberOfLines)}>
        {renderOverFlow?.(isOverflow)}
      </ShouldRender>
    </View>
  );
});

export default Marquee;
