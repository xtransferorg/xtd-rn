import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  KeyboardTypeOptions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { isFunction, isObject, omit, toString } from 'lodash';
import {
  BaseInputProps,
  ContentSizeChangeEvent,
  InputChangeEvent,
  InputFocusEvent,
  InputFormatTrigger,
  InputInstance,
  KeyPressEvent,
} from './interface';
import createStyles from './styles/input.style';
import { addThousandSeparators, formatNumber } from './utils';
import { IconXClosesmall1 } from '../../icons/index';
import ShouldRender from '../ShouldRender';
import { renderTextLikeJSX } from '../../core/helpers';
import { useTheme } from '../Theme';
import InputLoading from './InputLoading';
import { PlatformOS } from '../../utils';
import { useControllableValue, useMemoizedFn } from 'ahooks';

const BaseInput = forwardRef<InputInstance, BaseInputProps>((props, ref) => {
  const {
    fontSizeRange,
    textInputLengthRange,
    style,
    inputWrapper,
    inputStyle,
    placeholderStyle,
    type = 'text',
    placeholder = '',
    defaultValue,
    formatter,
    formatTrigger = 'onChange',
    autoFocus,
    disabled,
    readOnly,
    maxLength = 9999,
    align = 'auto',
    size = 'default',
    autoPressFocus = true,
    borderNone = false,
    decimalSeparator = '.',
    thousandSeparator = ',',
    status,
    parser,
    onBlur: propsOnBlur,
    onFocus: propsOnFocus,
    onChange: propsOnChange,
    autoTransformToNumber = false,
    allowClear = true,
    clearTrigger = 'focus',
    prefix,
    prefixStyle = {},
    suffix,
    suffixStyle = {},
    thousandSeparators,
    rows = 1,
    autoSize,
    bizInputType = 'normal',
    placeholderWrapper,
    loading = false,
    loadingProps,
    precision,
    ...restProps
  } = props;

  const token = useTheme();
  const styles = createStyles(token);
  const singleRowHeight: number = token[`--size-${size}`];

  // 支持 formatter 为函数和千分位时回显
  const props1 = { ...props };
  if (props1.value) {
    if (props1.formatter === 'thousandSeparators') {
      props1.value = String(props1.value).replace('.', decimalSeparator);
      props1.value = addThousandSeparators(props1.value, thousandSeparator);
    }
    if (isFunction(props1.formatter)) {
      props1.value = props1.formatter(props1.value);
    }
  }

  const [value, setValue] = useControllableValue<string | number | undefined>({
    ...omit(props1, ['onChange']),
    defaultValue:
      defaultValue != null && thousandSeparators
        ? addThousandSeparators(defaultValue, thousandSeparator)
        : defaultValue,
  });
  const [inputHeight, setInputHeight] = useState<number>();
  const [inputFocus, setInputFocus] = useState(false);
  const [textInputFontSize, setTextInputFontSize] = useState(
    StyleSheet.flatten(inputStyle)?.fontSize || token['--font-size-2']
  );

  const inputRef = useRef<TextInput>(null);
  const contentChanged = React.useRef<boolean>(false);

  const statusStyle = {
    error: styles.inputWrapperError,
  };

  const focus = () => {
    if (!editable) {
      return;
    }

    inputRef.current?.focus();
  };

  const formatValue = useMemoizedFn(
    (inputValue: string | number, trigger = 'onBlur') => {
      if (isFunction(formatter) && trigger === formatTrigger) {
        return formatter(inputValue);
      }

      if (formatter === 'thousandSeparators' && inputValue != null) {
        return addThousandSeparators(inputValue, thousandSeparator);
      }

      return inputValue;
    }
  );

  const handleChange = useMemoizedFn(
    (text: string, trigger?: InputFormatTrigger) => {
      if (text.length > maxLength) return;
      contentChanged.current = true;
      // 添加输入长度超过某个字数时，字体变小的功能
      const arrLength1 = textInputLengthRange?.length || 0;
      const arrLength2 = fontSizeRange?.length || 0;
      if (
        arrLength2 === arrLength1 &&
        bizInputType === 'amount' &&
        arrLength1 !== 0 &&
        arrLength2 !== 0
      ) {
        for (let i = 0; i < arrLength1; i++) {
          const inputRange = textInputLengthRange?.[i] || 0;
          const preInputRange = textInputLengthRange?.[i - 1] || 0;
          const sizeRange = fontSizeRange?.[i] || 0;
          if (text.length <= inputRange && text.length > preInputRange) {
            setTextInputFontSize(sizeRange);
            break;
          }
        }
      }

      let newValue: string | number = text;
      if (type === 'number' || type === 'digit') {
        const isNumber = type === 'number';
        newValue = formatNumber(
          newValue,
          isNumber,
          isNumber,
          decimalSeparator,
          precision
        );
      }
      newValue = formatValue(newValue, trigger);
      setValue(newValue);
      const value = newValue as string;
      if (isFunction(parser)) {
        return propsOnChange?.(parser(value));
      }
      if (autoTransformToNumber && formatter === 'thousandSeparators') {
        return propsOnChange?.(
          value
            .replace(new RegExp(`\\${thousandSeparator}`, 'g'), '')
            .replace(new RegExp(`\\${decimalSeparator}`, 'g'), '.')
        );
      }
      propsOnChange?.(value);
    }
  );

  const onChange = useMemoizedFn(({ nativeEvent }: InputChangeEvent) => {
    handleChange(nativeEvent.text, 'onChange');
  });

  const getKeyboardType = (): KeyboardTypeOptions | undefined => {
    if (type === 'digit' || type === 'number') return 'numeric';
    if (type === 'tel') return 'phone-pad';
    return undefined;
  };

  const handleBlur = useMemoizedFn((e: InputFocusEvent) => {
    setInputFocus(false);
    propsOnBlur?.(e);
  });

  const handleFocus = useMemoizedFn((e: InputFocusEvent) => {
    setInputFocus(true);
    propsOnFocus?.(e);
  });

  const handleKeyPress = useMemoizedFn((e: KeyPressEvent) => {
    props.onKeyPress?.(e);
  });

  const handleContentSizeChange = useMemoizedFn(
    (event: ContentSizeChangeEvent) => {
      if (!contentChanged.current) return;
      let newHeight = singleRowHeight;
      if (autoSize) {
        const {
          minHeight = singleRowHeight,
          maxHeight = event.nativeEvent.contentSize.height,
        } = isObject(autoSize) ? autoSize : {};
        newHeight = Math.max(minHeight, maxHeight);
        if (
          Platform.OS === 'ios' &&
          event.nativeEvent.contentSize.height >= singleRowHeight
        ) {
          newHeight += 20;
        }
      } else if (rows > 1) {
        newHeight = rows * singleRowHeight;
      }
      setInputHeight(newHeight);
    }
  );

  const getHeight = useMemoizedFn(() => {
    if (inputHeight) return inputHeight;
    return rows * singleRowHeight;
  });

  const showCustomPlaceholder = value == null || `${value}`.length === 0;
  const editable = !(disabled || readOnly || loading);
  const harmonyNotEditable =
    PlatformOS.isHarmony && !showCustomPlaceholder && !editable;
  const renderInput = () => {
    return (
      <View
        style={StyleSheet.flatten([
          styles.inputWrapper,
          formatter === 'unit' && !prefix && { marginTop: 5 },
          {
            paddingRight: showClear
              ? token['--font-size-3'] + token['--spacing-2']
              : 0,
          },
          inputWrapper,
        ])}
      >
        <TextInput
          ref={inputRef}
          underlineColorAndroid="transparent"
          selectionColor={token['--color-primary-6']}
          {...restProps}
          value={loading ? '' : toString(value)}
          onChange={onChange}
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          editable={harmonyNotEditable ? true : editable}
          maxLength={maxLength}
          numberOfLines={rows}
          multiline={!!autoSize || rows > 1}
          style={StyleSheet.flatten([
            styles.input,
            disabled && styles.inputDisabled,
            { textAlign: align },
            {
              fontSize: textInputFontSize,
            },
            inputStyle,
          ])}
          keyboardType={getKeyboardType()}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
          onContentSizeChange={handleContentSizeChange}
          secureTextEntry={type === 'password'}
          placeholder={placeholder} // 原生提示，自定义对齐需要
          placeholderTextColor={'#0000'} // 原生提示隐藏
          blurOnSubmit
        />
        {harmonyNotEditable && <View style={styles.harmonyNotEditable} />}
        {showCustomPlaceholder && (
          <TouchableOpacity
            disabled={disabled}
            activeOpacity={1.0}
            onPress={() => focus()}
            style={StyleSheet.flatten([
              styles.placeholderWrapper,
              {
                bottom: Platform.select({
                  android: 0,
                  ios: 1,
                }),
              },
              placeholderWrapper,
            ])}
          >
            <Text
              numberOfLines={rows}
              style={StyleSheet.flatten([
                styles.placeHolderTextStyle,
                !!props.placeholderTextColor && {
                  color: props.placeholderTextColor,
                },
                readOnly && styles.placeholderReadonly,
                disabled && styles.placeholderDisabled,
                placeholderStyle,
              ])}
            >
              {loading ? '' : placeholder}
            </Text>
          </TouchableOpacity>
        )}
        <InputLoading
          loading={loading}
          loadingProps={{
            ...loadingProps,
            style: StyleSheet.flatten([styles.loading, loadingProps?.style]),
          }}
        />
      </View>
    );
  };

  const handleClear = useMemoizedFn(() => {
    setValue(undefined);
    // @ts-ignore
    propsOnChange?.(undefined);
    inputRef.current?.clear();
    props.onClear?.();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  });

  useImperativeHandle(ref, () => ({
    focus: () => focus(),
    blur: () => inputRef.current?.blur(),
    clear: () => handleClear(),
  }));

  const showClear = useMemo(() => {
    const trigger =
      clearTrigger === 'always' ||
      (clearTrigger === 'focus' && inputFocus) ||
      Platform.OS === 'web';
    return (
      allowClear &&
      trigger &&
      !disabled &&
      !readOnly &&
      value !== '' &&
      value !== undefined
    );
  }, [value, allowClear, inputFocus, disabled, readOnly, clearTrigger]);

  const renderClearIcon = () => {
    return (
      <ShouldRender condition={!!showClear}>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={1}
          onPress={handleClear}
          style={StyleSheet.flatten([
            styles.clearIcon,
            suffix ? { right: 0 } : {},
          ])}
        >
          <IconXClosesmall1
            size={token['--font-size-3']}
            fillColor={token['--color-text-5']}
          />
        </TouchableOpacity>
      </ShouldRender>
    );
  };

  const renderPrefix = () => (
    <ShouldRender condition={!!prefix}>
      <View style={StyleSheet.flatten([styles.prefix, prefixStyle])}>
        {renderTextLikeJSX(prefix)}
      </View>
    </ShouldRender>
  );
  const renderSuffix = () => (
    <ShouldRender condition={!!suffix}>
      {/* 兼容atta-app项目，大版本升级Input样式问题 */}
      <View
        style={StyleSheet.flatten([
          styles.suffix,
          allowClear && { marginLeft: token['--spacing-3'] }, // 距离清空按钮为16, 默认为8
          { height: getHeight(), justifyContent: 'center' },
          suffixStyle,
        ])}
      >
        {renderTextLikeJSX(suffix)}
      </View>
    </ShouldRender>
  );

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={1}
      style={StyleSheet.flatten([
        styles.wrapper,
        disabled && styles.inputWrapperDisabled,
        { height: getHeight() },
        style,
      ])}
      onPress={() => autoPressFocus && editable && focus()}
    >
      <ShouldRender condition={!borderNone}>
        <View
          style={StyleSheet.flatten([
            styles.inputBorder,
            disabled && styles.inputWrapperDisabled,
            inputFocus && styles.inputWrapperFocus,
            status && statusStyle[status],
          ])}
        />
      </ShouldRender>

      {renderPrefix()}

      <View style={StyleSheet.flatten([styles.unitWrapper])}>
        {renderInput()}
        {renderClearIcon()}
      </View>

      {renderSuffix()}
    </TouchableOpacity>
  );
});

export default BaseInput;
