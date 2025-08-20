import React from 'react';
import { View, Text } from 'react-native';
import { Radio, Toast } from '@xrnjs/ui';
import styles from './style';

const onDisabledPress = (v: any) =>
  Toast({
    position: 'middle',
    message: `${v.label} 不可操作提示`,
    forbidPress: true,
  });

const BasicUsage: React.FC = () => {
  const [value, setValue] = React.useState<number>();
  const [controlledValue, setControlledValue] =
    React.useState<string>('option2');

  return (
    <>
      <View style={styles.section}>
        <Text style={styles.title}>基础用法</Text>
        <Text style={styles.subtitle}>默认单选行为</Text>
        <Radio
          value={value}
          onChange={(selectedValue) => {
            console.log('选择了:', selectedValue);
            setValue(selectedValue as number);
          }}
          options={[
            { label: '选项 A', value: 1 },
            { label: '选项 B', value: 2 },
            { label: '选项 C', value: 3 },
            { label: '选项 D', value: 4 },
          ]}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>默认选中</Text>
        <Text style={styles.subtitle}>设置默认选中项</Text>
        <Radio
          defaultValue={2}
          options={[
            { label: '北京', value: 1 },
            { label: '上海', value: 2 },
            { label: '广州', value: 3 },
            { label: '深圳', value: 4 },
          ]}
          onChange={(value) => {
            console.log('城市选择:', value);
          }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>受控组件</Text>
        <Text style={styles.subtitle}>外部控制选中状态</Text>
        <Radio
          value={controlledValue}
          onChange={(selectedValue) => {
            setControlledValue(selectedValue as string);
          }}
          options={[
            { label: '选项 1', value: 'option1' },
            { label: '选项 2', value: 'option2' },
            { label: '选项 3', value: 'option3' },
          ]}
        />
        <View style={styles.infoBox}>
          <Text>当前选中: {controlledValue}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>禁用状态</Text>
        <Text style={styles.subtitle}>部分选项禁用</Text>
        <Radio
          defaultValue={2}
          options={[
            { label: '可选项 A', value: 1 },
            { label: '可选项 B', value: 2 },
            { label: '禁用项 C', value: 3, disabled: true },
            { label: '禁用项 D', value: 4, disabled: true },
          ]}
          onChange={(value) => {
            console.log('选择:', value);
          }}
          onDisabledPress={onDisabledPress}
        />
      </View>
    </>
  );
};

export default BasicUsage;
