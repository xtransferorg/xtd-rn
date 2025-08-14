import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
  useEffect,
  useRef,
} from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import { IconXAdd1, IconXReduce1 } from '../../icons/index';
import type { StepperProps, StepperRef } from './interface';
import { isNil, isString, isUndefined, toString } from 'lodash';
import { formatNumber } from '../Input/utils';
import { createStyle, buttonStyle } from './style/stepper.style';
import Big from 'big.js';
import { useTheme } from '../Theme';

const StepperButton: React.FC<{
  position: 'suffix' | 'prefix';
  children: React.ReactNode;
  style?: object;
  disabled?: boolean;
  onPress: (e: GestureResponderEvent) => void;
}> = ({ children, disabled, position, style, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([buttonStyle.button, style])}
      disabled={disabled}
      testID={position + '-button'}
    >
      {children}
    </TouchableOpacity>
  );
};

const parserFn = (value: string, decimalSeparator: string) => {
  const withDotDecimal = value.replace(decimalSeparator, '.');
  return Number(withDotDecimal);
};

const Stepper: ForwardRefRenderFunction<StepperRef, StepperProps> = (
  props,
  ref
) => {
  const {
    style,
    value,
    defaultValue,
    disableMinus,
    disablePlus,
    inputReadOnly,
    step = 1,
    min = 0,
    max = Number.MAX_VALUE,
    digits,
    allowEmpty,
    integer,
    selectionColor = '#ff7a00',
    inputWidth = 100,
    placeholder,
    prefixIcon,
    suffixIcon,
    immediate,
    decimalSeparator = '.',
    parser = parserFn,
    onChange,
    beforeChange,
    onBlur,
    onFocus,
    onMinus,
    onPlus,
    size = 'default',
    disabled = false,
    status,
    ...resetProps
  } = props;
  const token = useTheme();
  const styles = createStyle(inputWidth, token, size);
  const format = useCallback(
    (data?: string | number) => {
      if (allowEmpty) {
        if (data === '' || isUndefined(data)) {
          return data;
        }
      }
      data = formatNumber(String(data), !integer, true, decimalSeparator);
      data = parser(data, decimalSeparator);
      data = data === '' ? 0 : +data;
      data = isNaN(data) ? min : data;
      data = Math.max(Math.min(max, data), min);

      if (!isNil(digits)) {
        data = data.toFixed(+digits);
      }

      return data;
    },
    [min, max, allowEmpty, digits, integer, decimalSeparator]
  );

  const [current, setCurrent] = useState<number | string | undefined>(
    format(value ?? defaultValue)
  );
  const [currentCache, setCurrentCache] = useState<string>();
  const textInputRef = useRef<TextInput>(null);
  const [isFocus, setIsFocus] = useState(false);

  const doChange = useCallback(
    (data?: number | string, entering?: boolean) => {
      if (!entering || immediate) {
        onChange?.(isString(data) ? Number(data) : data);
      }
      setCurrent(() => data);
    },
    [immediate]
  );

  const innerChange = useCallback(
    (data?: number | string, entering?: boolean) => {
      const allowChange = beforeChange?.(data) ?? true;
      if (allowChange && allowChange instanceof Promise) {
        const originVal = current;
        setCurrent(() => data); //先设置 避免鸿蒙抖动
        allowChange
          ?.then?.((res) => {
            if (res) {
              doChange(data, entering); // 正式通知
            } else {
              setCurrent(() => originVal); // 否则还原
            }
          })
          .catch(() => {});
      } else {
        if (allowChange) doChange(data, entering);
      }
    },
    [immediate, onChange, beforeChange]
  );

  const getTruthfulCurrent = useCallback(() => {
    return (
      (isString(current) ? parser(current, decimalSeparator) : current) || 0
    );
  }, [current, parser, decimalSeparator]);

  const getVirtualCurrent = useCallback(
    (data: string) => {
      return data.replace('.', decimalSeparator);
    },
    [current, parser, decimalSeparator]
  );

  const onSuffixPress = useCallback(
    (e: GestureResponderEvent) => {
      const data = format(
        getVirtualCurrent(Big(getTruthfulCurrent()).add(step).toString())
      );
      innerChange(data);
      onPlus?.(e, data);
    },
    [
      current,
      step,
      innerChange,
      format,
      onPlus,
      getTruthfulCurrent,
      getVirtualCurrent,
    ]
  );

  const onPrefixPress = useCallback(
    (e: GestureResponderEvent) => {
      const data = format(
        getVirtualCurrent(Big(getTruthfulCurrent()).minus(step).toString())
      );
      innerChange(data);
      onMinus?.(e, data);
    },
    [
      current,
      step,
      innerChange,
      format,
      onMinus,
      getTruthfulCurrent,
      getVirtualCurrent,
    ]
  );

  const handleInput = useCallback(
    (text: string) => {
      if (text === '') {
        innerChange(undefined, true);
      } else {
        innerChange(text, true);
      }
    },
    [innerChange, format]
  );

  const handleFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setCurrentCache(toString(current));
      !(inputReadOnly || disabled) && setIsFocus(true);
      onFocus?.(e);
    },
    [current, onFocus]
  );

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (currentCache !== toString(current)) {
        const data = format(current);
        innerChange(data);
      }
      setIsFocus(false);
      onBlur?.(e);
    },
    [current, currentCache, format, innerChange, onBlur]
  );

  useEffect(() => {
    const data = value ?? defaultValue;
    setCurrent(() =>
      getVirtualCurrent(String(format(getVirtualCurrent(String(data || '')))))
    );
  }, [value]);

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        textInputRef.current?.focus();
      },
      blur: () => {
        textInputRef.current?.blur();
      },
    };
  });

  return (
    <View
      style={StyleSheet.flatten([
        styles.wrapper,
        isFocus && styles.wrapperFoucs,
        disabled && styles.wrapDisabled,
        status === 'error' && styles.wrapDanger,
        style,
      ])}
    >
      <StepperButton
        position="prefix"
        onPress={onPrefixPress}
        disabled={disableMinus || disabled}
        style={styles.prefix}
      >
        {prefixIcon ?? (
          <IconXReduce1
            fillColor={
              disableMinus || disabled
                ? token['--color-text-2']
                : token['--color-text-5']
            }
            stroke="none"
            size={token['--font-size-3']}
          />
        )}
      </StepperButton>
      <TextInput
        ref={textInputRef}
        style={StyleSheet.flatten([
          styles.input,
          (inputReadOnly || disabled) && styles.disabled,
        ])}
        keyboardType="numeric"
        underlineColorAndroid="transparent"
        selectionColor={selectionColor}
        textAlign="center"
        textAlignVertical="center"
        testID="stepper-input"
        placeholder={placeholder}
        editable={!(inputReadOnly || disabled)}
        value={current === undefined ? current : String(current)}
        onChangeText={handleInput}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholderTextColor={token['--color-text-4']}
        {...resetProps}
      />
      <StepperButton
        position="suffix"
        onPress={onSuffixPress}
        disabled={disablePlus || disabled}
        style={styles.suffix}
      >
        {suffixIcon ?? (
          <IconXAdd1
            fillColor={
              disablePlus || disabled
                ? token['--color-text-2']
                : token['--color-text-5']
            }
            stroke="none"
            size={token['--font-size-3']}
          />
        )}
      </StepperButton>
    </View>
  );
};

export default forwardRef(Stepper);
