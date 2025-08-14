import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../Theme';
import { SelectInputItem, SelectInputProps } from './interface';
import createStyles from './styles/SelectInput.style';
import { IconXLowersmall1, IconXClosesmall1 } from '../../icons/index';
import { Tag, TagFunc, ShouldRender } from '@xrnjs/ui';
import { isArray } from 'lodash';
import { renderTextLikeJSX } from '../../core/helpers';

const SelectInput = ({
  value,
  size,
  placeholder,
  disabled,
  allowClear = true,
  onClear,
  onPress,
  multiple = false,
  closable,
  onClose,
  style,
  content,
  suffix,
  testID,
  status,
}: SelectInputProps) => {
  const token = useTheme();
  const styles = createStyles(token);
  const hasTag = multiple && isArray(value) && value.length > 0;
  const onPressSelect = (event: GestureResponderEvent) => {
    if (disabled) return;
    onPress?.(event);
  };

  const renderContent = () => {
    // 自定义内容
    if (content) return content;

    // 无值提示
    if (!value || (isArray(value) && value.length < 1)) {
      return (
        <Text style={StyleSheet.flatten([styles.placeholder])}>
          {placeholder}
        </Text>
      );
    }

    // 单选
    if (!multiple) {
      const sigleValue = value as React.ReactNode;
      return renderTextLikeJSX(sigleValue, [
        styles.text,
        disabled && styles.disabledText,
      ]);
    }

    const multipleValue = value as SelectInputItem[];
    // 多选
    return (
      <View style={styles.tags}>
        {multipleValue?.map?.((v) => (
          <Tag
            visible={true}
            size={'l'}
            closable={closable}
            key={v.value}
            onClose={() => onClose?.(v)}
            tagFunc={TagFunc.weaken}
            style={StyleSheet.flatten([
              styles.tag,
              disabled && styles.disabledTag,
            ])}
            testID={`${testID}${v.value}`}
          >
            {v?.label}
          </Tag>
        ))}
      </View>
    );
  };

  const renderSuffix = () => {
    const hasValue =
      !!content ||
      (isArray(value) && value.length > 0) ||
      (!isArray(value) && !!value);
    const showClear = !disabled && hasValue && allowClear;

    return (
      <View style={styles.suffix}>
        <ShouldRender condition={showClear}>
          <TouchableOpacity onPress={onClear}>
            <IconXClosesmall1
              size={token['--font-size-3']}
              fillColor={token['--color-text-5']}
            />
          </TouchableOpacity>
        </ShouldRender>
        <ShouldRender condition={!showClear}>
          {suffix ? (
            suffix
          ) : (
            <IconXLowersmall1
              size={token['--font-size-3']}
              fillColor={
                disabled ? token['--color-text-2'] : token['--color-text-5']
              }
            />
          )}
        </ShouldRender>
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={onPressSelect} testID={testID}>
      <View
        style={StyleSheet.flatten([
          styles.container,
          status === 'error' && styles.error,
          hasTag && styles.tagContainer,
          size === 'small' && styles.small,
          size === 'large' && styles.large,
          hasTag && size === 'small' && styles.smallTagContainer,
          hasTag && size === 'large' && styles.largeTagContainer,
          disabled && styles.disabled,
          style,
        ])}
      >
        <View style={styles.content}>{renderContent()}</View>
        {renderSuffix()}
      </View>
    </TouchableOpacity>
  );
};

export default SelectInput;
