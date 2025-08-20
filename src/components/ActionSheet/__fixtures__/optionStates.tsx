import React from 'react';
import { Text } from 'react-native';
import { ActionSheet, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const OptionStates = () => {
  return (
    <Space>
      <Card>
        <Text style={styles.cardTitle}>选项状态</Text>

        <Space>
          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '选项状态示例',
                actions: [
                  { name: '普通选项' },
                  { name: '着色选项', color: '#ff4757' },
                  { name: '加载中选项', loading: true },
                  { name: '禁用选项', disabled: true },
                ],
                cancelText: '取消',
                onSelect: (item, index) => {
                  console.log('选项状态 -> 选项:', item, index);
                },
                onClose: () => console.log('选项状态 -> 关闭'),
              });
            }}
          >
            不同状态选项
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '带描述的选项',
                actions: [
                  {
                    name: '删除文件',
                    description: '此操作不可撤销',
                    color: '#ff4757',
                  },
                  {
                    name: '移动到回收站',
                    description: '可以从回收站恢复',
                  },
                  {
                    name: '重命名',
                    description: '修改文件名称',
                  },
                ],
                cancelText: '取消',
                onSelect: (item, index) => {
                  console.log('带描述选项 -> 选项:', item, index);
                },
                onClose: () => console.log('带描述选项 -> 关闭'),
              });
            }}
          >
            选项带描述信息
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '危险操作确认',
                description: '请谨慎选择以下操作',
                actions: [
                  { name: '查看详情' },
                  { name: '编辑信息' },
                  { name: '删除数据', color: '#ff4757' },
                  { name: '清空所有', color: '#ff4757', disabled: true },
                ],
                cancelText: '取消',
                closeOnPressOverlay: true,
                onSelect: (item, index) => {
                  console.log('危险操作 -> 选项:', item, index);
                },
                onClose: () => console.log('危险操作 -> 关闭'),
              });
            }}
          >
            危险操作提示
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default OptionStates;
