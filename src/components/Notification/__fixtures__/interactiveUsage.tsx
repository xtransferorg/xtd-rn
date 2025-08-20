import React, { useState } from 'react';
import { ScrollView, Text, View, Alert } from 'react-native';
import { Space, Button, Notification, Size, Fill } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const InteractiveUsage: React.FC = () => {
  const [callbackVisible, setCallbackVisible] = useState<boolean>(false);
  const [actionVisible, setActionVisible] = useState<boolean>(false);

  const showCallbackNotification = () => {
    Notification.info({
      title: '回调示例',
      description: '关闭这个通知时会触发回调函数',
    }).then(() => {
      Alert.alert('提示', '通知已关闭');
    });
  };

  const showActionNotification = () => {
    setActionVisible(true);
  };

  const handleWeakPress = async () => {
    Alert.alert('提示', '点击了次要按钮');
  };

  const handleSolidPress = async () => {
    Alert.alert('提示', '点击了主要按钮');
  };

  const showComplexNotification = () => {
    Notification.warning({
      title: '确认操作',
      description: '您确定要删除这个项目吗？此操作不可撤销',
      duration: 0,
      btn: (
        <View style={styles.customButtonContainer}>
          <Button
            size={Size.small}
            fill={Fill.weak}
            onPress={() => Alert.alert('提示', '已取消操作')}
          >
            取消
          </Button>
          <Button
            size={Size.small}
            onPress={() => Alert.alert('提示', '已确认删除')}
            style={{ marginLeft: 8 }}
          >
            确认删除
          </Button>
        </View>
      ),
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card title="交互示例">
          <Space direction="vertical">
            <View style={styles.buttonContainer}>
              <Button onPress={showCallbackNotification}>关闭回调</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={showActionNotification}>按钮事件</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={showComplexNotification}>复杂交互</Button>
            </View>
          </Space>

          <Text style={styles.exampleDescription}>
            演示通知的各种交互功能，包括回调函数和自定义按钮事件
          </Text>
        </Card>
      </Space>

      {/* 带回调的通知 */}
      <Notification
        visible={callbackVisible}
        status="info"
        title="回调示例"
        description="这个通知演示了各种回调事件的使用"
        onClose={() => console.log('开始关闭')}
        onClosed={() => {
          console.log('关闭完成');
          setCallbackVisible(false);
        }}
        onRequestClose={() => console.log('请求关闭')}
      />

      {/* 带按钮事件的通知 */}
      <Notification
        visible={actionVisible}
        status="warning"
        title="按钮事件示例"
        description="点击不同的按钮会触发不同的事件"
        duration={0}
        onWeakPress={handleWeakPress}
        onSolidPress={handleSolidPress}
        onClosed={() => setActionVisible(false)}
        btn={
          <View style={styles.customButtonContainer}>
            <Button
              size={Size.small}
              fill={Fill.weak}
              onPress={handleWeakPress}
            >
              次要操作
            </Button>
            <Button
              size={Size.small}
              onPress={handleSolidPress}
              style={{ marginLeft: 8 }}
            >
              主要操作
            </Button>
          </View>
        }
      />
    </ScrollView>
  );
};

export default InteractiveUsage;
