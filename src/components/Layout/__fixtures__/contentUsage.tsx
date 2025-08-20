import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Card from '_global/Card';
import { Layout, Space } from '@xrnjs/ui';
import { styles } from './style';

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Card title="内容布局">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>内容对齐方式</Text>
            <Text style={styles.demoDescription}>
              展示不同的内容对齐和布局方式
            </Text>

            <Space gap={12}>
              <View style={[styles.layoutExample]}>
                <Layout background="#f0f0f0">
                  <View
                    style={[
                      styles.contentWrapper,
                      styles.centerContent,
                      styles.colorPrimary,
                    ]}
                  >
                    <Text style={styles.contentText}>居中对齐</Text>
                    <Text style={styles.contentSubText}>
                      justifyContent: center, alignItems: center
                    </Text>
                  </View>
                </Layout>
              </View>

              <View style={[styles.layoutExample]}>
                <Layout background="#f0f0f0">
                  <View
                    style={[
                      styles.contentWrapper,
                      styles.topContent,
                      styles.colorSuccess,
                    ]}
                  >
                    <Text style={styles.contentText}>顶部对齐</Text>
                    <Text style={styles.contentSubText}>
                      justifyContent: flex-start
                    </Text>
                  </View>
                </Layout>
              </View>

              <View style={[styles.layoutExample]}>
                <Layout background="#f0f0f0">
                  <View
                    style={[
                      styles.contentWrapper,
                      styles.bottomContent,
                      styles.colorWarning,
                    ]}
                  >
                    <Text style={styles.contentText}>底部对齐</Text>
                    <Text style={styles.contentSubText}>
                      justifyContent: flex-end
                    </Text>
                  </View>
                </Layout>
              </View>

              <View style={[styles.layoutExample]}>
                <Layout background="#f0f0f0">
                  <View
                    style={[
                      styles.contentWrapper,
                      styles.leftContent,
                      styles.colorError,
                    ]}
                  >
                    <Text style={styles.contentText}>左对齐</Text>
                    <Text style={styles.contentSubText}>
                      alignItems: flex-start
                    </Text>
                  </View>
                </Layout>
              </View>

              <View style={[styles.layoutExample]}>
                <Layout background="#f0f0f0">
                  <View
                    style={[
                      styles.contentWrapper,
                      styles.rightContent,
                      styles.colorPurple,
                    ]}
                  >
                    <Text style={styles.contentText}>右对齐</Text>
                    <Text style={styles.contentSubText}>
                      alignItems: flex-end
                    </Text>
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
