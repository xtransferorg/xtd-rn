import React from 'react';
import { Text } from 'react-native';
import { Checkbox, Space, Toast } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const onDisabledPress = (v: any) =>
  Toast({
    position: 'middle',
    message: `${v?.label || v} 不可操作提示`,
    forbidPress: true,
  });

const BasicUsage: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState<string>();

  return (
    <Card style={styles.section}>
      <Text style={styles.title}>基础用法</Text>
      <Space>
        <Checkbox label="基础复选框" value={checked} onChange={setChecked} />
        <Checkbox defaultValue label="默认选中" />
        <Checkbox
          disabled
          label="禁用状态"
          onDisabledPress={() => onDisabledPress('禁用状态')}
        />
        <Checkbox
          defaultValue
          disabled
          label="禁用且选中"
          onDisabledPress={() => onDisabledPress('禁用且选中')}
        />
        <Checkbox label="热区测试" style={styles.tallContainer} />
        <Checkbox
          label="自定义值"
          activeValue="checked"
          inactiveValue="unchecked"
          value={value}
          onChange={setValue}
        />
      </Space>
    </Card>
  );
};

export default BasicUsage;
