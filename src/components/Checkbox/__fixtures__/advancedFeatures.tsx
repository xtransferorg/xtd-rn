import React from 'react';
import { Text, View } from 'react-native';
import { Checkbox, Space, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const AdvancedFeatures: React.FC = () => {
  const [controlledValue, setControlledValue] = React.useState(false);
  const [customValues, setCustomValues] = React.useState<string>('off');
  const [validationState, setValidationState] = React.useState<
    'success' | 'error' | 'warning'
  >('success');
  const [isValidating, setIsValidating] = React.useState(false);
  const [validationResult, setValidationResult] = React.useState<string>('');

  const handleValidationChange = (checked: boolean) => {
    if (checked) {
      setValidationState('success');
    } else {
      setValidationState('error');
    }
  };

  const getValidationStyle = () => {
    switch (validationState) {
      case 'success':
        return styles.successText;
      case 'error':
        return styles.errorText;
      default:
        return {};
    }
  };

  return (
    <>
      <Card style={styles.section}>
        <Text style={styles.title}>受控组件</Text>
        <Space>
          <Checkbox
            label={`受控状态: ${controlledValue ? '已选中' : '未选中'}`}
            value={controlledValue}
            onChange={setControlledValue}
          />
          <Button
            onPress={() => setControlledValue(!controlledValue)}
            size={Size.small}
          >
            外部控制切换
          </Button>
        </Space>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>自定义值类型</Text>
        <Space>
          <Checkbox
            label={`当前值: ${customValues}`}
            activeValue="on"
            inactiveValue="off"
            value={customValues}
            onChange={setCustomValues}
          />
          <Checkbox
            label="数字值示例"
            activeValue={1}
            inactiveValue={0}
            onChange={(value) => console.log('数字值:', value)}
          />
        </Space>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>状态验证</Text>
        <Space>
          <Checkbox
            label="同意用户协议"
            labelTextStyle={getValidationStyle()}
            onChange={handleValidationChange}
          />
          <Text style={getValidationStyle()}>
            {validationState === 'success' ? '✓ 验证通过' : '✗ 请同意用户协议'}
          </Text>
        </Space>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>自定义样式</Text>
        <View style={styles.customContainer}>
          <Space>
            <Checkbox
              label="自定义背景容器"
              labelTextStyle={styles.highlightText}
            />
            <Checkbox
              label="高亮文本样式"
              labelTextStyle={styles.highlightText}
              defaultValue
            />
          </Space>
        </View>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>事件处理</Text>
        <Space>
          <Checkbox
            label="点击事件监听"
            onChange={(value) => {
              console.log('值变化:', value);
            }}
          />
          <Checkbox
            label={`数据验证 ${
              isValidating ? '(验证中...)' : validationResult
            }`}
            disabled={isValidating}
            onChange={async (value) => {
              if (value) {
                setIsValidating(true);
                // 模拟验证用户是否有权限同意条款
                const res = await new Promise<number>((resolve) =>
                  setTimeout(() => resolve(Math.random()), 1000)
                );
                setValidationResult(res > 0.5 ? '✓ 验证通过' : '✗ 无权限');
                setIsValidating(false);
              } else {
                setValidationResult('✗ 未验证');
              }
            }}
          />
        </Space>
      </Card>
    </>
  );
};

export default AdvancedFeatures;
