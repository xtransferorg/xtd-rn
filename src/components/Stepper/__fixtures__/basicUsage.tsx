import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Stepper, Space } from '@xrnjs/ui';
import Card from '_global/Card';

const BasicUsage: React.FC = () => {
  const [value1, setValue1] = useState<number>(1);

  return (
    <ScrollView>
      <Space direction="vertical" gap="l">
        <Card title="基本用法">
          <Space direction="vertical">
            <Stepper defaultValue={1} />
            <Stepper value={value1} onChange={(val) => val && setValue1(val)} />
            <Stepper placeholder="请输入数字" />
          </Space>
        </Card>

        <Card title="不同大小">
          <Space direction="vertical">
            <Stepper size="default" defaultValue={1} />
            <Stepper size="large" defaultValue={2} />
          </Space>
        </Card>

        <Card title="步长设置">
          <Space direction="vertical">
            <Stepper step={0.1} defaultValue={1} />
            <Stepper step={5} defaultValue={10} />
            <Stepper step={10} defaultValue={100} />
          </Space>
        </Card>

        <Card title="最大最小值">
          <Space direction="vertical">
            <Stepper min={0} max={10} defaultValue={5} />
            <Stepper min={-5} max={5} defaultValue={0} />
            <Stepper min={100} max={1000} step={100} defaultValue={500} />
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default BasicUsage;
