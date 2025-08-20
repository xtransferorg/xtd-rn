import omit from 'lodash/omit';
import isNumber from 'lodash/isNumber';
import React from 'react';
import { ScrollView, View } from 'react-native';

import { useControllableValue } from 'ahooks';
import Space from '../space';

import ButtonOption from './button-option';
import type { ButtonOptionGroupProps } from './interface';

function ButtonOptionGroup<T = any>({
  activeHighlight = true,
  type = 'hazy',
  editable = true,
  scrollable = false,
  deselect = true,
  scrollableWrap = false,

  options,
  multiple,
  onDisabledPress,
  ...restProps
}: ButtonOptionGroupProps<T>) {
  const [value, onChange] = useControllableValue<T | T[]>(restProps, {
    defaultValue: multiple ? [] : undefined,
  });

  const contentJSX = (
    <Space
      {...omit(restProps, ['value', 'defaultValue', 'onChange'])}
      direction="horizontal"
      wrap={restProps?.wrap ?? !scrollable} // wrap 外部传递控制生效，之前固定值true有问题，默认根据scrollable情况来设定，可滚动的时候默认内部不能换行，避免换行
    >
      {options.map((item) => {
        const selected = multiple
          ? (value as T[])?.indexOf(item.value) > -1
          : value === item.value;

        return (
          <ButtonOption
            key={`${item.value}`}
            testID={`${item.value}`}
            type={type}
            prefix={item.prefix}
            text={item.label}
            badge={item.badge}
            disabled={item.disabled}
            activeHighlight={activeHighlight}
            active={selected}
            // 自定义按钮样式
            style={restProps.optionStyle}
            // 激活后选项样式
            activeStyle={restProps.optionActiveStyle}
            // 选项中文本样式
            textStyle={restProps.optionTextStyle}
            // 被激活后文本样式
            textActiveStyle={restProps.optionTextActiveStyle}
            onPress={() => {
              if (!editable) {
                return;
              }

              if (multiple) {
                const oldValue = value as T[];
                const _value = oldValue?.filter((v) => v !== item.value);
                const newValue =
                  _value?.length === oldValue?.length
                    ? [item.value, ...(oldValue || [])]
                    : _value;
                const newOptions = newValue.map((v) => {
                  const optionIndex = options.findIndex((o) => o.value === v);

                  return {
                    ...options[optionIndex],
                  };
                });

                onChange(newValue, newOptions);
              } else {
                if (item.value === value) {
                  if (deselect) {
                    // @ts-ignore
                    onChange(null, []);
                  }
                } else {
                  onChange(
                    item.value,
                    options.filter((o) => o.value === item.value)
                  );
                }
              }
            }}
            onDisabledPress={() => onDisabledPress?.(item)}
          />
        );
      })}
      {/* 选项条右侧fake padding */}
      {isNumber(restProps.fakeRightPadding) && (
        <View style={{ width: restProps.fakeRightPadding }} />
      )}
    </Space>
  );

  if (scrollable && !restProps.wrap) {
    return (
      <ScrollView
        horizontal
        bouncesZoom={false}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        {contentJSX}
      </ScrollView>
    );
  }

  if (scrollable && scrollableWrap) {
    return <ScrollView>{contentJSX}</ScrollView>;
  }

  return contentJSX;
}

export default ButtonOptionGroup;
