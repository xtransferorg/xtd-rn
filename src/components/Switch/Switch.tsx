import React, { useEffect, useRef, useMemo, memo, ReactElement } from 'react';
import { View, TouchableWithoutFeedback, Animated } from 'react-native';
import type { ViewStyle, ViewProps } from 'react-native';
import { Loading } from '../index';
import { renderTextLikeJSX, callInterceptor } from '../../core/helpers';
import { usePersistFn, useDifferentState } from '../../utils';
import { getDefaultValue } from '../../utils/helpers';
import type { SwitchProps, ExcludeUndefined } from './interface';
import { useTheme } from '../Theme';
import createStyle from './styles/switch.style';
import { useControllableValue } from 'ahooks';

/**
 * Switch 开关
 * @description 用于在打开和关闭状态之间进行切换。
 */
function Switch<ActiveValueT = boolean, InactiveValueT = boolean>({
  size,
  disabled = false,
  loading = false,
  activeValue = true as unknown as ActiveValueT,
  inactiveValue = false as unknown as InactiveValueT,
  activeColor,
  inactiveColor,
  activeChildren,
  inactiveChildren,
  onPress,
  beforeChange,

  testID,
  ...restProps
}: SwitchProps<ActiveValueT, InactiveValueT>) {
  const token = useTheme();
  const styles = createStyle(token);
  const translateX = useRef(new Animated.Value(0));
  const [value, onChange] = useControllableValue<ActiveValueT | InactiveValueT>(
    restProps,
    {
      defaultValue: inactiveValue,
    }
  );

  const unitSize = getDefaultValue(size, 24) as number;
  const nodeEdgeDistance = token['--spacing-1'];

  const [switchWidth, setSwitchWidth] = useDifferentState(unitSize * 2);
  const [switchHeight, nodeSize, translateXValueEnd, translateXValueStart] =
    useMemo(() => {
      const _switchHeight = unitSize * 1;
      const _nodeSize = unitSize * 1;
      const _isInnerNode = _switchHeight - _nodeSize < nodeEdgeDistance * 2;
      const _nodeRealSize = _isInnerNode
        ? _nodeSize - nodeEdgeDistance * 2
        : _nodeSize;
      const _innerPadding = _isInnerNode
        ? nodeEdgeDistance
        : (_switchHeight - _nodeSize) / 2;
      const _translateXValueEnd = switchWidth - _nodeRealSize - _innerPadding;
      const _translateXValueStart = _innerPadding;

      return [
        _switchHeight,
        _nodeRealSize,
        _translateXValueEnd,
        _translateXValueStart,
      ];
    }, [switchWidth, unitSize]);

  const active = value === activeValue;

  const onPressTouchable = () => {
    onPress?.();
    if (!disabled && !loading) {
      const newValue = active ? inactiveValue : activeValue;
      callInterceptor(beforeChange, {
        args: [newValue],
        done: () => {
          onChange(newValue);
        },
      });
    }
  };

  useEffect(() => {
    const actionValue = Animated.timing(
      translateX.current, // 动画中的变量值
      {
        toValue: active ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }
    );

    actionValue.start();

    return () => {
      // 停止动画
      if (actionValue) {
        actionValue.stop();
      }
    };
  }, [active]);

  const enableBgColor = active
    ? activeColor || token['--color-primary-6']
    : inactiveColor || token['--color-fill-4'];

  const disableBgColor = active
    ? token['--color-primary-3']
    : token['--color-fill-3'];

  const switchStyles: ViewStyle[] = [
    styles.switch,
    {
      minWidth: switchWidth,
      height: switchHeight,
      borderRadius: switchHeight / 2,
      backgroundColor: enableBgColor,
    },
    disabled ? { backgroundColor: disableBgColor } : {},
  ];
  const nodeStyleSummary: ViewStyle[] = [
    styles.node,
    {
      top: nodeEdgeDistance,
      width: nodeSize,
      height: nodeSize,
      borderRadius: nodeSize / 2,
      transform: [
        {
          translateX: translateX.current.interpolate({
            inputRange: [0, 1],
            outputRange: [translateXValueStart, translateXValueEnd],
          }) as unknown as number,
        },
      ],
    },
    {
      top: token['--spacing-1'],
    },
  ];

  const childrenMinEdgeDistance = switchHeight / 3;
  const childrenMaxEdgeDistance = nodeSize + nodeEdgeDistance * 3;
  const activeChildrenStyle: ViewStyle = {
    height: switchHeight,
    paddingLeft: childrenMinEdgeDistance,
    paddingRight: childrenMaxEdgeDistance,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        translateX: translateX.current.interpolate({
          inputRange: [0, 1],
          outputRange: [-switchWidth, 0],
        }) as unknown as number,
      },
    ],
  };
  const inactiveChildrenStyle: ViewStyle = {
    marginTop: -switchHeight,
    height: switchHeight,
    paddingLeft: childrenMaxEdgeDistance,
    paddingRight: childrenMinEdgeDistance,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        translateX: translateX.current.interpolate({
          inputRange: [0, 1],
          outputRange: [0, switchWidth],
        }) as unknown as number,
      },
    ],
  };

  const onLayoutChildren = usePersistFn<
    ExcludeUndefined<ViewProps['onLayout']>
  >((e) => {
    setSwitchWidth((v) => Math.max(v, e.nativeEvent.layout.width));
  });

  const activeChildrenJSX = renderTextLikeJSX(activeChildren, [
    styles.children_text,
  ]);
  const inactiveChildrenJSX = renderTextLikeJSX(inactiveChildren, [
    styles.children_text,
  ]);

  return (
    <TouchableWithoutFeedback onPress={onPressTouchable} testID={testID}>
      <View style={styles.switch_wrap} collapsable={false}>
        <View style={switchStyles} collapsable={false}>
          <Animated.View style={nodeStyleSummary}>
            {loading ? (
              <Loading
                name="loading"
                size={(nodeSize / 4) * 3}
                fill={
                  disabled
                    ? (disableBgColor as string)
                    : (enableBgColor as string)
                }
              />
            ) : null}
          </Animated.View>
          <View style={styles.children_wrap} collapsable={false}>
            <Animated.View
              style={activeChildrenStyle}
              onLayout={onLayoutChildren}
            >
              {activeChildrenJSX}
            </Animated.View>
            <Animated.View
              style={inactiveChildrenStyle}
              onLayout={onLayoutChildren}
            >
              {inactiveChildrenJSX}
            </Animated.View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default memo(Switch) as <
  ActiveValueT = boolean,
  InactiveValueT = boolean
>(
  p: SwitchProps<ActiveValueT, InactiveValueT>
) => ReactElement;
