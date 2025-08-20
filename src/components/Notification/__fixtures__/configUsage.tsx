import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Space, Button, Notification } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const ConfigUsage: React.FC = () => {
  const [noDurationVisible, setNoDurationVisible] = useState<boolean>(false);
  const [customOffsetVisible, setCustomOffsetVisible] =
    useState<boolean>(false);

  const showNoIconNotification = () => {
    Notification.info({
      title: '无图标通知',
      description: '这是一个不显示图标的通知',
      showIcon: false,
    });
  };

  const showCustomDurationNotification = () => {
    Notification.warning({
      title: '自定义时长',
      description: '这个通知将在10秒后自动关闭',
      duration: 10000,
    });
  };

  const showNoDurationNotification = () => {
    setNoDurationVisible(true);
  };

  const showCustomOffsetNotification = () => {
    setCustomOffsetVisible(true);
  };

  const showCustomButtonNotification = () => {
    Notification.info({
      title: '自定义按钮',
      description: '这个通知包含自定义的操作按钮',
      showIcon: false,
      btn: (
        <View style={styles.customButtonContainer}>
          <TouchableOpacity style={styles.weakButton}>
            <Text style={styles.weakButtonText}>取消</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.solidButton}>
            <Text style={styles.solidButtonText}>确认</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card title="配置选项">
          <Space direction="vertical">
            <View style={styles.buttonContainer}>
              <Button onPress={showNoIconNotification}>隐藏图标</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={showCustomDurationNotification}>
                自定义时长 (10秒)
              </Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={showNoDurationNotification}>不自动关闭</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={showCustomOffsetNotification}>
                自定义偏移量
              </Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={showCustomButtonNotification}>自定义按钮</Button>
            </View>
          </Space>

          <Text style={styles.exampleDescription}>
            通过配置不同的属性来自定义通知的显示效果和行为
          </Text>
        </Card>
      </Space>

      {/* 不自动关闭的通知 */}
      <Notification
        visible={noDurationVisible}
        status="info"
        title="手动关闭"
        description="这个通知不会自动关闭，需要手动点击关闭按钮"
        duration={0}
        onClosed={() => setNoDurationVisible(false)}
      />

      {/* 自定义偏移量的通知 */}
      <Notification
        visible={customOffsetVisible}
        status="success"
        title="自定义偏移量"
        description="这个通知距离顶部有额外的偏移量"
        offset={100}
        onClosed={() => setCustomOffsetVisible(false)}
      />
    </ScrollView>
  );
};

export default ConfigUsage;
