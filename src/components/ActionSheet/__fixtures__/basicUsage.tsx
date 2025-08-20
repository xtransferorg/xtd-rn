import React from 'react';
import { Text } from 'react-native';
import { ActionSheet, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.cardTitle}>基础用法</Text>

        <Space>
          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                actions: ['选项一', '选项二'],
                onSelect: (item, index) => {
                  console.log('基础弹窗 -> 选项:', item, index);
                },
                onClose: () => console.log('基础弹窗 -> 关闭'),
              });
            }}
          >
            基础弹窗
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                actions: ['选项一', '选项二', '选项三'],
                cancelText: '取消',
                onSelect: (item, index) => {
                  console.log('带取消按钮 -> 选项:', item, index);
                },
                onClose: () => console.log('带取消按钮 -> 关闭'),
              });
            }}
          >
            显示取消按钮
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '请选择操作',
                actions: ['选项一', '选项二', '选项三'],
                cancelText: '取消',
                onSelect: (item, index) => {
                  console.log('带标题 -> 选项:', item, index);
                },
                onClose: () => console.log('带标题 -> 关闭'),
              });
            }}
          >
            显示标题
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '请选择操作',
                description: '这是一段描述信息，用于说明操作的用途',
                actions: ['选项一', '选项二', '选项三'],
                cancelText: '取消',
                onSelect: (item, index) => {
                  console.log('带描述 -> 选项:', item, index);
                },
                onClose: () => console.log('带描述 -> 关闭'),
              });
            }}
          >
            显示描述信息
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default BasicUsage;
