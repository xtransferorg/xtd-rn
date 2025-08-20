import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AutoComplete, AutoCompleteOption } from '@xrnjs/ui';
import styles from './style';

const ControlledDemo = () => {
  const [value, setValue] = useState('');
  const [options] = useState<AutoCompleteOption[]>([
    { value: '预设选项1' },
    { value: '预设选项2' },
    { value: '预设选项3' },
  ]);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    console.log('受控组件值变化:', newValue);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleSetValue = () => {
    setValue('程序设置的值');
  };

  return (
    <View style={[styles.demoContainer, { zIndex: 6 }]}>
      <Text style={styles.sectionTitle}>受控组件</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSetValue}>
          <Text style={styles.buttonText}>设置值</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDanger} onPress={handleClear}>
          <Text style={styles.buttonText}>清空</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.demoSection}>
        <Text style={styles.sectionDescription}>
          通过 value 和 onChange 控制组件状态
        </Text>
        <Text style={styles.currentValueText}>当前值: {value || '(空)'}</Text>
        <AutoComplete
          placeholder="受控组件示例"
          value={value}
          options={options}
          onChange={handleChange}
        />
      </View>
    </View>
  );
};

export default ControlledDemo;
