import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { Stepper, Button, Space } from '@xrnjs/ui';
import { StepperRef } from '../interface';
import Card from '_global/Card';

const RefUsage: React.FC = () => {
  const stepperRef1 = useRef<StepperRef>(null);
  const stepperRef2 = useRef<StepperRef>(null);

  const handleFocus1 = () => {
    stepperRef1.current?.focus();
  };

  const handleBlur1 = () => {
    stepperRef1.current?.blur();
  };

  const handleFocus2 = () => {
    stepperRef2.current?.focus();
  };

  const handleBlur2 = () => {
    stepperRef2.current?.blur();
  };

  return (
    <ScrollView>
      <Space direction="vertical" gap="l">
        <Card title="Ref 控制焦点">
          <Space direction="vertical">
            <Stepper ref={stepperRef1} defaultValue={5} />
            <Space direction="horizontal">
              <Button onPress={handleFocus1}>获取焦点</Button>
              <Button onPress={handleBlur1}>失去焦点</Button>
            </Space>
          </Space>
        </Card>

        <Card title="多个 Stepper Ref 控制">
          <Space direction="vertical">
            <Stepper ref={stepperRef2} defaultValue={10} />
            <Space direction="horizontal">
              <Button onPress={handleFocus2}>第二个获取焦点</Button>
              <Button onPress={handleBlur2}>第二个失去焦点</Button>
            </Space>
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default RefUsage;
