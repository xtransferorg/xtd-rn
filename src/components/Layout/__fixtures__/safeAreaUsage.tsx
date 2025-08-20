import React from 'react';
import { ScrollView, View, Text, Platform } from 'react-native';
import Card from '_global/Card';
import { Layout, Space } from '@xrnjs/ui';
import { styles } from './style';

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Card title="安全区域配置">
        <Space gap={16}>
          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>底部安全区域</Text>
            <Text style={styles.demoDescription}>
              通过 bottomSafeArea 属性控制底部安全区域的处理方式
            </Text>

            <Space gap={12}>
              <View style={[styles.layoutExample]}>
                <Layout bottomSafeArea={false} background="#f0f0f0">
                  <View style={[styles.contentWrapper, styles.colorGray]}>
                    <Text style={styles.contentText}>无底部安全区域</Text>
                    <Text style={styles.contentSubText}>
                      bottomSafeArea: false
                    </Text>
                  </View>
                </Layout>
              </View>

              <View style={[styles.layoutExample]}>
                <Layout bottomSafeArea={true} background="#f0f0f0">
                  <View style={[styles.contentWrapper, styles.colorPrimary]}>
                    <Text style={styles.contentText}>默认底部安全区域</Text>
                    <Text style={styles.contentSubText}>
                      bottomSafeArea: true
                      {Platform.OS === 'ios' ? ' (SafeAreaView)' : ' (30px)'}
                    </Text>
                  </View>
                </Layout>
              </View>

              <View style={[styles.layoutExample]}>
                <Layout bottomSafeArea={20} background="#f0f0f0">
                  <View style={[styles.contentWrapper, styles.colorSuccess]}>
                    <Text style={styles.contentText}>自定义安全区域</Text>
                    <Text style={styles.contentSubText}>
                      bottomSafeArea: 20
                    </Text>
                  </View>
                </Layout>
              </View>

              <View style={[styles.layoutExample]}>
                <Layout bottomSafeArea={50} background="#f0f0f0">
                  <View style={[styles.contentWrapper, styles.colorWarning]}>
                    <Text style={styles.contentText}>较大安全区域</Text>
                    <Text style={styles.contentSubText}>
                      bottomSafeArea: 50
                    </Text>
                  </View>
                </Layout>
              </View>
            </Space>
          </View>

          <View style={styles.demoContainer}>
            <Text style={styles.demoTitle}>平台差异说明</Text>
            <Text style={styles.demoDescription}>
              • iOS: bottomSafeArea=true 时使用 SafeAreaView{'\n'}• Android:
              bottomSafeArea=true 时使用 30px 固定高度{'\n'}• Web:
              不处理底部安全区域{'\n'}• 数字值: 所有平台使用指定高度
            </Text>
          </View>
        </Space>
      </Card>
    </ScrollView>
  );
};
