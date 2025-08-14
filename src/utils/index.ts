import {
  Dimensions,
  Keyboard,
  KeyboardEventListener,
  LayoutChangeEvent,
  LayoutRectangle,
  Platform,
} from 'react-native';
import { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const os: string = Platform.OS;

/**
 * 各平台信息&适配 （目前只有iOS、Android、Harmony）
 */
export const PlatformOS = {
  isHarmony: os === 'harmony',
  isIos: os === 'ios',
  isAndroid: os === 'android',
  select: (params: {
    harmony?: any;
    ios?: any;
    android?: any;
    default?: any;
    [key: string]: any;
  }) => {
    return params?.[os] ?? params?.default;
  },
};

/**
 * 处理android和ios的兼容
 */
export function iosOrAndroid(iosParam: any, androidParam: any) {
  return PlatformOS.isIos ? iosParam : androidParam;
}

/**
 * 处理ios/android/harmony兼容
 */
export function iosOrAndroidOrHarmony(
  iosParam: any,
  androidParam: any,
  harmonyParam: any
) {
  return PlatformOS.isHarmony
    ? harmonyParam
    : iosOrAndroid(iosParam, androidParam);
}

export function useMeasure<T = any>() {
  const [layout, setLayout] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const ref = useRef<T>(null);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    if (ref.current) {
      setLayout(event.nativeEvent.layout);
    }
  }, []);

  return [ref, onLayout, layout] as const;
}

export function useKeyboard(
  onKeyboardWillShow: KeyboardEventListener,
  onKeyboardWillHide: KeyboardEventListener
) {
  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener(
      PlatformOS.isIos ? 'keyboardWillShow' : 'keyboardDidShow',
      onKeyboardWillShow
    );
    const keyboardWillHide = Keyboard.addListener(
      PlatformOS.isIos ? 'keyboardWillHide' : 'keyboardDidHide',
      onKeyboardWillHide
    );
    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, []);
}

export function useMaxHeight() {
  const { top } = useSafeAreaInsets();

  return useMemo(() => {
    return Dimensions.get('window').height * 0.95 - top;
  }, [top]);
}
/**
 * 是否开启沉浸式状态栏(仅android)
 */
export function useStatusBar() {
  const { top } = useSafeAreaInsets();
  return top !== 0;
}

export { default as usePersistFn } from './usePersistFn';
export { default as useDifferentState } from './useDifferentState';
export { default as useKeyboardDimensions } from './useKeyboardDimensions';
