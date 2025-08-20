import React from 'react';
import { Text } from 'react-native';
import { Button, Checkbox, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const SizeVariants: React.FC = () => {
  const [size, setSize] = React.useState<'middle' | 'small'>('middle');

  const toggleSize = () => {
    setSize(size === 'middle' ? 'small' : 'middle');
  };

  return (
    <>
      <Card style={styles.section}>
        <Text style={styles.title}>动态切换尺寸</Text>
        <Button onPress={toggleSize}>{`点击切换尺寸(当前:${size})`}</Button>
        <Space>
          <Checkbox size={size} label="可操作" />
          <Checkbox size={size} defaultValue label="默认已选中" />
          <Checkbox size={size} disabled label="禁用状态" />
        </Space>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>小尺寸示例</Text>
        <Space>
          <Checkbox size="small" label="小尺寸未选择" />
          <Checkbox size="small" defaultValue label="小尺寸已选中" />
          <Checkbox size="small" disabled label="小尺寸禁用" />
          <Checkbox
            size="small"
            defaultValue
            disabled
            label="小尺寸禁用且选中"
          />
        </Space>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>中等尺寸示例</Text>
        <Space>
          <Checkbox size="middle" label="中等尺寸未选择" />
          <Checkbox size="middle" defaultValue label="中等尺寸已选中" />
          <Checkbox size="middle" disabled label="中等尺寸禁用" />
          <Checkbox
            size="middle"
            defaultValue
            disabled
            label="中等尺寸禁用且选中"
          />
        </Space>
      </Card>
    </>
  );
};

export default SizeVariants;
