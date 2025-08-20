import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Popup, Button, Space, Switch } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ConfigOptions = () => {
  const [visible1, setVisible1] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);
  const [visible3, setVisible3] = useState<boolean>(false);
  const [visible4, setVisible4] = useState<boolean>(false);

  return (
    <ScrollView>
      <Space>
        <Card>
          <Text style={styles.cardTitle}>无遮罩层</Text>
          <Popup
            visible={visible1}
            position="center"
            overlay={false}
            onPressOverlay={() => setVisible1(false)}
          >
            <View style={styles.wrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>这个弹出层没有遮罩层</Text>
                <View style={styles.spacingContainer}>
                  <Button onPress={() => setVisible1(false)}>关闭</Button>
                </View>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisible1(true)}>无遮罩层</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>底部安全区适配</Text>
          <Popup
            visible={visible2}
            position="bottom"
            round
            safeAreaInsetBottom
            onPressOverlay={() => setVisible2(false)}
          >
            <View style={styles.largeWrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>
                  这个弹出层开启了底部安全区适配，在有 Home Indicator
                  的设备上会自动适配
                </Text>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisible2(true)}>底部安全区适配</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>禁用懒渲染</Text>
          <Popup
            visible={visible3}
            position="center"
            lazyRender={false}
            onPressOverlay={() => setVisible3(false)}
          >
            <View style={styles.wrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>
                  这个弹出层禁用了懒渲染，内容会在组件挂载时就渲染
                </Text>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisible3(true)}>禁用懒渲染</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>关闭时销毁</Text>
          <Popup
            visible={visible4}
            position="center"
            destroyOnClosed
            onPressOverlay={() => setVisible4(false)}
          >
            <View style={styles.wrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>
                  这个弹出层在关闭时会销毁内容，下次打开时重新渲染
                </Text>
                <Switch />
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisible4(true)}>关闭时销毁</Button>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default ConfigOptions;
