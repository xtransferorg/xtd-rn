import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FieldTitleProps } from './interface';
import createStyle from './styles/field-title.sytle';
import { useTheme } from '../Theme';

const FieldTitle: React.FC<FieldTitleProps> = ({
  style,
  headerStyle,
  label,
  labelStyle,
}) => {
  const token = useTheme();
  const styles = createStyle(token);

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      <View style={StyleSheet.flatten([styles.header, headerStyle])} />
      <Text style={StyleSheet.flatten([styles.label, labelStyle])}>
        {label}
      </Text>
    </View>
  );
};

export default FieldTitle;
