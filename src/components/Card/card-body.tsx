import { isNumber, isBoolean } from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { getDefaultValue } from '../../utils/helpers';
import { useTheme } from '../Theme';
import type { Token } from '../Theme/constant';
import type { CardBodyProps } from './interface';

const getGapValue = (v: boolean | number | undefined, initialValue: number) => {
  return typeof v === 'boolean' ? (v ? initialValue : 0) : v;
};

export const varCreator = (token: Token) => {
  return {
    blank_size_s: token['--spacing-2'],
    blank_size_m: token['--spacing-3'],
    blank_size_l: token['--spacing-4'],
  };
};

const CardBody: React.FC<CardBodyProps> = ({
  padding = true,
  children,
  style,
  size = 'm',
  ...restProps
}) => {
  const token = useTheme();

  const config =
    isBoolean(padding) || isNumber(padding)
      ? {
          left: padding,
          right: padding,
          top: padding,
          bottom: padding,
        }
      : {
          left: getDefaultValue(padding.left, true),
          right: getDefaultValue(padding.right, true),
          top: getDefaultValue(padding.top, true),
          bottom: getDefaultValue(padding.bottom, true),
        };

  // 重置值
  const defaultGap = varCreator(token)[`blank_size_${size}`];
  const left = getGapValue(config.left, defaultGap);
  const right = getGapValue(config.right, defaultGap);
  const top = getGapValue(config.top, defaultGap);
  const bottom = getGapValue(config.bottom, defaultGap);

  return (
    <View
      {...restProps}
      style={[
        {
          marginLeft: left,
          marginRight: right,
          marginTop: top,
          marginBottom: bottom,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default CardBody;
