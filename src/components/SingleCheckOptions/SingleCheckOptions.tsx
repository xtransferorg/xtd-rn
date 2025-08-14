import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import {
  SingleCheckOptionsOption,
  SingleCheckOptionsProps,
  SingleCheckOptionsValue,
} from './interface';
import Space from '../Space';
import styles from './styles/singleCheckOptions.style';
import { renderTextLikeJSX } from '../../core/helpers';
import ShouldRender from '../ShouldRender';
import { useControllableValue } from 'ahooks';

const defaultProps = {
  options: [],
  defaultValue: '1',
};

/**
 * @deprecated 后续版本将废弃，请使用 `Options` 组件并传入 `cancelable` 参数
 */
const Options = <V extends SingleCheckOptionsValue>(
  p: SingleCheckOptionsProps<V>
) => {
  let newDefaultValue;
  if (!p?.defaultValue) {
    newDefaultValue = p?.options?.[0]?.value;
  } else {
    newDefaultValue = p?.defaultValue;
  }
  const props = { ...defaultProps, ...p, defaultValue: newDefaultValue };
  const { options, style } = props;

  const [value, setValue] = useControllableValue<V>(props);

  const handlePress = (
    option: SingleCheckOptionsOption<V>,
    active: boolean
  ) => {
    if (!active) {
      const val = option.value;
      setValue(val);
    }
  };

  const items = options.map((option) => {
    const active = ([value] || []).includes(option.value);
    const disabled = option.disabled || props.disabled;

    return (
      <TouchableWithoutFeedback
        key={option.value}
        onPress={() => handlePress(option, active)}
        disabled={disabled}
        style={StyleSheet.flatten([
          styles.item,
          disabled && styles.itemDisabled,
          active && styles.itemActive,
        ])}
      >
        <View
          style={StyleSheet.flatten([
            styles.item,
            disabled && styles.itemDisabled,
            active && styles.itemActive,
          ])}
        >
          {renderTextLikeJSX(
            option.label,
            StyleSheet.flatten([
              styles.label,
              active && styles.labelActive,
              disabled && styles.labelDisabled,
            ])
          )}
          <ShouldRender condition={!!option.description}>
            {renderTextLikeJSX(
              option.description,
              StyleSheet.flatten([
                styles.description,
                active && styles.descriptionActive,
                disabled && styles.descriptionDisabled,
              ])
            )}
          </ShouldRender>
        </View>
      </TouchableWithoutFeedback>
    );
  });

  return (
    <View style={StyleSheet.flatten([styles.wrapper, style])}>
      <Space
        direction="horizontal"
        itemStyle={styles.spaceItem}
        isPanel
        numberOfSingleLines={items.length}
        gap={10}
      >
        {items}
      </Space>
    </View>
  );
};

export default Options;
