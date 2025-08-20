import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { PasswordInput, Field, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ControlUsage: FC = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  return (
    <Card title="控制配置">
      <Text style={styles.description}>
        可以控制是否显示眼睛按钮，以及设置默认的显示状态。
      </Text>

      <Space direction="vertical" gap="m">
        <Field label="隐藏眼睛控制按钮">
          <View style={styles.configContainer}>
            <Text style={styles.configTitle}>配置说明</Text>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>showSecureControl:</Text>
              <Text style={styles.configValue}>false</Text>
            </View>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>功能:</Text>
              <Text style={styles.configValue}>隐藏切换按钮</Text>
            </View>
          </View>

          <PasswordInput
            value={password1}
            placeholder="请输入密码（无切换按钮）"
            showSecureControl={false}
            onChange={setPassword1}
          />
        </Field>

        <Field label="默认显示密码">
          <View style={styles.configContainer}>
            <Text style={styles.configTitle}>配置说明</Text>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>defaultSecureTextEntry:</Text>
              <Text style={styles.configValue}>false</Text>
            </View>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>功能:</Text>
              <Text style={styles.configValue}>默认显示密码</Text>
            </View>
          </View>

          <PasswordInput
            value={password2}
            placeholder="请输入密码（默认显示）"
            defaultSecureTextEntry={false}
            onChange={setPassword2}
            onChangeSecureTextEntry={(secure) => {
              console.log('切换状态:', secure ? '隐藏' : '显示');
            }}
          />
        </Field>

        <Field label="对比示例">
          <View style={styles.comparisonContainer}>
            <View style={styles.comparisonItem}>
              <Text style={styles.comparisonTitle}>默认隐藏</Text>
              <PasswordInput
                placeholder="默认隐藏密码"
                defaultSecureTextEntry={true}
              />
            </View>
            <View style={styles.comparisonItem}>
              <Text style={styles.comparisonTitle}>默认显示</Text>
              <PasswordInput
                placeholder="默认显示密码"
                defaultSecureTextEntry={false}
              />
            </View>
          </View>
        </Field>
      </Space>
    </Card>
  );
};

export default ControlUsage;
