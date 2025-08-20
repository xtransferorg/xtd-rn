import React from 'react';
import { ScrollView } from 'react-native';
import { Stepper, Space } from '@xrnjs/ui';
import { IconCALike1, IconXStar1 } from '../../../icons/index';
import Card from '_global/Card';

const CustomStyle: React.FC = () => {
  return (
    <ScrollView>
      <Space direction="vertical" gap="l">
        <Card title="自定义宽度">
          <Space direction="vertical">
            <Stepper inputWidth={80} defaultValue={1} />
            <Stepper inputWidth={120} defaultValue={2} />
            <Stepper inputWidth={150} defaultValue={3} />
          </Space>
        </Card>

        <Card title="自定义图标">
          <Space direction="vertical">
            <Stepper
              prefixIcon={<IconCALike1 size={16} color="#ff4d4f" />}
              suffixIcon={<IconXStar1 size={16} color="#faad14" />}
              defaultValue={5}
            />
            <Stepper
              prefixIcon={<IconXStar1 size={16} color="#52c41a" />}
              defaultValue={3}
            />
            <Stepper
              suffixIcon={<IconCALike1 size={16} color="#1890ff" />}
              defaultValue={7}
            />
          </Space>
        </Card>

        <Card title="自定义样式">
          <Space direction="vertical">
            <Stepper
              style={{
                borderColor: '#ff4d4f',
                borderWidth: 2,
                borderRadius: 8,
              }}
              defaultValue={1}
            />
            <Stepper
              style={{
                backgroundColor: '#f0f0f0',
                borderColor: '#d9d9d9',
              }}
              defaultValue={2}
            />
          </Space>
        </Card>

        <Card title="自定义光标（IOS）颜色">
          <Space direction="vertical">
            <Stepper selectionColor="#ff4d4f" defaultValue={1} />
            <Stepper selectionColor="#52c41a" defaultValue={2} />
            <Stepper selectionColor="#1890ff" defaultValue={3} />
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default CustomStyle;
