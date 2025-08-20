import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react';
import { View, Text, Platform } from 'react-native';
import { ShouldRender } from '@xrnjs/ui';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';
import codeInputstyles from './styles/codeInput';
import { useTheme } from '../Theme/Theme';
import { CellRenderOptions, CodeInputProps, CodeInputRef } from './interface';
import { useControllableValue } from 'ahooks';

const DEFAULT_CELL_COUNT = 6;

export default forwardRef<CodeInputRef, CodeInputProps>((props, outerRef) => {
  const {
    type = '',
    defaultValue = '',
    cellCount = DEFAULT_CELL_COUNT,
    mask,
    extra,
    autoFocus = true,
    onComplete,
    cellStyle: customCellStyle,
    cellFocusStyle: customCellFocusStyle,
    cellTextStyle: customCellTextStyle,
    containWidth,
  } = props;

  const [value, setValue] = useControllableValue(props);
  const ref = useBlurOnFulfill({ value, cellCount });
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const token = useTheme();
  const styles = codeInputstyles(token, cellCount, containWidth);

  const isError = useMemo(() => {
    return type === 'error';
  }, [type]);

  const MaskSymbolIOS = useMemo(
    () => <Text style={styles.maskSymbolIOS}>•</Text>,
    [styles]
  );

  const MaskSymbolAndroid = useMemo(
    () => <View style={styles.maskSymbolAndroid} />,
    [styles]
  );

  const setCodeValue = useCallback(
    (val: string) => {
      setValue(val);
      if (val.length === cellCount) {
        onComplete?.(val);
      }
    },
    [setValue, onComplete]
  );

  const handleChange = (code: string) => {
    setCodeValue(code);
  };

  const cellStyle = Object.assign({}, styles.cell, customCellStyle);
  const cellFocusStyle = Object.assign(
    {},
    styles.focusCell,
    customCellFocusStyle
  );
  const cellTextStyle = Object.assign({}, styles.cellText, customCellTextStyle);

  useImperativeHandle(outerRef, () => ({
    setCodeValue,
  }));

  useEffect(() => {
    setCodeValue(defaultValue);
  }, [setCodeValue, defaultValue]);

  const getTextChild = (options: CellRenderOptions) => {
    const { index, symbol, isFocused } = options;
    if (symbol) {
      if (mask) {
        return (
          <MaskSymbol
            maskSymbol={
              Platform.OS === 'ios'
                ? (MaskSymbolIOS as unknown as string)
                : (MaskSymbolAndroid as unknown as string)
            }
            isLastFilledCell={isLastFilledCell({ index, value })}
            delay={0}
          >
            {symbol}
          </MaskSymbol>
        );
      }

      return <Text style={cellTextStyle}>{symbol}</Text>;
    }

    if (isFocused) {
      return (
        <Text style={styles.cursor}>
          <Cursor />
        </Text>
      );
    }

    return null;
  };

  const renderCell = (options: CellRenderOptions) => {
    const { index, symbol, isFocused } = options;

    return (
      <View
        style={[
          cellStyle,
          isFocused && cellFocusStyle,
          symbol ? styles.fillCell : {},
          isError ? styles.errorCell : {},
        ]}
        key={index}
      >
        <Text onLayout={getCellOnLayoutHandler(index)}>
          {getTextChild(options)}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.root]}>
      <CodeField
        ref={ref}
        {...codeFieldProps}
        value={value}
        onChangeText={handleChange}
        cellCount={cellCount}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoFocus={autoFocus && defaultValue?.length !== cellCount}
        renderCell={renderCell}
      />

      <ShouldRender condition={!!extra}>
        <View style={styles.extra}>{extra}</View>
      </ShouldRender>
    </View>
  );
});
