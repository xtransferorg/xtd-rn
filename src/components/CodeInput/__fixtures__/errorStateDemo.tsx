import React from 'react';
import { Text } from 'react-native';
import { CodeInput, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const ErrorStateDemo = () => {
  const handleComplete = (code: string) => {
    console.log('错误状态验证码:', code);
  };

  return (
    <Card title="错误状态">
      <Space>
        <Space>
          <Text style={styles.text}>普通错误状态</Text>
          <Text style={styles.description}>验证失败时的错误显示</Text>
          <CodeInput
            type="error"
            cellCount={6}
            defaultValue="123"
            onComplete={handleComplete}
          />
        </Space>

        <Space>
          <Text style={styles.text}>错误状态 + 掩码</Text>
          <Text style={styles.description}>掩码模式下的错误状态</Text>
          <CodeInput
            mask
            type="error"
            cellCount={6}
            defaultValue="123"
            onComplete={handleComplete}
          />
        </Space>

        <Space>
          <Text style={styles.text}>4位错误状态</Text>
          <Text style={styles.description}>短验证码的错误显示</Text>
          <CodeInput
            type="error"
            cellCount={4}
            defaultValue="12"
            onComplete={handleComplete}
          />
        </Space>
      </Space>
    </Card>
  );
};

export default ErrorStateDemo;
