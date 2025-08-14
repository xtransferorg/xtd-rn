import React, { useMemo, useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import { OptionsOption, OptionsProps, OptionsValue } from './interface';
import { renderTextLikeJSX } from '../../core/helpers';
import { floor, isNumber } from 'lodash';
import { IconXStar1, IconXSelectedtag2 } from '../../icons/index';
import createStyle from './styles/options.style';
import ShouldRender from '../ShouldRender';
import Space from '../../core/space';
import { useTheme } from '../Theme/Theme';
import { useControllableValue } from 'ahooks';

const defaultProps = {
  multiple: false,
  single: false,
  options: [],
  cancelable: true,
};

function getOptionWidth(
  columns: number,
  gapVertical: number,
  containerWidth: number,
  fullColumn: boolean,
  paddingHorizontal: number
) {
  // 14 is the padding of the container
  const totalGapSize =
    (columns - 1) * gapVertical +
    (fullColumn ? 0 : paddingHorizontal * 2) +
    0.1; // 0.1防止计算数值渲染不精确导致换行;
  return (containerWidth - totalGapSize) / columns;
}

const Options = <V extends OptionsValue, S extends boolean>(
  p: OptionsProps<V, S>
) => {
  const props = { ...defaultProps, ...p };
  const token = useTheme();
  const styles = createStyle(token);
  const { gap = token['--spacing-2'] } = props;
  const {
    multiple,
    single,
    options,
    showIcon = false,
    mode = 'horizontal',
    style,
    columns,
    gapHorizontal = gap,
    gapVertical = gap,
    cancelable,
    fullColumn = false,
    imageStyle,
    onDisabledPress,
    iconProps,
    optionStyle,
  } = props;

  const [value, setValue] = useControllableValue<V[] | V>(props);
  const [containerWidth, setContainerWidth] = useState(0);
  const width = useMemo(
    () =>
      getOptionWidth(columns || 1, gapVertical, containerWidth, fullColumn, 0),
    [columns, gapVertical, containerWidth, fullColumn]
  );

  const handleChange = (val: V | V[]) => {
    setValue(val);
  };

  const handlePress = (option: OptionsOption<V>, active: boolean) => {
    if (multiple) {
      const val = active
        ? (value as V[]).filter((v) => v !== option.value)
        : [...(value as V[]), option.value];
      handleChange(val);
    } else {
      if (!cancelable && active) return;
      const val = active ? [] : [option.value];
      if (single) {
        handleChange((val[0] || null) as V);
        return;
      }
      handleChange(val);
    }
  };

  const getOptionStyle = (index: number) => {
    if (isNumber(columns)) {
      return {
        width: width,
        marginTop: index < columns ? 0 : gapVertical / 2,
        marginBottom:
          index / options.length >= floor(options.length / columns)
            ? 0
            : gapVertical / 2,
        marginLeft: index % columns === 0 ? 0 : gapHorizontal / 2,
        marginRight: (index + 1) % columns === 0 ? 0 : gapHorizontal / 2,
      };
    }
    return null;
  };

  const items = options.map((option, index) => {
    const active = single
      ? value === option.value
      : ((value as V[]) || []).includes(option.value);
    const disabled = option.disabled || props.disabled;

    const isFlexStart =
      showIcon && mode === 'horizontal' && !option?.imageSource;

    return (
      <TouchableWithoutFeedback
        key={option.value}
        onPress={() => {
          if (disabled) {
            onDisabledPress?.(option);
            return;
          }
          handlePress(option, active);
        }}
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
            getOptionStyle(index),
            isFlexStart && styles.horizontal,
            optionStyle,
            option.style,
          ])}
        >
          <ShouldRender condition={!!option?.imageSource}>
            <Image style={imageStyle} source={option.imageSource!} />
          </ShouldRender>

          <ShouldRender condition={!option?.imageSource && showIcon}>
            <View
              style={
                mode === 'horizontal'
                  ? styles.horizontalMargin
                  : styles.verticalMargin
              }
            >
              {option.icon || (
                <IconXStar1
                  fillColor={
                    active
                      ? token['--color-primary-6']
                      : disabled
                      ? token['--color-gray-4']
                      : token['--color-gray-9']
                  }
                  {...iconProps}
                  {...option.iconProps}
                />
              )}
            </View>
          </ShouldRender>

          <ShouldRender condition={!option?.imageSource}>
            <View style={isFlexStart && styles.titleWrapper}>
              {renderTextLikeJSX(
                option.label,
                StyleSheet.flatten([
                  styles.label,
                  !!option.description && styles.title,
                  active && styles.labelActive,
                  disabled && styles.labelDisabled,
                  option.labelStyle,
                ]),
                option.labelTextProps
              )}
              <ShouldRender condition={!!option.description}>
                {renderTextLikeJSX(
                  option.description,
                  StyleSheet.flatten([
                    styles.description,
                    active && styles.descriptionActive,
                    disabled && styles.descriptionDisabled,
                    option.descriptionStyle,
                  ]),
                  option.descriptionTextProps
                )}
              </ShouldRender>
            </View>
          </ShouldRender>

          <ShouldRender condition={active}>
            <View style={styles.activeMark}>
              <IconXSelectedtag2 height={20} />
            </View>
          </ShouldRender>
        </View>
      </TouchableWithoutFeedback>
    );
  });

  return (
    <View
      onLayout={({ nativeEvent: { layout } }) =>
        setContainerWidth(layout.width)
      }
      style={StyleSheet.flatten([
        styles.wrapper,
        columns
          ? {
              flexDirection: 'row',
              flexWrap: 'wrap',
            }
          : {},
        style,
      ])}
    >
      {isNumber(columns) ? (
        items
      ) : (
        <Space
          direction="horizontal"
          isPanel
          numberOfSingleLines={items.length}
          itemStyle={styles.spaceItem}
          gap={10}
        >
          {items}
        </Space>
      )}
    </View>
  );
};

export default Options;
