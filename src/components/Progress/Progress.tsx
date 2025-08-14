import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ShouldRender } from '@xrnjs/ui';
import { ProgressProps } from './interface';
import LineProgress from './Line';
import CircleProgress from './Circle';

import createStyle from './styles/progress.style';
import { useTheme } from '../Theme/Theme';

const Progress = (props: ProgressProps) => {
  const { style, type, children, ...restProps } = props;

  const token = useTheme();
  const styles = createStyle(token);

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      <ShouldRender condition={type === 'circle'}>
        <CircleProgress {...restProps}>{children}</CircleProgress>
      </ShouldRender>
      <ShouldRender condition={type === 'line'}>
        <LineProgress {...restProps}>{children}</LineProgress>
      </ShouldRender>
    </View>
  );
};

export default Progress;
