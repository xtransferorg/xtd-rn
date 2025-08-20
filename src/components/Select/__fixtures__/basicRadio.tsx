import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Space, Select } from '@xrnjs/ui';
import { IconXChina1 } from '../../../icons/index';
import Card from '_global/Card';
import { styles } from './style';

const options = [
  {
    label: '选项一',
    value: 'option1',
  },
  {
    label: '选项二',
    value: 'option2',
  },
  {
    label: '选项三',
    value: 'option3',
  },
  {
    label: '禁用选项',
    value: 'option4',
    disabled: true,
  },
];

const BasicRadioExample = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string>();
  const [displayValue, setDisplayValue] = useState<React.ReactNode>();

  const onChange = (selectedValue: string | string[]) => {
    const val = selectedValue as string;
    setValue(val);
    const selectedOption = options.find((opt) => opt.value === val);
    setDisplayValue(
      <View style={styles.displayContainer}>
        <IconXChina1 size={20} />
        <Text style={styles.displayText}>{selectedOption?.label}</Text>
      </View>
    );
    setVisible(false);
  };

  const onClear = () => {
    setValue('');
    setDisplayValue('');
  };

  return (
    <Card>
      <Space>
        <Text style={styles.title}>基础单选</Text>

        <Select
          type={Select.Type.radio}
          options={options}
          title="请选择一个选项"
          value={value}
          visible={visible}
          onPressOverlay={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          onChange={onChange}
        />

        <Select.SelectInput
          value={displayValue}
          onPress={() => setVisible(true)}
          placeholder="请选择选项"
          onClear={onClear}
        />
      </Space>
    </Card>
  );
};

export default BasicRadioExample;
