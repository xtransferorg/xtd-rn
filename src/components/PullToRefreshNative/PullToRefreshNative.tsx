import React, { useCallback, useRef } from 'react';
import { Text, View } from 'react-native';
import {
  PullToRefresh as APullToRefresh,
  PullToRefreshHeader,
} from '@sdcx/pull-to-refresh';
import { PullToRefreshProps } from './interface';
import { isNil } from 'lodash';
import LottieView from 'lottie-react-native';
import ShouldRender from '../ShouldRender';
import AnimationSource from './PullingLoadingAnimation.json';
import styleCreator from './styles/pullToRefresh.style';

const DEFAULT_HEADER_HEIGHT = 166 / 2;

/**
 * 原生下拉刷新组件，支持自定义头部和尾部
 *
 * 需要更新 APP 原生包才能使用，使用前请确认原生包已经更新
 */
const PullToRefreshNative = ({
  style,
  children,
  refreshing,
  lottieProps,
  headerHeight = DEFAULT_HEADER_HEIGHT,
  headerComponent,
  text,
  textStyle,
  headerStyle,
  onRefresh: outOnRefresh,
}: PullToRefreshProps) => {
  const styles = styleCreator(headerHeight);
  const animationRef = useRef<LottieView>(null);
  const textStyleFinal = Object.assign({ ...styles.text }, textStyle);
  const onRefresh = useCallback(async () => {
    animationRef.current?.play();
    try {
      await outOnRefresh?.();
    } finally {
      animationRef.current?.pause();
    }
  }, [outOnRefresh]);

  return (
    <APullToRefresh
      style={style}
      header={
        <PullToRefreshHeader refreshing={refreshing} onRefresh={onRefresh}>
          <View style={[styles.headerContainer, headerStyle]}>
            <ShouldRender condition={!!headerComponent}>
              {headerComponent}
            </ShouldRender>
            <ShouldRender condition={!headerComponent}>
              <View>
                <LottieView
                  {...(lottieProps || {})}
                  style={styles.loading}
                  ref={animationRef}
                  source={lottieProps?.source || AnimationSource}
                  autoPlay={lottieProps?.autoPlay ?? false}
                  loop={lottieProps?.loop ?? true}
                />
              </View>
              <ShouldRender condition={!isNil(text)}>
                <Text
                  style={textStyleFinal}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {text}
                </Text>
              </ShouldRender>
            </ShouldRender>
          </View>
        </PullToRefreshHeader>
      }
    >
      {children}
    </APullToRefresh>
  );
};
export default PullToRefreshNative;
