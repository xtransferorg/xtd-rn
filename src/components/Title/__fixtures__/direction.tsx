import React from 'react';
import { Title, Space, Align } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import { Text } from 'react-native';

const DirectionDemo = () => {
  return (
    <Space>
      <Card>
        <Title
          description="副标题"
          extra={<Text style={styles.moreText}>更多</Text>}
          align={Align.top}
        >
          主标题
        </Title>
      </Card>
      <Card>
        <Title
          description="副标题"
          extra={<Text style={styles.moreText}>更多</Text>}
          align={Align.middle}
        >
          主标题
        </Title>
      </Card>
      <Card>
        <Title
          description="副标题"
          extra={<Text style={styles.moreText}>更多</Text>}
          align={Align.bottom}
        >
          主标题
        </Title>
      </Card>
    </Space>
  );
};

export default DirectionDemo;
