import React from 'react';
import { Text, View } from 'react-native';
import { CodeInput, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const ExtraDemo = () => {
  const handleComplete = (code: string) => {
    console.log('扩展功能验证码:', code);
  };

  const handleResend = () => {
    console.log('重新发送验证码');
  };

  const handleHelp = () => {
    console.log('获取帮助');
  };

  return (
    <Card title="扩展功能">
      <Space>
        <Space>
          <Text style={styles.text}>带操作按钮</Text>
          <Text style={styles.description}>验证码输入框下方显示额外操作</Text>
          <CodeInput
            cellCount={6}
            onComplete={handleComplete}
            extra={
              <View style={styles.extraContent}>
                <Button onPress={handleResend}>重新发送验证码</Button>
              </View>
            }
          />
        </Space>

        <Space>
          <Text style={styles.text}>多个操作按钮</Text>
          <Text style={styles.description}>提供多种操作选项</Text>
          <CodeInput
            cellCount={4}
            onComplete={handleComplete}
            extra={
              <Space direction="horizontal" wrap style={styles.extraContent}>
                <Button onPress={handleResend}>重发</Button>
                <Button onPress={handleHelp}>帮助</Button>
              </Space>
            }
          />
        </Space>

        <Space>
          <Text style={styles.text}>自定义扩展内容</Text>
          <Text style={styles.description}>可以放置任意自定义内容</Text>
          <CodeInput
            cellCount={8}
            onComplete={handleComplete}
            extra={
              <View style={styles.extraContent}>
                <Text style={styles.description}>
                  验证码已发送至您的手机，请注意查收
                </Text>
                <Text style={[styles.description, { marginTop: 4 }]}>
                  60秒后可重新发送
                </Text>
              </View>
            }
          />
        </Space>
      </Space>
    </Card>
  );
};

export default ExtraDemo;
