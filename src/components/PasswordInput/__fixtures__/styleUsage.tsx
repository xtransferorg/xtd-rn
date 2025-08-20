import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { PasswordInput, Field, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const StyleUsage: FC = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [password3, setPassword3] = useState('');
  const [password4, setPassword4] = useState('');

  return (
    <Card title="自定义样式">
      <Text style={styles.description}>
        可以自定义眼睛图标的大小、颜色和样式，满足不同的设计需求。
      </Text>

      <Space direction="vertical" gap="m">
        <View style={styles.customEyeContainer}>
          <Text style={styles.customEyeTitle}>眼睛图标尺寸</Text>
          <View style={styles.customEyeGrid}>
            <View style={styles.customEyeItem}>
              <Text style={styles.customEyeLabel}>小尺寸 (16px)</Text>
              <PasswordInput
                value={password1}
                placeholder="小尺寸眼睛"
                eyeSize={16}
                onChange={setPassword1}
              />
            </View>
            <View style={styles.customEyeItem}>
              <Text style={styles.customEyeLabel}>大尺寸 (32px)</Text>
              <PasswordInput
                value={password2}
                placeholder="大尺寸眼睛"
                eyeSize={32}
                onChange={setPassword2}
              />
            </View>
          </View>
        </View>

        <View style={styles.customEyeContainer}>
          <Text style={styles.customEyeTitle}>眼睛图标颜色</Text>
          <View style={styles.customEyeGrid}>
            <View style={styles.customEyeItem}>
              <Text style={styles.customEyeLabel}>蓝色主题</Text>
              <PasswordInput
                value={password3}
                placeholder="蓝色眼睛图标"
                eyeColor="#1890ff"
                eyeSize={24}
                onChange={setPassword3}
              />
            </View>
            <View style={styles.customEyeItem}>
              <Text style={styles.customEyeLabel}>红色主题</Text>
              <PasswordInput
                value={password4}
                placeholder="红色眼睛图标"
                eyeColor="#ff4d4f"
                eyeSize={24}
                onChange={setPassword4}
              />
            </View>
          </View>
        </View>

        <Field label="自定义眼睛样式">
          <View style={styles.configContainer}>
            <Text style={styles.configTitle}>样式配置</Text>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>eyeSize:</Text>
              <Text style={styles.configValue}>28</Text>
            </View>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>eyeColor:</Text>
              <Text style={styles.configValue}>#52c41a</Text>
            </View>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>eyeStyle:</Text>
              <Text style={styles.configValue}>自定义样式</Text>
            </View>
          </View>

          <PasswordInput
            placeholder="自定义样式眼睛"
            eyeSize={28}
            eyeColor="#52c41a"
            eyeStyle={{
              opacity: 0.8,
            }}
          />
        </Field>
      </Space>
    </Card>
  );
};

export default StyleUsage;
