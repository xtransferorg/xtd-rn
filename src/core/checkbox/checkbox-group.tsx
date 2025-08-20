import omit from 'lodash/omit';
import React, { memo, ReactElement } from 'react';
import { ScrollView } from 'react-native';

import { useControllableValue } from 'ahooks';
import Space from '../space';

import Checkbox from './checkbox';
import type { CheckboxGroupProps } from './interface';

function CheckboxGroup<T = any>({
  options,
  multiple,
  highlight,
  labelAlign,
  editable = true,
  scrollable = false,
  checkboxComponent: PropsCheckboxComponent,
  checkboxComponentStyle,
  renderIcon,
  defaultValue,
  disabled,
  onDisabledPress,
  ...restProps
}: CheckboxGroupProps<T>) {
  const [value, onChange] = useControllableValue<T | T[] | undefined | null>(
    restProps,
    {
      defaultValue: multiple ? defaultValue ?? [] : defaultValue,
    }
  );

  const CheckboxComponent = PropsCheckboxComponent || Checkbox;

  const contentJSX = (
    <Space {...omit(restProps, ['value', 'defaultValue', 'onChange'])}>
      {options.map((item) => {
        const selected = multiple
          ? ((value ?? []) as T[])?.indexOf?.(item.value) > -1
          : value === item.value;

        return (
          <CheckboxComponent
            testID={item.testID}
            highlight={highlight}
            prefixIcon={item.prefixIcon}
            multiple={multiple}
            renderIcon={renderIcon}
            labelPosition={item.labelPosition}
            key={`${item.value}`}
            activeValue={item.value}
            inactiveValue={null}
            labelAlign={labelAlign}
            value={selected ? item.value : null}
            label={item.label}
            labelTextStyle={item.labelTextStyle}
            subLabel={item.subLabel}
            subLabelTextStyle={item.subLabelTextStyle}
            contentLabel={item.contentLabel}
            contentLabelTextStyle={item.contentLabelTextStyle}
            disabled={disabled || item.disabled}
            style={checkboxComponentStyle}
            onChange={(_value) => {
              if (!editable) {
                return;
              }

              const isReset = _value !== item.value;

              if (multiple) {
                const oldValue = (value ?? []) as T[];
                const newValue = isReset
                  ? oldValue.filter((v) => v !== item.value)
                  : [item.value, ...oldValue];
                const newOptions = newValue.map((v) => {
                  const optionIndex = options.findIndex((o) => o.value === v);

                  return {
                    ...options[optionIndex],
                  };
                });

                onChange(newValue, newOptions);
              } else {
                const newValue = isReset ? undefined : _value;
                const newOptions = isReset
                  ? undefined
                  : options.filter((o) => o.value === _value);

                onChange(newValue, newOptions);
              }
            }}
            onDisabledPress={() => onDisabledPress?.(item)}
          />
        );
      })}
    </Space>
  );

  if (scrollable && restProps.direction === 'horizontal' && !restProps.wrap) {
    return (
      <ScrollView
        horizontal
        bouncesZoom={false}
        showsHorizontalScrollIndicator={false}
      >
        {contentJSX}
      </ScrollView>
    );
  }

  return contentJSX;
}

export default memo(CheckboxGroup) as <ActiveValueT = any>(
  p: CheckboxGroupProps<ActiveValueT>
) => ReactElement;
