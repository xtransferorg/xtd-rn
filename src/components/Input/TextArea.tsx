import React, { forwardRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../Theme';
import BaseInput from './BaseInput';
import { InputInstance, TextAreaProps } from './interface';
import createStyles from './styles/textarea.style';
import { useControllableValue } from 'ahooks';

const TextArea = forwardRef<InputInstance, TextAreaProps>((props, ref) => {
  const { showCount = false, maxLength, rows = 2, inputStyle, style } = props;
  const [value, setValue] = useControllableValue<string>(props);
  const token = useTheme();
  const styles = createStyles(token);

  const renderWordLimit = () => {
    const count = (value ? `${value}` : '').length;
    if (maxLength) return `${count}/${maxLength}`;
    return null;
  };

  return (
    <View style={styles.container}>
      <BaseInput
        allowClear={false}
        {...props}
        value={value}
        onChange={setValue}
        rows={rows}
        ref={ref}
        style={StyleSheet.flatten([styles.inputWrapper, style])}
        inputStyle={StyleSheet.flatten([styles.inputStyle, inputStyle])}
        placeholderStyle={styles.inputStyle}
      />
      {!!showCount && <Text style={styles.count}>{renderWordLimit()}</Text>}
    </View>
  );
});

export default TextArea;
