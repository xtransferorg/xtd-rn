import React from 'react';
import { Text } from 'react-native';
import { CodeInput, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const MaskDemo = () => {
  const handleComplete = (code: string) => {
    console.log('掩码验证码:', code);
  };

  return (
    <Card title="掩码功能">
      <Space>
        <Space>
          <Text style={styles.text}>6位掩码</Text>
          <Text style={styles.description}>
            输入内容会被掩码符号替代，保护隐私
          </Text>
          <CodeInput mask defaultValue="123456" onComplete={handleComplete} />
        </Space>

        <Space>
          <Text style={styles.text}>4位掩码</Text>
          <Text style={styles.description}>短验证码的掩码显示</Text>
          <CodeInput
            mask
            cellCount={4}
            defaultValue="1234"
            onComplete={handleComplete}
          />
        </Space>

        <Space>
          <Text style={styles.text}>8位掩码</Text>
          <Text style={styles.description}>长验证码的掩码显示</Text>
          <CodeInput
            mask
            cellCount={8}
            defaultValue="12345678"
            onComplete={handleComplete}
          />
        </Space>
      </Space>
    </Card>
  );
};

export default MaskDemo;
