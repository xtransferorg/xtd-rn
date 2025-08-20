import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Space, Button, Mask } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const BackdropUsage: React.FC = () => {
  const [lightVisible, setLightVisible] = useState<boolean>(false);
  const [darkVisible, setDarkVisible] = useState<boolean>(false);
  const [whiteVisible, setWhiteVisible] = useState<boolean>(false);
  const [transparentVisible, setTransparentVisible] = useState<boolean>(false);

  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card title="背景样式">
          <Space direction="vertical">
            <View style={styles.buttonContainer}>
              <Button onPress={() => setLightVisible(true)}>
                浅色背景 (透明度 0.3)
              </Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setDarkVisible(true)}>
                深色背景 (透明度 0.9)
              </Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setWhiteVisible(true)}>白色背景</Button>
            </View>

            <View style={styles.buttonContainer}>
              <Button onPress={() => setTransparentVisible(true)}>
                透明背景
              </Button>
            </View>
          </Space>
        </Card>
      </Space>

      {/* 浅色背景 */}
      <Mask
        visible={lightVisible}
        backdropOpacity={0.3}
        onBackdropPress={() => setLightVisible(false)}
      >
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>浅色背景</Text>
          <Text style={styles.contentText}>背景透明度设置为 0.3，比较浅</Text>
          <Button
            onPress={() => setLightVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>关闭</Text>
          </Button>
        </View>
      </Mask>

      {/* 深色背景 */}
      <Mask
        visible={darkVisible}
        backdropOpacity={0.9}
        onBackdropPress={() => setDarkVisible(false)}
      >
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>深色背景</Text>
          <Text style={styles.contentText}>背景透明度设置为 0.9，比较深</Text>
          <Button
            onPress={() => setDarkVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>关闭</Text>
          </Button>
        </View>
      </Mask>

      {/* 白色背景 */}
      <Mask
        visible={whiteVisible}
        backdropStyle={styles.bgWhite}
        onBackdropPress={() => setWhiteVisible(false)}
      >
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>白色背景</Text>
          <Text style={styles.contentText}>自定义背景颜色为白色</Text>
          <Button
            onPress={() => setWhiteVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>关闭</Text>
          </Button>
        </View>
      </Mask>

      {/* 透明背景 */}
      <Mask
        visible={transparentVisible}
        transparent
        onBackdropPress={() => setTransparentVisible(false)}
      >
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>透明背景</Text>
          <Text style={styles.contentText}>完全透明的背景，只显示内容</Text>
          <Button
            onPress={() => setTransparentVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>关闭</Text>
          </Button>
        </View>
      </Mask>
    </ScrollView>
  );
};

export default BackdropUsage;
