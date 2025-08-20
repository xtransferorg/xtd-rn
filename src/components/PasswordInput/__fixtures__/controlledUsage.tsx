import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { PasswordInput, Field, Space, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ControlledUsage: FC = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [secureState, setSecureState] = useState(true);
  const [syncSecure, setSyncSecure] = useState(true);

  const toggleSecureState = () => {
    setSecureState(!secureState);
  };

  const toggleSyncSecure = () => {
    setSyncSecure(!syncSecure);
  };

  return (
    <Card title="受控状态">
      <Text style={styles.description}>
        通过 secureTextEntry
        属性可以完全控制密码的显示状态，实现多个输入框的同步控制。
      </Text>

      <Space direction="vertical" gap="m">
        <Field label="单独受控">
          <PasswordInput
            value={password1}
            placeholder="受控密码输入"
            secureTextEntry={secureState}
            onChange={setPassword1}
            onChangeSecureTextEntry={setSecureState}
          />

          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>
              <Text style={styles.statusLabel}>当前状态:</Text>
              {secureState ? ' 密码隐藏' : ' 密码显示'}
            </Text>
            <Button
              size={Size.small}
              style={{ marginTop: 8 }}
              onPress={toggleSecureState}
            >
              {secureState ? '显示密码' : '隐藏密码'}
            </Button>
          </View>
        </Field>

        <Field label="同步控制多个输入框">
          <Space direction="vertical" gap="s">
            <PasswordInput
              value={password1}
              placeholder="密码"
              secureTextEntry={syncSecure}
              onChange={setPassword1}
              onChangeSecureTextEntry={setSyncSecure}
            />

            <PasswordInput
              value={password2}
              placeholder="确认密码"
              secureTextEntry={syncSecure}
              onChange={setPassword2}
              onChangeSecureTextEntry={setSyncSecure}
            />
          </Space>

          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>
              <Text style={styles.statusLabel}>同步状态:</Text>
              {syncSecure ? ' 两个输入框都隐藏密码' : ' 两个输入框都显示密码'}
            </Text>
            <Button
              size={Size.small}
              style={{ marginTop: 8 }}
              onPress={toggleSyncSecure}
            >
              {syncSecure ? '显示所有密码' : '隐藏所有密码'}
            </Button>
          </View>
        </Field>
      </Space>
    </Card>
  );
};

export default ControlledUsage;
