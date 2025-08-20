import React from 'react';
import { Text, Alert } from 'react-native';
import { ActionSheet, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const AdvancedFeatures = () => {
  const handleComplexOperation = (operationType: string) => {
    return new Promise<boolean>((resolve) => {
      Alert.alert('确认操作', `确定要执行 ${operationType} 操作吗？`, [
        { text: '取消', onPress: () => resolve(false) },
        { text: '确认', onPress: () => resolve(true) },
      ]);
    });
  };

  return (
    <Space>
      <Card>
        <Text style={styles.cardTitle}>高级功能</Text>

        <Space>
          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '文件操作',
                description: '选择要执行的文件操作',
                actions: [
                  {
                    name: '查看详情',
                    description: '查看文件的详细信息',
                  },
                  {
                    name: '重命名',
                    description: '修改文件名称',
                  },
                  {
                    name: '移动',
                    description: '移动到其他位置',
                  },
                  {
                    name: '复制',
                    description: '创建文件副本',
                  },
                  {
                    name: '分享',
                    description: '分享给其他人',
                  },
                  {
                    name: '删除',
                    description: '永久删除文件',
                    color: '#ff4757',
                  },
                ],
                cancelText: '取消',
                closeOnPressOverlay: true,
                beforeClose: async (action, item) => {
                  if (action === 'item' && item?.name === '删除') {
                    return await handleComplexOperation('删除文件');
                  }
                  return true;
                },
                onSelect: (item, index) => {
                  console.log('文件操作 -> 选项:', item, index);
                  Alert.alert('操作确认', `已执行: ${item.name}`);
                },
                onClose: () => console.log('文件操作 -> 关闭'),
              });
            }}
          >
            复杂文件操作
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '用户管理',
                actions: [
                  {
                    name: '查看资料',
                    callback: () => {
                      Alert.alert('提示', '正在查看用户资料...');
                    },
                  },
                  {
                    name: '发送消息',
                    callback: () => {
                      Alert.alert('提示', '正在打开聊天界面...');
                    },
                  },
                  {
                    name: '添加好友',
                    callback: () => {
                      Alert.alert('提示', '好友请求已发送');
                    },
                  },
                  {
                    name: '举报用户',
                    color: '#ff6b6b',
                    callback: () => {
                      Alert.alert('提示', '举报已提交，我们会尽快处理');
                    },
                  },
                  {
                    name: '拉黑用户',
                    color: '#ff4757',
                    callback: () => {
                      Alert.alert('确认', '确定要拉黑此用户吗？', [
                        { text: '取消' },
                        {
                          text: '确认',
                          onPress: () => Alert.alert('提示', '用户已被拉黑'),
                        },
                      ]);
                    },
                  },
                ],
                cancelText: '取消',
                onClose: () => console.log('用户管理 -> 关闭'),
              });
            }}
          >
            用户管理操作
          </Button>

          <Button
            style={styles.buttonContainer}
            onPress={() => {
              ActionSheet.open({
                title: '系统设置',
                description: '调整应用程序设置',
                actions: [
                  { name: '通知设置' },
                  { name: '隐私设置' },
                  { name: '账户安全' },
                  { name: '数据同步', loading: true },
                  { name: '清除缓存' },
                  { name: '恢复默认设置', disabled: true },
                  { name: '退出登录', color: '#ff4757' },
                ],
                cancelText: '取消',
                round: true,
                closeOnPressOverlay: false,
                beforeClose: (action, item) => {
                  if (action === 'item' && item?.name === '退出登录') {
                    return new Promise((resolve) => {
                      Alert.alert(
                        '确认退出',
                        '退出登录后需要重新输入账号密码',
                        [
                          { text: '取消', onPress: () => resolve(false) },
                          { text: '确认退出', onPress: () => resolve(true) },
                        ]
                      );
                    });
                  }
                  return true;
                },
                onSelect: (item, index) => {
                  console.log('系统设置 -> 选项:', item, index);
                  if (item.name !== '退出登录') {
                    Alert.alert('设置', `正在打开 ${item.name}...`);
                  } else {
                    Alert.alert('提示', '已退出登录');
                  }
                },
                onClose: () => console.log('系统设置 -> 关闭'),
              });
            }}
          >
            系统设置菜单
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default AdvancedFeatures;
