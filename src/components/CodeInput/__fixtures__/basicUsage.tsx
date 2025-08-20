import React from 'react';
import { Text } from 'react-native';
import { CodeInput, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const BasicUsage = () => {
  const handleComplete = (code: string) => {
    console.log('验证码输入完成:', code);
  };

  return (
    <Card title="基础用法">
      <Space>
        <Space>
          <Text style={styles.text}>默认6位验证码</Text>
          <Text style={styles.description}>最常用的验证码输入场景</Text>
          <CodeInput onComplete={handleComplete} />
        </Space>

        <Space>
          <Text style={styles.text}>4位验证码</Text>
          <Text style={styles.description}>适用于短验证码场景</Text>
          <CodeInput cellCount={4} onComplete={handleComplete} />
        </Space>

        <Space>
          <Text style={styles.text}>8位验证码</Text>
          <Text style={styles.description}>适用于长验证码场景</Text>
          <CodeInput cellCount={8} onComplete={handleComplete} />
        </Space>
      </Space>
    </Card>
  );
};

export default BasicUsage;
