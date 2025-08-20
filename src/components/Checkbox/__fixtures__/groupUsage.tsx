import React from 'react';
import { Text } from 'react-native';
import { Checkbox, Toast } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const onDisabledPress = (v: any) =>
  Toast({
    position: 'middle',
    message: `${v?.label || v} 不可操作提示`,
    forbidPress: true,
  });

const GroupUsage: React.FC = () => {
  const [multiValue, setMultiValue] = React.useState<number[]>([]);
  const [singleValue, setSingleValue] = React.useState<number>();
  const [fruits, setFruits] = React.useState<string[]>(['apple']);

  return (
    <>
      <Card style={styles.section}>
        <Text style={styles.title}>单选组</Text>
        <Checkbox.Group
          value={singleValue}
          onChange={(v) => {
            console.log('单选onChange=', v);
            setSingleValue(v as number);
          }}
          options={[
            { label: '选项 A', value: 1, disabled: true },
            { label: '选项 B', value: 2 },
            { label: '选项 C', value: 3 },
            { label: '选项 D', value: 4 },
          ]}
          onDisabledPress={(option) => onDisabledPress(option)}
        />
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>多选组</Text>
        <Checkbox.Group<number>
          multiple
          value={multiValue}
          onChange={(v) => {
            console.log('多选onChange=', v);
            setMultiValue(v as number[]);
          }}
          options={[
            { label: '选项 A', value: 1 },
            { label: '选项 B', value: 2 },
            { label: '选项 C', value: 3, disabled: true },
            { label: '选项 D', value: 4 },
          ]}
          onDisabledPress={(option) => onDisabledPress(option)}
        />
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>横向布局</Text>
        <Checkbox.Group
          multiple
          value={multiValue}
          onChange={(v) => {
            setMultiValue(v as number[]);
          }}
          options={[
            { label: '横向 A', value: 1 },
            { label: '横向 B', value: 2 },
            { label: '横向 C', value: 3, disabled: true },
            { label: '横向 D', value: 4 },
          ]}
          onDisabledPress={(option) => onDisabledPress(option)}
          direction="horizontal"
        />
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>分列布局</Text>
        <Checkbox.Group
          defaultValue={1}
          split
          labelAlign="top"
          options={[
            {
              label: '这是一段较长的文字内容示例',
              value: 1,
            },
            {
              label: '这是另一段较长的文字内容',
              value: 2,
            },
            {
              label: '短文本',
              value: 3,
            },
            {
              label: '另一个短文本',
              value: 4,
            },
          ]}
          onChange={(value) => {
            console.log('分列布局选择:', value);
          }}
          onDisabledPress={onDisabledPress}
        />
      </Card>

      <Card style={styles.section}>
        <Text style={styles.title}>字符串值示例</Text>
        <Checkbox.Group<string>
          multiple
          value={fruits}
          onChange={(v) => {
            console.log('水果选择:', v);
            setFruits(v as string[]);
          }}
          options={[
            { label: '🍎 苹果', value: 'apple' },
            { label: '🍌 香蕉', value: 'banana' },
            { label: '🍊 橙子', value: 'orange' },
            { label: '🍇 葡萄', value: 'grape', disabled: true },
          ]}
          onDisabledPress={(option) => onDisabledPress(option)}
        />
      </Card>
    </>
  );
};

export default GroupUsage;
