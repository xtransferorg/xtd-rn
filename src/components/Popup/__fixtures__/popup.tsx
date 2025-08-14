import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Popup, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const PopupScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [visible1, setVisible1] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);
  const [visible3, setVisible3] = useState<boolean>(false);
  const [visible4, setVisible4] = useState<boolean>(false);

  return (
    <ScrollView>
      <Space>
        <Card>
          <Popup
            visible={visible}
            position="bottom"
            round
            onPressOverlay={() => setVisible(false)}
          >
            <Popup.Header
              title={<Text style={styles.title}>Detail</Text>}
              onCancel={() => setVisible(false)}
              showConfirmButton={false}
              headerStyle={styles.headerWrapper}
            />
            <ScrollView style={styles.scrollView}>
              <View style={styles.listItem}>
                <View style={styles.dot} />
                <Text style={styles.text}>
                  查看这是第一个详细内容这是第一个详细内容这是第一个详细内容这是第一个详细内容这是第一个详细内容更多
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.dot} />
                <Text style={styles.text}>
                  这是第二个详细内容这是第二个详细内容这是第二个详细内容这是第二个详细内容这是第二个详细内容
                </Text>
              </View>
            </ScrollView>
          </Popup>
          <Button onPress={() => setVisible(true)}>弹出位置：bottom</Button>
        </Card>

        <Card>
          <Popup
            visible={visible1}
            position="left"
            onPressOverlay={() => setVisible1(false)}
          >
            <View style={styles.wrapper} />
          </Popup>
          <Button onPress={() => setVisible1(true)}>弹出位置：left</Button>
        </Card>

        <Card>
          <Popup
            visible={visible2}
            position="right"
            onPressOverlay={() => setVisible2(false)}
          >
            <View style={styles.wrapper} />
          </Popup>
          <Button onPress={() => setVisible2(true)}>弹出位置：right</Button>
        </Card>

        <Card>
          <Popup
            visible={visible3}
            position="top"
            onPressOverlay={() => setVisible3(false)}
          >
            <View style={styles.wrapper} />
          </Popup>
          <Button onPress={() => setVisible3(true)}>弹出位置：top</Button>
        </Card>

        <Card>
          <Popup
            visible={visible4}
            position="center"
            onPressOverlay={() => setVisible4(false)}
          >
            <View style={styles.wrapper} />
          </Popup>
          <Button onPress={() => setVisible4(true)}>弹出位置：center</Button>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default PopupScreen;
