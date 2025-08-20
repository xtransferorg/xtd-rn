import React from 'react';
import { Text } from 'react-native';
import { CodeInput, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const CustomStyleDemo = () => {
  const handleComplete = (code: string) => {
    console.log('自定义样式验证码:', code);
  };

  return (
    <Card title="自定义样式">
      <Space>
        <Space>
          <Text style={styles.text}>自定义边框颜色</Text>
          <Text style={styles.description}>蓝色边框，红色聚焦状态</Text>
          <CodeInput
            cellCount={4}
            onComplete={handleComplete}
            cellStyle={styles.customCell}
            cellFocusStyle={styles.customFocusCell}
          />
        </Space>

        <Space>
          <Text style={styles.text}>自定义文本样式</Text>
          <Text style={styles.description}>绿色粗体文字</Text>
          <CodeInput
            cellCount={6}
            defaultValue="123"
            onComplete={handleComplete}
            cellTextStyle={styles.customText}
          />
        </Space>

        <Space>
          <Text style={styles.text}>组合自定义样式</Text>
          <Text style={styles.description}>综合自定义边框、聚焦和文本样式</Text>
          <CodeInput
            cellCount={5}
            onComplete={handleComplete}
            cellStyle={styles.customCell}
            cellFocusStyle={styles.customFocusCell}
            cellTextStyle={styles.customText}
          />
        </Space>
      </Space>
    </Card>
  );
};

export default CustomStyleDemo;
