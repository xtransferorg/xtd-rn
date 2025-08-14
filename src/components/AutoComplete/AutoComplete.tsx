import React, {
  useRef,
  useState,
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  isValidElement,
  useMemo,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { isNil } from 'lodash';

import createStyle from './styles/autocomplete.style';
import { useTheme } from '../Theme/Theme';
import {
  AutoCompleteProps,
  AutoCompleteOption,
  AutoCompleteRef,
} from './interface';
import { Input, InputInstance, HightLightText, ShouldRender } from '@xrnjs/ui';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';

const AutoComplete: ForwardRefRenderFunction<
  AutoCompleteRef,
  AutoCompleteProps
> = (props, ref) => {
  const {
    allowClear = false,
    autoFocus = false,
    defaultValue,
    value,
    options,
    disabled = false,
    highlighted = false,
    placeholder,
    defaultOpen = false,
    open,
    onChange,
    onSelect,
    onVisibleChange,
    onBlur,
    onFocus,
    style,
    inputStyle,
    optionsStyle,
    scrollViewStyle,
    optionStyle,
    optionLabelStyle,
    testID,
    placement = 'bottom',
    offset = 0,
    ...resProps
  } = props;
  const token = useTheme();
  const styles = createStyle(token);
  const [inputValue, setInputValue] = useState(defaultValue);
  const inputRef = useRef<InputInstance>(null);
  const { flatten } = StyleSheet;
  const [autoVisible, setAutoVisible] = useState(defaultOpen);
  const singleRowHeight = token[`--size-${resProps.size ?? 'default'}`];
  const [popoverHeight, changePopoverHeight] = useState(0);

  const changeAutoVisible = (isVisible: boolean) => {
    const currentVisible = open ?? autoVisible;
    if (currentVisible !== isVisible) {
      setAutoVisible(() => isVisible);
      onVisibleChange?.(isVisible);
    }
  };

  const onInputChange = (val: string) => {
    const currentVal = value ?? inputValue;
    if (val === currentVal) return; // 未改变，直接返回

    // 非受控？
    if (isNil(value)) {
      setInputValue(val);
    }

    onChange?.(val);
  };

  const onInputFocus = () => {
    isNil(open) && changeAutoVisible(true);
    onFocus?.();
  };

  const onInputBlur = () => {
    onBlur?.();
    isNil(open) && changeAutoVisible(false);
  };

  const onSelectItem = (item: AutoCompleteOption) => {
    onSelect?.(item.value, item);
    isNil(value) && onInputChange(item.value); // 非受控需要内部处理
    inputRef?.current?.blur?.(); // 选择后自动失焦
  };

  const renderInput = () => {
    return (
      <Input
        ref={inputRef}
        style={flatten([styles.input, inputStyle])}
        value={value ?? inputValue}
        testID={testID}
        allowClear={allowClear}
        clearTrigger={'always'}
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onInputChange}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
        {...resProps}
      />
    );
  };

  const renderTextLabel = ({
    text,
    highlight,
  }: {
    text: string;
    highlight?: string;
  }) => {
    return highlighted ? (
      <HightLightText
        text={text}
        highlight={highlight}
        style={flatten([styles.optionLabel, optionLabelStyle])}
      />
    ) : (
      <Text style={flatten([styles.optionLabel, optionLabelStyle])}>
        {text}
      </Text>
    );
  };

  const renderItem = (
    { label, value: optionValue }: AutoCompleteOption,
    index: number
  ) => {
    const showLabel = label ?? optionValue; // 无label时候使用value
    const currentValue = value ?? inputValue;
    const lastIndex = (options?.length ?? 0) - 1;
    return (
      <TouchableOpacity
        onPress={() => onSelectItem({ label, value: optionValue })}
        key={optionValue}
        testID={`${testID}-${optionValue}`}
      >
        <View
          style={flatten([
            styles.option,
            index === lastIndex && styles.optionLast,
            currentValue === showLabel && styles.optionSelect,
            optionStyle,
          ])}
        >
          {isValidElement(showLabel)
            ? showLabel
            : renderTextLabel({
                text: (showLabel ?? '') as string,
                highlight: currentValue,
              })}
        </View>
      </TouchableOpacity>
    );
  };

  const top = useMemo(() => {
    return placement === 'top'
      ? (popoverHeight + singleRowHeight - token['--spacing-2']) * -1 - offset
      : singleRowHeight + offset;
  }, [placement, options, popoverHeight]);

  const renderOptions = () => {
    const nativeGst = Gesture.Native()
      .shouldCancelWhenOutside(false) //Android true:underlying handler will activate unconditionally when in BEGAN or UNDETERMINED state
      .disallowInterruption(true); // Android true: cancels all other gesture handlers when this NativeViewGestureHandler receives an ACTIVE state event.
    return (
      <ShouldRender condition={(open ?? autoVisible) && !!options?.length}>
        {/* https://docs.swmansion.com/react-native-gesture-handler/docs/1.x/#js */}
        <GestureHandlerRootView
          style={flatten([
            styles.options,
            optionsStyle,
            {
              top: top,
            },
          ])}
        >
          <GestureDetector gesture={nativeGst}>
            <ScrollView
              onLayout={(e) => changePopoverHeight(e.nativeEvent.layout.height)}
              style={[styles.optionsScroll, scrollViewStyle]}
              keyboardShouldPersistTaps="handled"
              nestedScrollEnabled={true} // Android（5.0以上）支持嵌套滚动 iOS默认支持
            >
              {options?.map?.(renderItem)}
            </ScrollView>
          </GestureDetector>
        </GestureHandlerRootView>
      </ShouldRender>
    );
  };

  useImperativeHandle(ref, () => {
    return {
      blur: () => inputRef?.current?.blur?.(),
      focus: () => inputRef?.current?.focus?.(),
      clear: () => inputRef?.current?.clear?.(),
    };
  });

  return (
    <View style={flatten([styles.wrapper, style])}>
      {renderInput()}
      {renderOptions()}
    </View>
  );
};

export default forwardRef(AutoComplete);
