import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Card from '_global/Card';
import { Layout, Space } from '@xrnjs/ui';
import { styles } from './style';

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Card title="基础用法">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>默认布局</Text>
            <Text style={styles.demoDescription}>
              最基本的布局容器，提供页面级的布局结构
            </Text>

            <View style={[styles.layoutExample]}>
              <Layout>
                <View style={[styles.contentWrapper, styles.colorPrimary]}>
                  <Text style={styles.contentText}>默认布局</Text>
                  <Text style={styles.contentSubText}>
                    sidePadding: 12, background: #F5F5F5
                  </Text>
                </View>
              </Layout>
            </View>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>自定义背景色</Text>
            <Text style={styles.demoDescription}>
              通过 background 属性设置页面背景色
            </Text>

            <View style={[styles.layoutExample]}>
              <Layout background="#ff934a">
                <View style={[styles.contentWrapper, styles.colorSuccess]}>
                  <Text style={styles.contentText}>自定义背景</Text>
                  <Text style={styles.contentSubText}>background: #ff934a</Text>
                </View>
              </Layout>
            </View>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>无侧边距</Text>
            <Text style={styles.demoDescription}>
              设置 sidePadding 为 0，内容区域占满整个宽度
            </Text>

            <View style={[styles.layoutExample]}>
              <Layout sidePadding={0} background="#722ed1">
                <View style={[styles.contentWrapper, styles.colorWarning]}>
                  <Text style={styles.contentText}>无侧边距</Text>
                  <Text style={styles.contentSubText}>sidePadding: 0</Text>
                </View>
              </Layout>
            </View>
          </View>
        </Space>
      </Card>
    </ScrollView>
  );
};
