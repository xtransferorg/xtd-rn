import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AutoComplete, AutoCompleteOption } from '@xrnjs/ui';
import styles from './style';

const StatusDemo = () => {
  const [options] = useState<AutoCompleteOption[]>([
    { value: '选项1' },
    { value: '选项2' },
    { value: '选项3' },
  ]);

  return (
    <View style={[styles.demoContainer, { zIndex: 9 }]}>
      <Text style={styles.sectionTitle}>状态演示</Text>

      <View style={[styles.demoSection, { zIndex: 9 }]}>
        <Text style={styles.sectionDescription}>错误状态</Text>
        <AutoComplete
          placeholder="错误状态示例"
          options={options}
          status="error"
        />
      </View>

      <View style={[styles.demoSection]}>
        <Text style={styles.sectionDescription}>禁用状态</Text>
        <AutoComplete
          placeholder="禁用状态示例"
          options={options}
          disabled
          value="禁用的输入框"
        />
      </View>
    </View>
  );
};

export default StatusDemo;
