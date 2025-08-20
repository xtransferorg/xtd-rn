import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Popup, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const Positions = () => {
  const [visibleBottom, setVisibleBottom] = useState<boolean>(false);
  const [visibleTop, setVisibleTop] = useState<boolean>(false);
  const [visibleLeft, setVisibleLeft] = useState<boolean>(false);
  const [visibleRight, setVisibleRight] = useState<boolean>(false);
  const [visibleCenter, setVisibleCenter] = useState<boolean>(false);

  return (
    <ScrollView>
      <Space>
        <Card>
          <Text style={styles.cardTitle}>底部弹出</Text>
          <Popup
            visible={visibleBottom}
            position="bottom"
            round
            onPressOverlay={() => setVisibleBottom(false)}
          >
            <View style={styles.largeWrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>从底部弹出的内容</Text>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisibleBottom(true)}>底部弹出</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>顶部弹出</Text>
          <Popup
            visible={visibleTop}
            position="top"
            onPressOverlay={() => setVisibleTop(false)}
          >
            <View style={styles.wrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>从顶部弹出的内容</Text>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisibleTop(true)}>顶部弹出</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>左侧弹出</Text>
          <Popup
            visible={visibleLeft}
            position="left"
            onPressOverlay={() => setVisibleLeft(false)}
          >
            <View style={styles.wrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>从左侧弹出的内容</Text>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisibleLeft(true)}>左侧弹出</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>右侧弹出</Text>
          <Popup
            visible={visibleRight}
            position="right"
            onPressOverlay={() => setVisibleRight(false)}
          >
            <View style={styles.wrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>从右侧弹出的内容</Text>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisibleRight(true)}>右侧弹出</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>中心弹出</Text>
          <Popup
            visible={visibleCenter}
            position="center"
            onPressOverlay={() => setVisibleCenter(false)}
          >
            <View style={styles.wrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>从中心弹出的内容</Text>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisibleCenter(true)}>中心弹出</Button>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default Positions;
