import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { renderTextLikeJSX } from '../../core/helpers';
import { NavBar } from '@xrnjs/ui';
import { IconMASearch1 } from '../../icons/index';
import Input from '../Input';
import { InputFocusEvent } from '../Input/interface';
import ShouldRender from '../ShouldRender';
import { SearchBarProps } from './interface';
import styles from './style/search-bar.style';
import { useControllableValue } from 'ahooks';

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const {
    style,
    wrapStyle,
    leftExtra,
    leftExtraStyle,
    rightExtra,
    rightExtraStyle,
    onFocus,
    onBlur,
    inputStyle,
    searchIcon = true,
    onChange,
    colorType = 'default',
    title,
    allowClear,
    inputWrapperStyle,
    backgroundColor,
    ...inputProps
  } = props;
  const [value, setValue] = useControllableValue<string | number | undefined>(
    props
  );
  const [focus, setFocus] = useState<boolean>(false);

  const handleFocus = (e: InputFocusEvent) => {
    setFocus(true);
    onFocus?.(e);
  };

  const handleBlur = (e: InputFocusEvent) => {
    setFocus(false);
    onBlur?.(e);
  };

  const handleChange = (val: string | number) => {
    setValue(val);
    onChange?.(val);
  };

  const typeStyle = {
    default: styles.default,
    primary: styles.primary,
  }[colorType];

  const renderLeftExtra = () => (
    <ShouldRender condition={!!leftExtra}>
      <View style={StyleSheet.flatten([styles.leftExtra, leftExtraStyle])}>
        {leftExtra}
      </View>
    </ShouldRender>
  );

  const renderRightExtra = () => (
    <ShouldRender condition={!!rightExtra}>
      <View style={StyleSheet.flatten([styles.rightExtra, rightExtraStyle])}>
        {rightExtra}
      </View>
    </ShouldRender>
  );

  const titleJSX = renderTextLikeJSX(
    title,
    StyleSheet.flatten([
      styles.title,
      {
        color: typeStyle.color,
      },
    ])
  );

  const renderInput = () => (
    <View
      style={StyleSheet.flatten([
        styles.inputWrapper,
        (focus || (value != null && `${value}`.length > 0)) &&
          styles.inputWrapperFocus,
        colorType === 'primary' && styles.inputWrapperPrimary,
        inputWrapperStyle,
      ])}
    >
      <Input
        style={{ flex: 1 }}
        inputStyle={StyleSheet.flatten([
          styles.input,
          inputStyle,
          {
            color: typeStyle.color,
          },
        ])}
        {...(searchIcon && {
          prefix: (
            <IconMASearch1
              size={16}
              fillColor={colorType === 'primary' ? '#fff' : '#999'}
              style={styles.searchIcon}
            />
          ),
        })}
        placeholderTextColor={colorType === 'primary' ? '#fff' : '#999'}
        allowClear={allowClear || colorType !== 'primary'}
        size="small"
        {...inputProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        borderNone={colorType === 'primary'}
      />
    </View>
  );

  return (
    <NavBar
      style={StyleSheet.flatten([
        typeStyle,
        backgroundColor ? { backgroundColor } : null,
        style,
      ])}
      translucent
      autoHeight
      customNavBar={
        <View style={styles.container}>
          {titleJSX}
          <View
            style={StyleSheet.flatten([
              styles.wrapper,
              typeStyle,
              backgroundColor ? { backgroundColor } : null,
              wrapStyle,
            ])}
          >
            {renderLeftExtra()}
            {renderInput()}
            {renderRightExtra()}
          </View>
        </View>
      }
    />
  );
};

export default SearchBar;
