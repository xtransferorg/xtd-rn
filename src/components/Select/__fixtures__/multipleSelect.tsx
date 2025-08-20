import React, { useState } from 'react';
import { Text } from 'react-native';
import { Space, Select, SelectInputItem, Toast } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const options = [
  {
    label: '苹果',
    value: 'apple',
  },
  {
    label: '香蕉',
    value: 'banana',
  },
  {
    label: '橙子',
    value: 'orange',
  },
  {
    label: '葡萄',
    value: 'grape',
  },
  {
    label: '西瓜（禁用）',
    value: 'watermelon',
    disabled: true,
  },
];

const MultipleSelectExample = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const [displayValue, setDisplayValue] = useState<SelectInputItem[]>([]);

  const setValueAndDisplay = (values: string[] | string) => {
    if (!Array.isArray(values)) return;
    setValue(values);
    const display: SelectInputItem[] = [];
    values.forEach((v) => {
      const option = options.find((opt) => opt.value === v);
      if (option) {
        display.push({ value: option.value, label: option.label });
      }
    });
    setDisplayValue(display);
  };

  const onConfirm = (values: string | string[]) => {
    setValueAndDisplay(values as string[]);
    setVisible(false);
  };

  const onClear = () => {
    setValue([]);
    setDisplayValue([]);
  };

  const onClose = (item: SelectInputItem) => {
    const newValues = value.filter((v) => v !== item.value);
    setValueAndDisplay(newValues);
  };

  const onDisabledPress = (option: any) => {
    Toast({
      position: 'middle',
      message: `${option.label} 不可选择`,
      forbidPress: true,
    });
  };

  return (
    <Card>
      <Space>
        <Text style={styles.title}>多选示例</Text>

        <Select
          type={Select.Type.checkbox}
          options={options}
          title="选择水果"
          value={value}
          visible={visible}
          showConfirmButton
          onPressOverlay={() => setVisible(false)}
          onConfirm={onConfirm}
          onCancel={() => setVisible(false)}
          onChange={setValueAndDisplay}
          onDisabledPress={onDisabledPress}
        />

        <Select.SelectInput
          value={displayValue}
          multiple
          closable
          onPress={() => setVisible(true)}
          placeholder="请选择水果"
          onClear={onClear}
          onClose={onClose}
        />

        <Select.SelectInput
          value={displayValue}
          multiple
          disabled
          placeholder="禁用状态"
        />

        <Select.SelectInput
          value={displayValue}
          multiple
          status="error"
          placeholder="错误状态"
        />
      </Space>
    </Card>
  );
};

export default MultipleSelectExample;
