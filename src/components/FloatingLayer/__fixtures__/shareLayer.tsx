import React, { useState } from 'react';
import { Button, FloatingLayer, Space } from '@xrnjs/ui';
import { View, Text } from 'react-native';
import styles from './style';
import Card from '_global/Card';

const ShareLayerScreen = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const shareItems = Array.from({ length: 6 }).map((_, index) => (
    <View style={styles.shareItem} key={index}>
      <Text style={styles.shareItemText}>分享{index + 1}</Text>
    </View>
  ));

  const manyShareItems = Array.from({ length: 12 }).map((_, index) => (
    <View style={styles.shareItem} key={index}>
      <Text style={styles.shareItemText}>选项{index + 1}</Text>
    </View>
  ));

  return (
    <Space>
      <Card title="基础分享浮层">
        <FloatingLayer
          visible={visible1}
          onPressOverlay={() => setVisible1(false)}
          items={shareItems}
          textButton="取消分享"
          onPressTextButton={() => setVisible1(false)}
        />
        <Button onPress={() => setVisible1(true)}>打开分享浮层</Button>
      </Card>

      <Card title="多项分享浮层">
        <FloatingLayer
          visible={visible2}
          onPressOverlay={() => setVisible2(false)}
          items={manyShareItems}
          textButton="取消"
          onPressTextButton={() => setVisible2(false)}
        />
        <Button onPress={() => setVisible2(true)}>多项分享浮层</Button>
      </Card>

      <Card title="自定义分享项">
        <FloatingLayer
          visible={visible3}
          onPressOverlay={() => setVisible3(false)}
          items={[
            <View
              style={[styles.shareItem, { backgroundColor: '#e3f2fd' }]}
              key="wechat"
            >
              <Text style={styles.shareItemText}>微信</Text>
            </View>,
            <View
              style={[styles.shareItem, { backgroundColor: '#f3e5f5' }]}
              key="qq"
            >
              <Text style={styles.shareItemText}>QQ</Text>
            </View>,
            <View
              style={[styles.shareItem, { backgroundColor: '#e8f5e8' }]}
              key="weibo"
            >
              <Text style={styles.shareItemText}>微博</Text>
            </View>,
            <View
              style={[styles.shareItem, { backgroundColor: '#fff3e0' }]}
              key="link"
            >
              <Text style={styles.shareItemText}>复制链接</Text>
            </View>,
          ]}
          textButton="取消分享"
          onPressTextButton={() => setVisible3(false)}
        />
        <Button onPress={() => setVisible3(true)}>自定义分享项</Button>
      </Card>
    </Space>
  );
};

export default ShareLayerScreen;
