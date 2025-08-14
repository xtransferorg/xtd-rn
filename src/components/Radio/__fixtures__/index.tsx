import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import styles from './style';
import { Toast, Radio } from '@xrnjs/ui';

const onDisabledPress = (v: any) =>
  Toast({
    position: 'middle',
    message: `${v.label} 不可操作提示`,
    forbidPress: true,
  });

const Demo = () => {
  return (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.title}>默认</Text>
        <Radio
          defaultValue={1}
          options={[
            {
              label: '上海',
              value: 1,
              disabled: true,
            },
            {
              label: '北京',
              value: 2,
            },
            {
              label: '深圳',
              value: 3,
            },
            {
              label: '广州',
              value: 4,
              disabled: true,
            },
          ]}
          onChange={(value) => {
            console.log(value);
          }}
          onDisabledPress={onDisabledPress}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>分列</Text>
        <Radio
          defaultValue={1}
          split
          labelAlign="top"
          options={[
            {
              label: '这是一段文字这是一段文字这是一段文字',
              value: 1,
            },
            {
              label: '这是一段文字这是一段文字这是一段文字',
              value: 2,
            },
            {
              label: '这是一段文字这是一',
              value: 3,
            },
            {
              label: '这是一段文字这是一',
              value: 4,
            },
          ]}
          onChange={(value) => {
            console.log(value);
          }}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>全部禁用</Text>
        <Radio
          disabled
          defaultValue={2}
          options={[
            {
              label: '这是一段文字这是一段文字这是一段文字',
              value: 1,
            },
            {
              label: '这是一段文字这是一段文字这是一段文字',
              value: 2,
            },
            {
              label: '这是一段文字这是一',
              value: 3,
            },
            {
              label: '这是一段文字这是一',
              value: 4,
            },
          ]}
          onChange={(value) => {
            console.log(value);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Demo;
