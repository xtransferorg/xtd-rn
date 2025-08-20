import React from 'react';
import { View, Text } from 'react-native';
import { Radio } from '@xrnjs/ui';
import styles from './style';

const DataTypes: React.FC = () => {
  const [stringValue, setStringValue] = React.useState<string>('medium');
  const [numberValue, setNumberValue] = React.useState<number>(2);

  return (
    <>
      <View style={styles.section}>
        <Text style={styles.title}>字符串类型</Text>
        <Text style={styles.subtitle}>value 为字符串类型</Text>
        <Radio<string>
          value={stringValue}
          onChange={(value) => {
            console.log('字符串选择:', value);
            setStringValue(value as string);
          }}
          options={[
            { label: '小号', value: 'small' },
            { label: '中号', value: 'medium' },
            { label: '大号', value: 'large' },
            { label: '超大号', value: 'xlarge' },
          ]}
        />
        <View style={styles.infoBox}>
          <Text>当前选择: {stringValue}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>数字类型</Text>
        <Text style={styles.subtitle}>value 为数字类型</Text>
        <Radio<number>
          value={numberValue}
          onChange={(value) => {
            console.log('数字选择:', value);
            setNumberValue(value as number);
          }}
          options={[
            { label: '优先级 1', value: 1 },
            { label: '优先级 2', value: 2 },
            { label: '优先级 3', value: 3 },
            { label: '优先级 4', value: 4 },
          ]}
        />
        <View style={styles.infoBox}>
          <Text>当前优先级: {numberValue}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>布尔类型</Text>
        <Text style={styles.subtitle}>是/否选择</Text>
        <Radio<boolean>
          defaultValue={true}
          options={[
            { label: '是', value: true },
            { label: '否', value: false },
          ]}
          onChange={(value) => {
            console.log('布尔选择:', value);
          }}
        />
      </View>
    </>
  );
};

export default DataTypes;
