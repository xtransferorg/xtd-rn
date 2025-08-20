import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Card from '_global/Card';
import { Layout, Space } from '@xrnjs/ui';
import { styles } from './style';

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Card title="侧边距配置">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>不同侧边距</Text>
            <Text style={styles.demoDescription}>
              通过 sidePadding 属性控制布局容器的左右内边距
            </Text>

            <Space gap={12}>
              <View style={[styles.layoutExample]}>
                <Layout sidePadding={0} background="#f0f0f0">
                  <View style={[styles.contentWrapper, styles.colorPrimary]}>
                    <Text style={styles.contentText}>sidePadding: 0</Text>
                  </View>
                </Layout>
              </View>

              <View style={[styles.layoutExample]}>
                <Layout sidePadding={8} background="#f0f0f0">
                  <View style={[styles.contentWrapper, styles.colorSuccess]}>
                    <Text style={styles.contentText}>sidePadding: 8</Text>
                  </View>
                </Layout>
              </View>

              <View style={[styles.layoutExample]}>
                <Layout sidePadding={12} background="#f0f0f0">
                  <View style={[styles.contentWrapper, styles.colorWarning]}>
                    <Text style={styles.contentText}>
                      sidePadding: 12 (默认)
                    </Text>
                  </View>
                </Layout>
              </View>

              <View style={[styles.layoutExample]}>
                <Layout sidePadding={24} background="#f0f0f0">
                  <View style={[styles.contentWrapper, styles.colorError]}>
                    <Text style={styles.contentText}>sidePadding: 24</Text>
                  </View>
                </Layout>
              </View>

              <View style={[styles.layoutExample]}>
                <Layout sidePadding={40} background="#f0f0f0">
                  <View style={[styles.contentWrapper, styles.colorPurple]}>
                    <Text style={styles.contentText}>sidePadding: 40</Text>
                  </View>
                </Layout>
              </View>
            </Space>
          </View>
        </Space>
      </Card>
    </ScrollView>
  );
};
