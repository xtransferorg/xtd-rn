import React from 'react';
import { ScrollView } from 'react-native';
import { Stepper, Button, Space } from '@xrnjs/ui';
import { StepperRef } from '../interface';
import { Card1 } from './basic';

const RefStepper: React.FC = () => {
  const stepper = React.useRef<StepperRef>(null);
  const onFocusPress = () => {
    stepper.current?.focus();
  };
  const onBlurPress = () => {
    stepper.current?.blur();
  };
  return (
    <ScrollView>
      <Card1 label="基本用法">
        <Space>
          <Stepper value={2.3} ref={stepper} />
          <Button onPress={onFocusPress}>主动获取焦点</Button>
          <Button onPress={onBlurPress}>主动失去焦点</Button>
        </Space>
      </Card1>
    </ScrollView>
  );
};

export default RefStepper;
