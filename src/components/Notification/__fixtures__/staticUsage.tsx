import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Space, Button, Notification } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const StaticUsage: React.FC = () => {
  const showInfoNotification = () => {
    Notification.info({
      title: '信息通知',
      description: '这是通过静态方法调用的信息通知',
    });
  };

  const showSuccessNotification = () => {
    Notification.success({
      title: '操作成功',
      description: '数据保存成功，您可以继续其他操作',
    });
  };

  const showWarningNotification = () => {
    Notification.warning({
      title: '警告提示',
      description: '系统检测到异常，建议您检查相关设置',
    });
  };

  const showErrorNotification = () => {
    Notification.error({
      title: '操作失败',
      description: '网络连接超时，请检查网络设置后重试',
    });
  };

  const showLongTextNotification = () => {
    Notification.info({
      title: '长文本通知示例',
      description:
        'B2B外贸金融全功能平台满足您的所有需求，国际化服务，服务全球买卖家轻松实现7*24全球免费秒速到账。99%超高客户好评率安心之选。简单三步，极速开户。',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card title="静态方法调用">
          <Space direction="vertical">
            <View style={styles.buttonRow}>
              <View style={styles.buttonItem}>
                <Button onPress={showInfoNotification}>信息</Button>
              </View>
              <View style={styles.buttonItem}>
                <Button onPress={showSuccessNotification}>成功</Button>
              </View>
            </View>

            <View style={styles.buttonRow}>
              <View style={styles.buttonItem}>
                <Button onPress={showWarningNotification}>警告</Button>
              </View>
              <View style={styles.buttonItem}>
                <Button onPress={showErrorNotification}>错误</Button>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={showLongTextNotification}>长文本通知</Button>
            </View>
          </Space>

          <Text style={styles.exampleDescription}>
            使用 Notification.info()、Notification.success()
            等静态方法快速显示通知
          </Text>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default StaticUsage;
