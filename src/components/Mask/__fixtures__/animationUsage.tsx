import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Space, Button, Mask } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const AnimationUsage: React.FC = () => {
  const [fastVisible, setFastVisible] = useState<boolean>(false);
  const [slowVisible, setSlowVisible] = useState<boolean>(false);
  const [callbackVisible, setCallbackVisible] = useState<boolean>(false);
  const [animationMessage, setAnimationMessage] = useState<string>('');

  const handleAnimationDone = () => {
    setAnimationMessage('动画完成！');
    setTimeout(() => {
      setAnimationMessage('');
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card title="动画效果">
          <Space direction="vertical">
            <View style={styles.buttonContainer}>
              <Button onPress={() => setFastVisible(true)}>
                快速动画 (100ms)
              </Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setSlowVisible(true)}>
                慢速动画 (1000ms)
              </Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setCallbackVisible(true)}>
                动画完成回调
              </Button>
            </View>

            {animationMessage ? (
              <Text style={styles.contentText}>{animationMessage}</Text>
            ) : null}
          </Space>
        </Card>
      </Space>

      {/* 快速动画 */}
      <Mask
        visible={fastVisible}
        duration={100}
        onBackdropPress={() => setFastVisible(false)}
      >
        <View style={styles.animatedContent}>
          <Text style={styles.animatedText}>快速动画</Text>
          <Text style={styles.animatedText}>100ms</Text>
        </View>
      </Mask>

      {/* 慢速动画 */}
      <Mask
        visible={slowVisible}
        duration={1000}
        onBackdropPress={() => setSlowVisible(false)}
      >
        <View style={styles.animatedContent}>
          <Text style={styles.animatedText}>慢速动画</Text>
          <Text style={styles.animatedText}>1000ms</Text>
        </View>
      </Mask>

      {/* 动画完成回调 */}
      <Mask
        visible={callbackVisible}
        duration={500}
        onBackdropPress={() => setCallbackVisible(false)}
        onFadeDone={handleAnimationDone}
      >
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>动画回调</Text>
          <Text style={styles.contentText}>动画完成后会触发回调函数</Text>
          <Button
            onPress={() => setCallbackVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>关闭</Text>
          </Button>
        </View>
      </Mask>
    </ScrollView>
  );
};

export default AnimationUsage;
