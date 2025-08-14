import React, { useEffect, useRef, useCallback, memo, useMemo } from 'react';
import {
  ViewStyle,
  StyleProp,
  PanResponder,
  Dimensions,
  PanResponderInstance,
  LayoutChangeEvent,
} from 'react-native';
import { Animated, BackHandler } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import * as helpers from '../helpers';
import { usePersistFn } from '../hooks';
import useState from '../hooks/useStateUpdate';
import Overlay from '../overlay/overlay';
import Theme from '../theme';

import { getPosition, getTransform } from './helper';
import type { PopupProps, State } from './interface';
import {
  varCreator,
  styleCreator,
  getBorderRadius,
  PopupPositionMap,
} from './style';

const height = Dimensions.get('window').height;

/**
 * Popup 弹出层
 * @description 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。
 */
const Popup: React.FC<PopupProps> = ({
  children,
  style,
  visible = false,
  overlay = true,
  duration,
  closeOnPressOverlay = true,
  position = 'center',
  round = false,
  safeAreaInsetBottom = false,
  lazyRender = true,
  destroyOnClosed = false,
  onPressOverlay: onPressOverlayFn,
  onOpen: onOpenFn,
  onOpened: onOpenedFn,
  onClose: onCloseFn,
  onClosed: onClosedFn,
  onRequestClose,
  overlayStyle,
  threshold = 0.3,
  enableSlidingClose = false,
  contentScrollTop = true,
  useNative = true,
}) => {
  const insets = useSafeAreaInsets();
  // @ts-ignore
  const onPressOverlayPersistFn = usePersistFn(onPressOverlayFn);
  // @ts-ignore
  const onOpenPersistFn = usePersistFn(onOpenFn);
  // @ts-ignore
  const onOpenedPersistFn = usePersistFn(onOpenedFn);
  // @ts-ignore
  const onClosePersistFn = usePersistFn(onCloseFn);
  // @ts-ignore
  const onClosedPersistFn = usePersistFn(onClosedFn);
  const TOKENS = Theme.useThemeTokens();
  const CV = Theme.createVar(TOKENS, varCreator);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);

  duration = helpers.getDefaultValue(duration, TOKENS.animation_duration_base);

  const [state, setState] = useState<State>({
    visible,
    // 遮罩层显示、隐藏单独管理，避免弹出层完成后才触发关闭，两个组件应该同时变化
    overlayVisible: visible,
    zIndex: helpers.getNextZIndex(),
    lazyRender,
  });
  const MountedRef = useRef(false);

  const fadeAnim = useRef(
    new Animated.Value(getPosition(visible, position))
  ).current;
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null);

  /** 点击遮罩层 */
  const onPressOverlay = useCallback(() => {
    if (closeOnPressOverlay) {
      // 关闭弹层
      onPressOverlayPersistFn();
    }
  }, [closeOnPressOverlay, onPressOverlayPersistFn]);

  const animationend = ({
    finished,
    innerVisible,
  }: {
    finished: boolean;
    innerVisible: boolean;
  }) => {
    if (finished) {
      fadeInstance.current = null;
      if (!innerVisible) {
        onClosedPersistFn();
        setState({ visible: innerVisible, lazyRender: destroyOnClosed });
      } else {
        onOpenedPersistFn();
      }
    }
  };

  const executeAnimation = useCallback(
    (innerVisible: boolean, beginning = true) => {
      if (innerVisible) {
        // 弹出弹出，立即响应
        setState({
          visible: innerVisible,
          zIndex: helpers.getNextZIndex(),
          lazyRender: false,
        });
      }

      // 遮罩层状态实时显示
      setState({
        overlayVisible: innerVisible,
      });

      if (MountedRef.current) {
        if (beginning) {
          fadeAnim.setValue(getPosition(!innerVisible, position));
        }

        if (innerVisible) {
          onOpenPersistFn();
        } else {
          onClosePersistFn();
        }

        fadeInstance.current = Animated.timing(
          fadeAnim, // 动画中的变量值
          {
            toValue: getPosition(innerVisible, position),
            duration: duration,
            useNativeDriver: true,
            easing: innerVisible
              ? helpers.easing.easeOutCirc
              : helpers.easing.easeInCubic,
          }
        );

        fadeInstance.current.start(({ finished }) =>
          animationend({ finished, innerVisible })
        );
      }
    },
    [
      destroyOnClosed,
      duration,
      fadeAnim,
      position,
      onClosedPersistFn,
      onClosePersistFn,
      onOpenedPersistFn,
      onOpenPersistFn,
    ]
  );

  const flagClose = useRef(false);
  const containerHeight = useRef(0);

  const onLayout = useCallback(
    ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
      containerHeight.current = layout.height;
    },
    []
  );

  const panResponder = useMemo<PanResponderInstance>(
    () =>
      enableSlidingClose
        ? PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => {
              return gestureState.dy > 5 && contentScrollTop;
            },
            onPanResponderMove: (_, gestureState) => {
              if (gestureState.dy > 0) {
                fadeAnim.setValue(gestureState.dy);
                flagClose.current =
                  (containerHeight.current - gestureState.dy) / height <
                  threshold;
              }
            },
            onPanResponderRelease: () => {
              executeAnimation(!flagClose.current, false);
              flagClose.current = false;
            },
          })
        : PanResponder.create({}),
    [executeAnimation, threshold, contentScrollTop, fadeAnim]
  );

  // 监听状态变化，执行动画
  useEffect(() => {
    executeAnimation(visible);

    return () => {
      // 停止动画
      if (fadeInstance.current) {
        fadeInstance.current.stop();
        fadeInstance.current = null;
      }
    };
  }, [executeAnimation, visible]);

  // 初始化好组件
  useEffect(() => {
    MountedRef.current = true;
    if (useNative) {
      // 因为原生组件的特殊性，组件默认不会挂载，需要在初始化时就执行动画
      executeAnimation(visible);
    }
  }, []);

  // Android 返回按钮
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (typeof onRequestClose === 'function' && visible) {
          return onRequestClose();
        }

        return false;
      }
    );

    return () => backHandler.remove();
  }, [onRequestClose, visible]);

  const popupStyles: StyleProp<ViewStyle> = [
    STYLES.popup,
    getBorderRadius(CV, position, round),
    {
      paddingBottom: state.visible && safeAreaInsetBottom ? insets.bottom : 0,
      zIndex: state.zIndex,
    },
    style,
    state.visible
      ? [
          STYLES.popup_active,
          getTransform(position, fadeAnim),
          PopupPositionMap[position],
        ]
      : null,
  ];

  if (state.lazyRender) {
    return null;
  }

  return (
    <>
      {overlay ? (
        <Overlay
          visible={state.overlayVisible}
          zIndex={state.zIndex}
          duration={duration}
          onPress={onPressOverlay}
          style={overlayStyle}
        />
      ) : null}

      <Animated.View
        style={popupStyles}
        onLayout={onLayout}
        pointerEvents={position !== 'center' ? undefined : 'box-none'}
        {...panResponder.panHandlers}
      >
        {children}
      </Animated.View>
    </>
  );
};

export default memo(Popup);
