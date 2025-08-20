import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { useTheme } from '../Theme';
import BaseInput from './BaseInput';
import type { InputProps, InputInstance } from './interface';
import createStyles from './styles/input.style';

const Input = forwardRef<InputInstance, InputProps>((props, ref) => {
  const input = <BaseInput {...props} ref={ref} />;
  const token = useTheme();
  const styles = createStyles(token);

  return props.formatter === 'unit' ? (
    <View style={styles.unitInputWrapper}>{input}</View>
  ) : (
    input
  );
});

export default Input;
