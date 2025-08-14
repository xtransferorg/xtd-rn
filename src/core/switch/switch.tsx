import React, { useEffect, useRef, useMemo, memo } from 'react';
import { View, ViewStyle } from 'react-native';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import { Loading } from '../index';
import { getDefaultValue, callInterceptor } from '../helpers';
import { useControllableValue } from 'ahooks';
import Theme from '../theme';

import type { SwitchProps } from './interface';
import { varCreator, styleCreator } from './style';
import { useTheme } from '../../components/Theme';

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
  inactiveColor,
  activeColor,
  onPress,
  beforeChange,

  ...restProps
}: SwitchProps<ActiveValueT, InactiveValueT>) {
  const translateX = useRef(new Animated.Value(0));
  const [value, onChange] = useControllableValue<ActiveValueT | InactiveValueT>(
    restProps,
    {
      defaultValue: inactiveValue,
    }
  );
  const TOKENS = Theme.useThemeTokens();
  const token = useTheme();
  const CV = Theme.createVar(TOKENS, varCreator);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);
  const [
    switchWidth,
    switchHeight,
    nodeSize,
    translateXValueEnd,
    translateXValueStart,
  ] = useMemo(() => {
    const _innerMiniPadding = token['--spacing-1'];
    const _unitSize = getDefaultValue(size, CV.switch_size);
    // @ts-ignore
    const _switchWidth = _unitSize * CV.switch_width_ratio;
    // @ts-ignore
    const _switchHeight = _unitSize * CV.switch_height_ratio;
    // @ts-ignore
    const _nodeSize = _unitSize * CV.switch_node_size_ratio;
    const _isInnerNode = _switchHeight - _nodeSize < _innerMiniPadding * 2;
    const _nodeRealSize = _isInnerNode
      ? _nodeSize - _innerMiniPadding * 2
      : _nodeSize;
    const _innerPadding = _isInnerNode
      ? _innerMiniPadding
      : (_switchHeight - _nodeSize) / 2;
    const _translateXValueEnd = _switchWidth - _nodeRealSize - _innerPadding;
    const _translateXValueStart = _innerPadding;
    return [
      _switchWidth,
      _switchHeight,
      _nodeRealSize,
      _translateXValueEnd,
      _translateXValueStart,
    ];
  }, [
    CV.switch_height_ratio,
    CV.switch_node_size_ratio,
    CV.switch_size,
    CV.switch_width_ratio,
    size,
  ]);

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
        toValue: active ? translateXValueEnd : translateXValueStart,
        duration: CV.switch_transition_duration,
        useNativeDriver: false,
      }
    );

    actionValue.start();

    return () => {
      // 停止动画
      if (actionValue) {
        actionValue.stop();
      }
    };
  }, [
    active,
    translateXValueStart,
    translateXValueEnd,
    CV.switch_transition_duration,
  ]);

  const switchStyles: ViewStyle[] = [
    STYLES.switch,
    {
      width: switchWidth,
      height: switchHeight,
      borderRadius: switchHeight / 2,
      // 当前过渡不支持 color/backgroundColor
      // 参考：https://stackoverflow.com/a/60586628
      backgroundColor: active
        ? activeColor || CV.switch_on_background_color
        : inactiveColor || CV.switch_background_color,
    },
    // @ts-ignore
    disabled
      ? {
          backgroundColor: active
            ? token['--color-primary-3']
            : token['--color-fill-3'],
        }
      : null,
  ];
  const nodeStyleSummary: ViewStyle[] = [
    STYLES.node,
    {
      width: nodeSize,
      height: nodeSize,
      borderRadius: nodeSize / 2,
      transform: [
        {
          translateX: translateX.current as unknown as number,
        },
      ],
    },
    {
      position: 'absolute',
      top: token['--spacing-1'],
      backgroundColor: token['--color-bg-1'],
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={onPressTouchable}>
      <View style={{ position: 'relative' }}>
        <Animated.View style={switchStyles} />
        <Animated.View style={nodeStyleSummary}>
          {loading ? <Loading size={14} fill={activeColor} /> : null}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default memo(Switch) as <
  ActiveValueT = boolean,
  InactiveValueT = boolean
>(
  p: SwitchProps<ActiveValueT, InactiveValueT>
) => JSX.Element;
