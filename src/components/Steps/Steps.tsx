import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StepProps, StepsProps } from './interface';
import StepHorizontal from './StepHorizontal';
import StepVertical from './StepVertical';
import createStyle from './styles/steps.style';
import { useTheme } from '../Theme/Theme';

const Steps: React.FC<StepsProps> = ({
  style,
  current = -1,
  data: propsData,
  direction = 'horizontal',
  collapse: propsCollapse,
  reverse: propsReverse,
}) => {
  const token = useTheme();
  const styles = createStyle(token);

  const collapse = direction === 'horizontal' && propsCollapse;

  const Step = direction === 'horizontal' ? StepHorizontal : StepVertical;
  const wrapperStyle =
    direction === 'horizontal'
      ? styles.wrapperHorizontal
      : styles.wrapperVertical;

  const reverse = propsReverse && direction === 'vertical';
  const data = reverse ? propsData.reverse() : propsData;

  const inner = data.map((stepProps, dataIndex) => {
    const { status: propsStatus } = stepProps;
    let status: StepProps['status'] = 'wait';
    const index = reverse ? data.length - dataIndex - 1 : dataIndex;
    if (index < current) {
      status = 'finish';
    } else if (index === current) {
      status = 'process';
    }

    return (
      <Step
        key={index}
        isFirstChild={index === 0}
        isLastChild={index === data.length - 1}
        {...stepProps}
        status={propsStatus || status}
        collapse={!!collapse}
        reverse={!!reverse}
      />
    );
  });

  return (
    <View
      style={StyleSheet.flatten([
        wrapperStyle,
        collapse && styles.wrapperCollapse,
        style,
      ])}
    >
      {inner}
    </View>
  );
};

export default Steps;
