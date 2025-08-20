import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Space, Button, Mask } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const PositionUsage: React.FC = () => {
  const [topVisible, setTopVisible] = useState<boolean>(false);
  const [centerVisible, setCenterVisible] = useState<boolean>(false);
  const [bottomVisible, setBottomVisible] = useState<boolean>(false);
  const [customVisible, setCustomVisible] = useState<boolean>(false);

  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card title="内容位置">
          <Space direction="vertical">
            <View style={styles.buttonContainer}>
              <Button onPress={() => setTopVisible(true)}>顶部位置</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setCenterVisible(true)}>居中位置</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setBottomVisible(true)}>底部位置</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setCustomVisible(true)}>自定义样式</Button>
            </View>
          </Space>
        </Card>
      </Space>

      {/* 顶部位置 */}
      <Mask visible={topVisible} onBackdropPress={() => setTopVisible(false)}>
        <View style={styles.topContent}>
          <Text style={styles.contentTitle}>顶部内容</Text>
          <Text style={styles.contentText}>内容显示在屏幕顶部</Text>
          <Button
            onPress={() => setTopVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>关闭</Text>
          </Button>
        </View>
      </Mask>

      {/* 居中位置 */}
      <Mask
        visible={centerVisible}
        onBackdropPress={() => setCenterVisible(false)}
      >
        <View style={styles.centerContent}>
          <View style={styles.contentBox}>
            <Text style={styles.contentTitle}>居中内容</Text>
            <Text style={styles.contentText}>内容显示在屏幕中央</Text>
            <Button
              onPress={() => setCenterVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>关闭</Text>
            </Button>
          </View>
        </View>
      </Mask>

      {/* 底部位置 */}
      <Mask
        visible={bottomVisible}
        onBackdropPress={() => setBottomVisible(false)}
      >
        <View style={styles.bottomContent}>
          <Text style={styles.contentTitle}>底部内容</Text>
          <Text style={styles.contentText}>内容显示在屏幕底部</Text>
          <Button
            onPress={() => setBottomVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>关闭</Text>
          </Button>
        </View>
      </Mask>

      {/* 自定义样式 */}
      <Mask
        visible={customVisible}
        onBackdropPress={() => setCustomVisible(false)}
        overlayStyle={{ justifyContent: 'flex-end', paddingBottom: 50 }}
      >
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>自定义样式</Text>
          <Text style={styles.contentText}>
            通过 overlayStyle 自定义容器样式
          </Text>
          <Button
            onPress={() => setCustomVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>关闭</Text>
          </Button>
        </View>
      </Mask>
    </ScrollView>
  );
};

export default PositionUsage;
