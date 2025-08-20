import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Space, Select } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles, priorityStyles } from './style';

const options = [
  {
    label: '重要',
    value: 'important',
    labelTextStyle: priorityStyles.important.labelTextStyle,
    subLabel: '高优先级',
    subLabelTextStyle: priorityStyles.important.subLabelTextStyle,
  },
  {
    label: '普通',
    value: 'normal',
    labelTextStyle: priorityStyles.normal.labelTextStyle,
    subLabel: '中等优先级',
    subLabelTextStyle: priorityStyles.normal.subLabelTextStyle,
  },
  {
    label: '低优先级',
    value: 'low',
    labelTextStyle: priorityStyles.low.labelTextStyle,
    subLabel: '可延后处理',
    subLabelTextStyle: priorityStyles.low.subLabelTextStyle,
    contentLabel: '不紧急',
    contentLabelTextStyle: priorityStyles.low.contentLabelTextStyle,
  },
];

const CustomStyleSelectExample = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string>();

  const onChange = (selectedValue: string | string[]) => {
    setValue(selectedValue as string);
    setVisible(false);
  };

  const customFooter = (
    <View style={styles.customFooter}>
      <Text style={styles.customFooterText}>自定义底部区域</Text>
    </View>
  );

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <Card>
      <Space>
        <Text style={styles.title}>自定义样式</Text>

        <Select
          type={Select.Type.radio}
          options={options}
          title="选择优先级"
          value={value}
          visible={visible}
          onPressOverlay={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          onChange={onChange}
          customFooter={customFooter}
          contentStyle={styles.contentStyle}
          cancelBtnContainerStyle={styles.cancelBtnStyle}
        />

        <Select.SelectInput
          value={selectedOption?.label}
          onPress={() => setVisible(true)}
          placeholder="请选择优先级"
          style={[
            styles.selectInputBorder,
            {
              borderColor: selectedOption?.labelTextStyle?.color || '#d9d9d9',
            },
          ]}
          suffix={<Text style={styles.suffixText}>📋</Text>}
        />

        {selectedOption && (
          <View
            style={[
              styles.selectedOptionContainer,
              {
                borderLeftColor: selectedOption.labelTextStyle?.color,
              },
            ]}
          >
            <Text style={selectedOption.labelTextStyle}>
              {selectedOption.label}
            </Text>
            <Text style={selectedOption.subLabelTextStyle}>
              {selectedOption.subLabel}
            </Text>
            {selectedOption.contentLabel && (
              <Text style={selectedOption.contentLabelTextStyle}>
                {selectedOption.contentLabel}
              </Text>
            )}
          </View>
        )}
      </Space>
    </Card>
  );
};

export default CustomStyleSelectExample;
