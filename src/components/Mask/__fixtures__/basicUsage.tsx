import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Space, Button, Mask } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const BasicUsage: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleWithContent, setVisibleWithContent] = useState<boolean>(false);
  const [visibleStatusBar, setVisibleStatusBar] = useState<boolean>(false);

  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card title="基础用法">
          <Space direction="vertical">
            <View style={styles.buttonContainer}>
              <Button onPress={() => setVisible(true)}>显示基础蒙层</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setVisibleWithContent(true)}>
                显示带内容的蒙层
              </Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setVisibleStatusBar(true)}>
                显示覆盖状态栏的蒙层
              </Button>
            </View>
          </Space>
        </Card>
      </Space>

      {/* 基础蒙层 */}
      <Mask visible={visible} onBackdropPress={() => setVisible(false)} />

      {/* 带内容的蒙层 */}
      <Mask
        visible={visibleWithContent}
        onBackdropPress={() => setVisibleWithContent(false)}
      >
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>蒙层内容</Text>
          <Text style={styles.contentText}>
            这是一个简单的蒙层内容示例，点击背景可以关闭
          </Text>
          <Button
            onPress={() => setVisibleWithContent(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>关闭</Text>
          </Button>
        </View>
      </Mask>

      {/* 覆盖状态栏的蒙层 */}
      <Mask
        visible={visibleStatusBar}
        onBackdropPress={() => setVisibleStatusBar(false)}
        statusBarTranslucent
      >
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>覆盖状态栏</Text>
          <Text style={styles.contentText}>这个蒙层会覆盖系统状态栏</Text>
          <Button
            onPress={() => setVisibleStatusBar(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>关闭</Text>
          </Button>
        </View>
      </Mask>
    </ScrollView>
  );
};

export default BasicUsage;
