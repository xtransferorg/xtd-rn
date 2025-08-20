import React, { useState } from 'react';
import { Text } from 'react-native';
import { Space, Select } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles } from './style';

const options = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' },
];

const SizeVariantsExample = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string>();

  const onChange = (selectedValue: string | string[]) => {
    setValue(selectedValue as string);
    setVisible(false);
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <Card>
      <Space>
        <Text style={styles.title}>不同尺寸</Text>

        <Select
          type={Select.Type.radio}
          options={options}
          title="选择选项"
          value={value}
          visible={visible}
          onPressOverlay={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          onChange={onChange}
        />

        <Text style={styles.subtitle}>大尺寸 (Large)</Text>
        <Select.SelectInput
          value={selectedOption?.label}
          onPress={() => setVisible(true)}
          placeholder="大尺寸选择器"
          size="large"
          onClear={() => setValue('')}
        />

        <Text style={styles.subtitle}>默认尺寸 (Default)</Text>
        <Select.SelectInput
          value={selectedOption?.label}
          onPress={() => setVisible(true)}
          placeholder="默认尺寸选择器"
          size="default"
          onClear={() => setValue('')}
        />

        <Text style={styles.subtitle}>小尺寸 (Small)</Text>
        <Select.SelectInput
          value={selectedOption?.label}
          onPress={() => setVisible(true)}
          placeholder="小尺寸选择器"
          size="small"
          onClear={() => setValue('')}
        />
      </Space>
    </Card>
  );
};

export default SizeVariantsExample;
