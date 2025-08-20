import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Card from '_global/Card';
import { Layout, Space } from '@xrnjs/ui';
import { styles } from './style';

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Card title="复杂布局">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>多列布局</Text>
            <Text style={styles.demoDescription}>
              在 Layout 容器中实现多列布局效果
            </Text>

            <View style={[styles.layoutExample, styles.layoutExampleTall]}>
              <Layout background="#f0f0f0">
                <View style={styles.rowContainer}>
                  <View style={[styles.columnItem, styles.colorPrimary]}>
                    <Text style={styles.contentText}>列 1</Text>
                  </View>
                  <View style={[styles.columnItem, styles.colorSuccess]}>
                    <Text style={styles.contentText}>列 2</Text>
                  </View>
                  <View style={[styles.columnItem, styles.colorWarning]}>
                    <Text style={styles.contentText}>列 3</Text>
                  </View>
                </View>
              </Layout>
            </View>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>嵌套布局</Text>
            <Text style={styles.demoDescription}>
              Layout 容器中嵌套多个子容器的复杂布局
            </Text>

            <View style={[styles.layoutExample, styles.layoutExampleTall]}>
              <Layout background="#f0f0f0">
                <View style={styles.nestedContainer}>
                  <View style={[styles.nestedItem, styles.colorPrimary]}>
                    <Text style={styles.contentText}>头部区域</Text>
                  </View>

                  <View style={styles.rowContainer}>
                    <View style={[styles.nestedItem, styles.colorSuccess]}>
                      <Text style={styles.contentText}>左侧</Text>
                    </View>
                    <View style={[styles.nestedItem, styles.colorWarning]}>
                      <Text style={styles.contentText}>右侧</Text>
                    </View>
                  </View>

                  <View style={[styles.nestedItem, styles.colorError]}>
                    <Text style={styles.contentText}>底部区域</Text>
                  </View>
                </View>
              </Layout>
            </View>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>全屏布局</Text>
            <Text style={styles.demoDescription}>
              无侧边距的全屏布局，适用于图片展示、视频播放等场景
            </Text>

            <View style={[styles.layoutExample]}>
              <Layout sidePadding={0} background="#000">
                <View style={[styles.contentWrapper, styles.colorOrange]}>
                  <Text style={styles.contentText}>全屏内容</Text>
                  <Text style={styles.contentSubText}>
                    适用于媒体展示、游戏界面等
                  </Text>
                </View>
              </Layout>
            </View>
          </View>
        </Space>
      </Card>
    </ScrollView>
  );
};
