import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AutoComplete, AutoCompleteOption, AutoCompleteRef } from '@xrnjs/ui';
import styles from './style';

const RefDemo = () => {
  const autoCompleteRef = useRef<AutoCompleteRef>(null);
  const [options, setOptions] = useState<AutoCompleteOption[]>([]);

  const handleChange = (value: string) => {
    if (!value) return setOptions([]);

    const suggestions = Array.from({ length: 5 }, (_, i) => ({
      value: `${value}_ref选项${i + 1}`,
    }));
    setOptions(suggestions);
  };

  const handleFocus = () => {
    autoCompleteRef.current?.focus();
  };

  const handleBlur = () => {
    autoCompleteRef.current?.blur();
  };

  const handleClear = () => {
    autoCompleteRef.current?.clear();
  };

  return (
    <View style={[styles.demoContainer, { zIndex: 5 }]}>
      <Text style={styles.sectionTitle}>Ref 使用</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSuccess} onPress={handleFocus}>
          <Text style={styles.buttonText}>聚焦</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWarning} onPress={handleBlur}>
          <Text style={styles.buttonText}>失焦</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDanger} onPress={handleClear}>
          <Text style={styles.buttonText}>清空</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.demoSection}>
        <Text style={styles.sectionDescription}>
          通过 ref 可以调用组件的方法
        </Text>
        <AutoComplete
          ref={autoCompleteRef}
          placeholder="Ref 示例"
          options={options}
          onChange={handleChange}
        />
      </View>
    </View>
  );
};

export default RefDemo;
