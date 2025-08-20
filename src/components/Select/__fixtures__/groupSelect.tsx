import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Space, Select } from '@xrnjs/ui';
import {
  IconMAFinancialmanagement2,
  IconPPBrazil1,
} from '../../../icons/index';
import Card from '_global/Card';
import { styles } from './style';

const groups = [
  {
    label: '水果类',
    children: [
      {
        label: '苹果',
        value: 'apple',
        prefixIcon:
          'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?w=100',
      },
      {
        label: '香蕉',
        value: 'banana',
        subLabel: '热带水果',
      },
      {
        label: '橙子',
        value: 'orange',
        contentLabel: '维生素C丰富',
      },
    ],
  },
  {
    label: '蔬菜类',
    children: [
      {
        label: '胡萝卜',
        value: 'carrot',
        prefixIcon: <IconMAFinancialmanagement2 size={24} />,
      },
      {
        label: '白菜',
        value: 'cabbage',
        subLabel: '绿色蔬菜',
      },
      {
        label: '土豆（禁用）',
        value: 'potato',
        disabled: true,
        prefixIcon: <IconPPBrazil1 size={24} />,
      },
    ],
  },
  {
    label: '肉类',
    children: [
      {
        label: '牛肉',
        value: 'beef',
      },
      {
        label: '猪肉',
        value: 'pork',
      },
    ],
  },
];

const GroupSelectExample = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string[]>([]);

  const onChange = (values: string | string[]) => {
    setValue(values as string[]);
  };

  const onConfirm = () => {
    setVisible(false);
  };

  const extra = (
    <View style={styles.extraContainer}>
      <Text style={styles.extraText}>提示：可以选择多个不同分组的选项</Text>
    </View>
  );

  return (
    <Card>
      <Space>
        <Text style={styles.title}>分组选择</Text>

        <Select
          type={Select.Type.checkbox}
          options={groups}
          title="选择食物"
          value={value}
          visible={visible}
          showConfirmButton
          onPressOverlay={() => setVisible(false)}
          onConfirm={onConfirm}
          onCancel={() => setVisible(false)}
          onChange={onChange}
          extra={extra}
        />

        <Button onPress={() => setVisible(true)}>
          打开分组选择器 (已选择: {value.length}项)
        </Button>
      </Space>
    </Card>
  );
};

export default GroupSelectExample;
