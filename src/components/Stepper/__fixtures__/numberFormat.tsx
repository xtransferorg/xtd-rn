import React from 'react';
import { ScrollView } from 'react-native';
import { Stepper, Space } from '@xrnjs/ui';
import Card from '_global/Card';

const NumberFormat: React.FC = () => {
  return (
    <ScrollView>
      <Space direction="vertical" gap="l">
        <Card title="整数限制">
          <Space direction="vertical">
            <Stepper integer defaultValue={1} />
            <Stepper integer step={2} defaultValue={10} />
          </Space>
        </Card>

        <Card title="小数位数">
          <Space direction="vertical">
            <Stepper digits={2} defaultValue={1.234} />
            <Stepper digits={3} step={0.001} defaultValue={0.123} />
            <Stepper digits={1} defaultValue={5.67} />
          </Space>
        </Card>

        <Card title="小数点分隔符">
          <Space direction="vertical">
            <Stepper decimalSeparator="," defaultValue={1.23} />
            <Stepper decimalSeparator="." defaultValue={4.56} />
          </Space>
        </Card>

        <Card title="允许为空">
          <Space direction="vertical">
            <Stepper allowEmpty placeholder="可以为空" />
            <Stepper allowEmpty defaultValue={5} />
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default NumberFormat;
