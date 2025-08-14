/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Divider, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const DividerScreen = () => {
  return (
    <ScrollView>
      <Space>
        <Card style={styles.wrapper}>
          <Text style={styles.title}>基础用法-横</Text>
          <Divider style={styles.line} />
          <Divider
            style={[styles.line, { width: 200, marginHorizontal: 50 }]}
          />
          <Card style={styles.customCard}>
            <View style={styles.wrapper}>
              <Text style={styles.text}>卡片</Text>
              <Divider style={styles.line} />
              <Divider
                style={[styles.line, { width: 200, marginHorizontal: 50 }]}
              />
            </View>
          </Card>
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>基础用法-竖</Text>
          <Space direction="horizontal">
            <View style={{ height: 30 }}>
              <Divider direction="vertical" />
            </View>
          </Space>
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>基础用法-文本</Text>
          <Divider style={styles.line} contentPosition="center">
            我们是有底线的
          </Divider>
          <Divider
            style={[styles.line, { width: 310, paddingHorizontal: 50 }]}
            contentPosition="center"
          >
            我们是有底线的
          </Divider>
        </Card>

        <Card style={styles.wrapper}>
          <Text style={styles.title}>自定义宽度</Text>
          <Divider style={[styles.line, { width: 300 }]} />
          <Divider style={[styles.line, { width: 250 }]} />
          <Divider
            style={[styles.line, { width: 250 }]}
            contentPosition="center"
          >
            我们是有底线的
          </Divider>
          <Text style={styles.title}>自定义高度</Text>
          <Space direction="horizontal" gap={50}>
            <View style={{ height: 80 }}>
              <Divider direction="vertical" />
            </View>
            <View style={{ height: 50 }}>
              <Divider direction="vertical" />
            </View>
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};
export default DividerScreen;
