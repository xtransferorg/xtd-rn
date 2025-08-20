import React from 'react';
import { Text, Alert } from 'react-native';
import { ActionSheet, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const CallbackHandling = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.cardTitle}>回调处理</Text>
        <Space>
          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '独立回调示例',
                actions: [
                  {
                    name: '发送消息',
                    callback: () => {
                      Alert.alert('提示', '消息已发送');
                    },
                  },
                  {
                    name: '保存草稿',
                    callback: () => {
                      Alert.alert('提示', '草稿已保存');
                    },
                  },
                  {
                    name: '删除内容',
                    color: '#ff4757',
                    callback: () => {
                      Alert.alert('警告', '内容已删除');
                    },
                  },
                ],
                cancelText: '取消',
                onClose: () => console.log('独立回调 -> 关闭'),
              });
            }}
          >
            独立回调处理
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '关闭前确认',
                description: '第一个选项需要3秒确认时间',
                actions: ['需要确认的操作', '普通操作'],
                cancelText: '取消',
                beforeClose: (action, item, index) => {
                  if (action === 'item' && index === 0) {
                    return new Promise((resolve) => {
                      Alert.alert('确认操作', '此操作需要确认，3秒后自动确认', [
                        { text: '取消', onPress: () => resolve(false) },
                        { text: '确认', onPress: () => resolve(true) },
                      ]);
                      // 3秒后自动确认
                      setTimeout(() => resolve(true), 3000);
                    });
                  }
                  return true;
                },
                onSelect: (item, index) => {
                  console.log('关闭前确认 -> 选项:', item, index);
                  Alert.alert('成功', `已执行: ${item.name}`);
                },
                onClose: () => console.log('关闭前确认 -> 关闭'),
              });
            }}
          >
            关闭前确认
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '响应处理示例',
                actions: ['操作一', '操作二', '操作三'],
                cancelText: '取消',
                onResponse: (action, item, index) => {
                  console.log('响应类型:', action);
                  if (action === 'item') {
                    console.log('选择了选项:', item, '索引:', index);
                  } else if (action === 'cancel') {
                    console.log('点击了取消');
                  } else if (action === 'overlay') {
                    console.log('点击了遮罩层');
                  }
                },
                onSelect: (item) => {
                  Alert.alert('选择结果', `您选择了: ${item.name}`);
                },
                onClose: () => console.log('响应处理 -> 关闭'),
              });
            }}
          >
            响应处理
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default CallbackHandling;
