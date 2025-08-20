import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Space, Button, Notification } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const BasicUsage: React.FC = () => {
  const [infoVisible, setInfoVisible] = useState<boolean>(false);
  const [successVisible, setSuccessVisible] = useState<boolean>(false);
  const [warningVisible, setWarningVisible] = useState<boolean>(false);
  const [errorVisible, setErrorVisible] = useState<boolean>(false);

  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card title="基础用法">
          <Space direction="vertical">
            <View style={styles.buttonContainer}>
              <Button onPress={() => setInfoVisible(true)}>信息通知</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setSuccessVisible(true)}>成功通知</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setWarningVisible(true)}>警告通知</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setErrorVisible(true)}>错误通知</Button>
            </View>
          </Space>

          <Text style={styles.exampleDescription}>
            点击按钮显示不同类型的通知，通知会在5秒后自动关闭
          </Text>
        </Card>
      </Space>

      {/* 信息通知 */}
      <Notification
        visible={infoVisible}
        status="info"
        title="信息通知"
        description="这是一条信息通知，用于向用户传达一般性信息"
        onClosed={() => setInfoVisible(false)}
      />

      {/* 成功通知 */}
      <Notification
        visible={successVisible}
        status="success"
        title="操作成功"
        description="您的操作已成功完成，数据已保存"
        onClosed={() => setSuccessVisible(false)}
      />

      {/* 警告通知 */}
      <Notification
        visible={warningVisible}
        status="warning"
        title="警告提示"
        description="请注意，此操作可能会影响系统性能"
        onClosed={() => setWarningVisible(false)}
      />

      {/* 错误通知 */}
      <Notification
        visible={errorVisible}
        status="error"
        title="操作失败"
        description="操作失败，请检查网络连接后重试"
        onClosed={() => setErrorVisible(false)}
      />
    </ScrollView>
  );
};

export default BasicUsage;
