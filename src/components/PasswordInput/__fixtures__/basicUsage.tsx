import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { PasswordInput, Field, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage: FC = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [secureState, setSecureState] = useState(true);

  return (
    <Card title="基础用法">
      <Text style={styles.description}>
        PasswordInput 是基于 Input
        组件封装的密码输入框，提供了密码显示/隐藏切换功能。
      </Text>

      <Space direction="vertical" gap="m">
        <Field label="基本密码输入">
          <PasswordInput
            value={password1}
            placeholder="请输入密码"
            onChange={setPassword1}
            onChangeSecureTextEntry={(secure) => {
              console.log('密码显示状态:', secure ? '隐藏' : '显示');
            }}
          />
        </Field>

        <Field label="带清除按钮的密码输入">
          <PasswordInput
            value={password2}
            placeholder="请输入密码"
            allowClear
            onChange={setPassword2}
            onChangeSecureTextEntry={(secure) => {
              console.log('密码显示状态:', secure ? '隐藏' : '显示');
            }}
          />
        </Field>

        <Field label="状态监听示例">
          <PasswordInput
            placeholder="请输入密码"
            secureTextEntry={secureState}
            onChangeSecureTextEntry={setSecureState}
          />
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>
              <Text style={styles.statusLabel}>当前状态:</Text>
              {secureState ? ' 密码隐藏' : ' 密码显示'}
            </Text>
          </View>
        </Field>
      </Space>
    </Card>
  );
};

export default BasicUsage;
