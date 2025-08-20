import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AutoComplete, AutoCompleteOption } from '@xrnjs/ui';
import styles from './style';

const BasicUsage = () => {
  const [options, setOptions] = useState<AutoCompleteOption[]>([]);

  const handleChange = (value: string) => {
    console.log('输入值变化:', value);
    if (!value) {
      return setOptions([]);
    }

    // 模拟生成联想选项
    const suggestions = Array.from({ length: 5 }, (_, i) => ({
      value: `${value}_选项${i + 1}`,
    }));
    setOptions(suggestions);
  };

  const handleSelect = (value: string, option: AutoCompleteOption) => {
    console.log('选中项:', { value, option });
  };

  return (
    <View style={{ zIndex: 10 }}>
      <Text style={styles.sectionTitle}>基础使用</Text>
      <Text style={styles.sectionDescription}>
        最基本的自动补全功能，支持清除、焦点事件等
      </Text>
      <AutoComplete
        placeholder="请输入内容"
        allowClear
        options={options}
        onChange={handleChange}
        onSelect={handleSelect}
        onVisibleChange={(isOpen) => {
          console.log('下拉框状态变化:', isOpen);
        }}
        onFocus={() => console.log('获得焦点')}
        onBlur={() => console.log('失去焦点')}
        onClear={() => console.log('清空内容')}
      />
    </View>
  );
};

export default BasicUsage;
