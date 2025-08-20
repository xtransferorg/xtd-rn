import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Space, Button, Notification } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const StyleUsage: React.FC = () => {
  const [customTitleVisible, setCustomTitleVisible] = useState<boolean>(false);
  const [customDescVisible, setCustomDescVisible] = useState<boolean>(false);

  const showCustomTitleNotification = () => {
    Notification.success({
      title: '自定义标题样式',
      description: '这个通知的标题使用了自定义样式',
      titleStyle: {
        color: '#52c41a',
        fontSize: 18,
        fontWeight: 'bold',
      },
    });
  };

  const showCustomDescNotification = () => {
    Notification.info({
      title: '自定义描述样式',
      description: '这个通知的描述文本使用了自定义样式',
      descriptionStyle: {
        color: '#1890ff',
        fontSize: 16,
        fontStyle: 'italic',
      },
    });
  };

  const showCustomPropsNotification = () => {
    setCustomTitleVisible(true);
  };

  const showLimitedLinesNotification = () => {
    setCustomDescVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card title="样式自定义">
          <Space direction="vertical">
            <View style={styles.buttonContainer}>
              <Button onPress={showCustomTitleNotification}>
                自定义标题样式
              </Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={showCustomDescNotification}>
                自定义描述样式
              </Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={showCustomPropsNotification}>
                自定义文本属性
              </Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={showLimitedLinesNotification}>
                限制行数显示
              </Button>
            </View>
          </Space>

          <Text style={styles.exampleDescription}>
            通过 titleStyle、descriptionStyle 等属性自定义通知的样式
          </Text>
        </Card>
      </Space>

      {/* 自定义文本属性 */}
      <Notification
        visible={customTitleVisible}
        status="warning"
        title="自定义文本属性示例"
        description="这个通知演示了如何使用 titleProps 和 descriptionProps"
        titleProps={{
          numberOfLines: 1,
          ellipsizeMode: 'middle',
        }}
        descriptionProps={{
          numberOfLines: 2,
          ellipsizeMode: 'tail',
        }}
        titleStyle={{
          color: '#faad14',
          textAlign: 'center',
        }}
        onClosed={() => setCustomTitleVisible(false)}
      />

      {/* 限制行数显示 */}
      <Notification
        visible={customDescVisible}
        status="error"
        title="这是一个很长的标题，用来演示文本截断效果"
        description="这是一个很长的描述文本，用来演示当文本超出指定行数时的截断效果。通过设置 numberOfLines 和 ellipsizeMode 可以控制文本的显示方式。"
        titleProps={{
          numberOfLines: 1,
          ellipsizeMode: 'tail',
        }}
        descriptionProps={{
          numberOfLines: 2,
          ellipsizeMode: 'tail',
        }}
        onClosed={() => setCustomDescVisible(false)}
      />
    </ScrollView>
  );
};

export default StyleUsage;
