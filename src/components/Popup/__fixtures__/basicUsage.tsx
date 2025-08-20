import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Popup, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage = () => {
  const [visible1, setVisible1] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);
  const [visible3, setVisible3] = useState<boolean>(false);

  return (
    <ScrollView>
      <Space>
        <Card>
          <Text style={styles.cardTitle}>基础弹出层</Text>
          <Popup
            visible={visible1}
            position="center"
            onPressOverlay={() => setVisible1(false)}
          >
            <View style={styles.wrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>这是一个基础的弹出层内容</Text>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisible1(true)}>显示基础弹出层</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>带圆角的弹出层</Text>
          <Popup
            visible={visible2}
            position="center"
            round
            onPressOverlay={() => setVisible2(false)}
          >
            <View style={[styles.wrapper, styles.roundedContainer]}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>这是一个带圆角的弹出层</Text>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisible2(true)}>显示圆角弹出层</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>禁用遮罩点击关闭</Text>
          <Popup
            visible={visible3}
            position="center"
            closeOnPressOverlay={false}
            onPressOverlay={() => console.log('点击了遮罩，但不会关闭')}
          >
            <View style={styles.wrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>点击遮罩不会关闭此弹出层</Text>
                <View style={styles.spacingContainer}>
                  <Button onPress={() => setVisible3(false)}>手动关闭</Button>
                </View>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisible3(true)}>禁用遮罩关闭</Button>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default BasicUsage;
