import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { BOLD } from '../../common/weight';
import { HightLightTextProps } from './interface';

const createStyle = (color = '#FF7A00') => {
  return StyleSheet.create({
    text: {
      fontWeight: BOLD,
      color: color,
    },
  });
};

const HightLightText = ({
  text,
  highlight,
  style,
  ...restProps
}: HightLightTextProps) => {
  const regStr = highlight?.replace?.(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); // 特殊字符处理
  const parts = highlight
    ? text.split(new RegExp(`(${regStr})`, 'gi'))
    : [text]; // 之前的有问题，空字符串的时候会分割成字符串长度的份数，对性能影响较大（text内容越多，影响越大）
  const styles = createStyle();

  return (
    <Text {...restProps}>
      {parts.map((part, i) => (
        <Text
          key={i}
          style={[
            style,
            part.toLocaleLowerCase() === highlight?.toLocaleLowerCase()
              ? styles.text
              : null,
          ]}
        >
          {part}
        </Text>
      ))}
    </Text>
  );
};

export default HightLightText;
