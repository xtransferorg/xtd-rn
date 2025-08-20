import React, { useRef, useState } from 'react';
import { Text } from 'react-native';
import { CodeInput, Button, Space, CodeInputRef } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const InteractiveDemo = () => {
  const codeInputRef = useRef<CodeInputRef>(null);
  const [currentValue, setCurrentValue] = useState('');

  const handleComplete = (code: string) => {
    console.log('验证码输入完成:', code);
  };

  const handleChange = (code: string) => {
    setCurrentValue(code);
    console.log('验证码变化:', code);
  };

  const handleFillRandom = () => {
    const code = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, '0');
    codeInputRef?.current?.setCodeValue(code);
  };

  const handleClear = () => {
    codeInputRef?.current?.setCodeValue('');
  };

  const handleFillDemo = () => {
    codeInputRef?.current?.setCodeValue('123456');
  };

  return (
    <Card title="交互功能">
      <Space>
        <Space>
          <Text style={styles.text}>手动填充验证码</Text>
          <Text style={styles.description}>通过按钮操作验证码输入框</Text>
          <CodeInput
            ref={codeInputRef}
            defaultValue="123456"
            onComplete={handleComplete}
          />
          <Space direction="horizontal" wrap>
            <Button onPress={handleFillRandom} style={styles.button}>
              随机填充
            </Button>
            <Button onPress={handleFillDemo} style={styles.button}>
              填充示例
            </Button>
            <Button onPress={handleClear} style={styles.button}>
              清空
            </Button>
          </Space>
        </Space>

        <Space>
          <Text style={styles.text}>实时监听变化</Text>
          <Text style={styles.description}>
            当前值: {currentValue || '(空)'}
          </Text>
          <CodeInput cellCount={4} onChange={handleChange} />
        </Space>
      </Space>
    </Card>
  );
};

export default InteractiveDemo;
