import React, { memo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import createStyle from './styles/index-bar.style';
import { useTheme } from '../Theme/Theme';

export interface ItemSeparatorProps {
  visible?: boolean;
  style?: StyleProp<ViewStyle>;
}
const ItemSeparator = (props: ItemSeparatorProps) => {
  const { visible = false, style } = props;
  const token = useTheme();
  const styles = createStyle(token);
  const display = visible ? 'flex' : 'none';

  return (
    <View style={StyleSheet.flatten([styles.separator, style, { display }])} />
  );
};

export default memo(ItemSeparator);
