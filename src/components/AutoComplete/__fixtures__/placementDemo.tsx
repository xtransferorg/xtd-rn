import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AutoComplete, AutoCompleteOption } from '@xrnjs/ui';
import styles from './style';

const PlacementDemo = () => {
  const [options] = useState<AutoCompleteOption[]>([
    { value: '选项1' },
    { value: '选项2' },
    { value: '选项3' },
  ]);

  return (
    <View style={[styles.demoContainer, { zIndex: 7 }]}>
      <Text style={styles.sectionTitle}>弹出位置</Text>

      <View style={styles.demoSection}>
        <Text style={styles.sectionDescription}>默认向下弹出</Text>
        <AutoComplete
          placeholder="默认向下弹出"
          options={options}
          placement="bottom"
        />
      </View>

      <View style={[styles.demoSection, styles.placementTopContainer]}>
        <Text style={styles.sectionDescription}>向上弹出</Text>
        <AutoComplete
          placeholder="向上弹出"
          options={options}
          placement="top"
        />
      </View>
    </View>
  );
};

export default PlacementDemo;
