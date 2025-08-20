import React, { FC, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { PasswordInput, Field, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

interface ValidationRule {
  label: string;
  validator: (password: string) => boolean;
  type: 'success' | 'error' | 'warning';
}

const ValidationUsage: FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationResults, setValidationResults] = useState<ValidationRule[]>(
    []
  );

  const validationRules: ValidationRule[] = [
    {
      label: '长度至少8位',
      validator: (pwd) => pwd.length >= 8,
      type: 'error',
    },
    {
      label: '包含大写字母',
      validator: (pwd) => /[A-Z]/.test(pwd),
      type: 'warning',
    },
    {
      label: '包含小写字母',
      validator: (pwd) => /[a-z]/.test(pwd),
      type: 'warning',
    },
    {
      label: '包含数字',
      validator: (pwd) => /\d/.test(pwd),
      type: 'warning',
    },
    {
      label: '包含特殊字符',
      validator: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
      type: 'success',
    },
  ];

  useEffect(() => {
    const results = validationRules.map((rule) => ({
      ...rule,
      type: rule.validator(password) ? 'success' : rule.type,
    }));
    setValidationResults(results);
  }, [password]);

  const getValidationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return styles.validationSuccess;
      case 'error':
        return styles.validationError;
      case 'warning':
        return styles.validationWarning;
      default:
        return styles.validationError;
    }
  };

  const isPasswordMatch =
    password && confirmPassword && password === confirmPassword;

  const showColor =
    validationResults.filter((r) => r.type === 'success').length >= 4
      ? '#52c41a'
      : validationResults.filter((r) => r.type === 'success').length >= 2
      ? '#faad14'
      : '#ff4d4f';

  return (
    <Card title="密码验证">
      <Text style={styles.description}>
        结合验证规则，实时检查密码强度和确认密码匹配。
      </Text>

      <Space direction="vertical" gap="m">
        <Field label="设置密码">
          <PasswordInput
            value={password}
            placeholder="请输入密码"
            onChange={setPassword}
          />

          <View style={styles.validationContainer}>
            {validationResults.map((rule, index) => (
              <View key={index} style={styles.validationItem}>
                <View
                  style={[styles.validationIcon, getValidationIcon(rule.type)]}
                />
                <Text style={styles.validationText}>{rule.label}</Text>
              </View>
            ))}
          </View>
        </Field>

        <Field label="确认密码">
          <PasswordInput
            value={confirmPassword}
            placeholder="请再次输入密码"
            onChange={setConfirmPassword}
          />

          {confirmPassword ? (
            <View style={styles.statusContainer}>
              <Text
                style={[
                  styles.statusText,
                  { color: isPasswordMatch ? '#52c41a' : '#ff4d4f' },
                ]}
              >
                {isPasswordMatch ? '✓ 密码匹配' : '✗ 密码不匹配'}
              </Text>
            </View>
          ) : null}
        </Field>

        <Field label="密码强度评估">
          <View style={styles.configContainer}>
            <Text style={styles.configTitle}>强度评估</Text>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>通过规则:</Text>
              <Text style={styles.configValue}>
                {validationResults.filter((r) => r.type === 'success').length} /{' '}
                {validationResults.length}
              </Text>
            </View>
            <View style={styles.configItem}>
              <Text style={styles.configLabel}>强度等级:</Text>
              <Text
                style={[
                  styles.configValue,
                  {
                    color: showColor,
                  },
                ]}
              >
                {validationResults.filter((r) => r.type === 'success').length >=
                4
                  ? '强'
                  : validationResults.filter((r) => r.type === 'success')
                      .length >= 2
                  ? '中'
                  : '弱'}
              </Text>
            </View>
          </View>
        </Field>
      </Space>
    </Card>
  );
};

export default ValidationUsage;
