import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Stepper, Space, Button } from '@xrnjs/ui';
import Card from '_global/Card';

const StateControl: React.FC = () => {
  const [value1, setValue1] = useState<number>(5);

  return (
    <ScrollView>
      <Space direction="vertical" gap="l">
        <Card title="禁用状态">
          <Space direction="vertical">
            <Stepper disabled defaultValue={5} />
            <Stepper disableMinus defaultValue={1} />
            <Stepper disablePlus defaultValue={10} />
            <Stepper inputReadOnly defaultValue={7} />
          </Space>
        </Card>

        <Card title="错误状态">
          <Space direction="vertical">
            <Stepper status="error" defaultValue={5} />
            <Stepper status="error" placeholder="错误状态" />
          </Space>
        </Card>

        <Card title="受控模式">
          <Space direction="vertical">
            <Stepper value={value1} onChange={(val) => val && setValue1(val)} />
            <Button onPress={() => setValue1(10)}>设置为 10</Button>
            <Button onPress={() => setValue1(0)}>重置为 0</Button>
          </Space>
        </Card>

        <Card title="立即触发">
          <Space direction="vertical">
            <Stepper
              immediate
              defaultValue={5}
              onChange={(val) => console.log('立即触发:', val)}
            />
            <Stepper
              defaultValue={3}
              onChange={(val) => console.log('失焦触发:', val)}
            />
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default StateControl;
