import React from 'react';
import { View, Text, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { isNil } from 'lodash';
import { BadgeProps } from './interface';
import { iosOrAndroidOrHarmony } from '../../utils/index';
import { useTheme } from '../Theme';
import createStyle from './style/badge.style';

const Badge = ({
  custom,
  children,
  count,
  dot = false,
  max = 99,
  color,
  countStyle,
  countTextStyle,
  countContainerStyle,
  loading = false,
  showZero = false,
  offset,
  status = 'error',

  ...restProps
}: BadgeProps) => {
  const token = useTheme();
  const styles = createStyle(token);

  const deviceRadius = iosOrAndroidOrHarmony(
    token['--border-radius-small'],
    token['--border-radius-medium'],
    token['--border-radius-small']
  );
  const customStyle = {
    borderTopLeftRadius: deviceRadius,
    borderTopRightRadius: deviceRadius,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: deviceRadius,
  };

  const defaultOffset = dot ? [4, -4] : [9, -8];
  const realOffset = (offset || defaultOffset) as [number, number];

  if (!isNil(max) && typeof count === 'number' && count > max) {
    count = `${max}+`;
  }

  const hasCount = !isNil(count) && (count === 0 ? showZero : true);

  const statusMap = {
    primary: token['--color-primary-6'],
    success: token['--color-success-6'],
    warning: token['--color-warning-6'],
    error: token['--color-danger-6'],
  };
  const countStyles: StyleProp<ViewStyle> = StyleSheet.flatten([
    styles.count,
    { backgroundColor: color || statusMap[status] },
    dot ? styles.count_dot : null,
    !isNil(children)
      ? [
          styles.count_fixed,
          dot ? styles.count_dot_fixed : null,
          realOffset
            ? {
                transform: [
                  { translateX: realOffset[0] },
                  { translateY: realOffset[1] },
                ],
              }
            : null,
        ]
      : [],
    custom ? customStyle : { borderRadius: token['--border-radius-max'] },
    countStyle,
    countContainerStyle,
  ]);

  const badgeJSX =
    !loading && (hasCount || dot) ? (
      <View style={countStyles}>
        {dot ? null : (
          <Text style={StyleSheet.flatten([styles.count_text, countTextStyle])}>
            {count}
          </Text>
        )}
      </View>
    ) : null;

  return (
    <View {...restProps} collapsable={false}>
      {badgeJSX}
      {children}
    </View>
  );
};

export default Badge;
