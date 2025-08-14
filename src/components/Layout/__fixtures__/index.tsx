import React from 'react';
import { View, Text } from 'react-native';
import { Layout } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const LayoutScreen = () => {
  return (
    <Card title="基本用法" style={{ height: 300 }} itemStyle={{ flex: 1 }}>
      <Layout sidePadding={0} bottomSafeArea background="#ff934a">
        <View style={styles.wrapper}>
          <Text style={styles.text}>内容区</Text>
        </View>
      </Layout>
    </Card>
  );
};

export default LayoutScreen;
