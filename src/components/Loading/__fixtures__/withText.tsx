import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Loading, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import { ProgressBar } from './progress';

const WithText = () => {
  return (
    <ScrollView>
      <Space>
        <Card title="默认文案">
          <Loading tipDisable={true} />
        </Card>

        <Card title="自定义文案">
          <View style={styles.wrapper}>
            <Space>
              <Loading
                size="large"
                tipDisable={true}
                tip={<Text>正在加载数据...</Text>}
              />

              <Loading
                name="loading-xt"
                loadingType="goldCoin"
                size={48}
                tipDisable={true}
                tip={<Text>南美、非洲等国家外汇少，本币报价获得更多商机</Text>}
              />
            </Space>
          </View>
        </Card>

        <Card title="带进度条">
          <View style={styles.wrapper}>
            <Loading
              size="large"
              tipDisable={true}
              tip={
                <View style={{ alignItems: 'center' }}>
                  <ProgressBar
                    width={182}
                    style={{ marginTop: 24, marginBottom: 16 }}
                  />
                  <Text>文案可配置，支持轮播展示，建议轮播间隔3s</Text>
                </View>
              }
              style={styles.columnCenter}
            />
          </View>
        </Card>

        <Card title="浅色主题文案">
          <View style={[styles.wrapper, styles.lightBackground]}>
            <Loading
              name="loading"
              tipDisable={true}
              tip={<Text style={{ color: '#666666' }}>浅色主题加载中...</Text>}
            />
          </View>
        </Card>

        <Card title="深色主题文案">
          <View style={[styles.wrapper, styles.darkBackground]}>
            <Loading
              name="loading-xt"
              loadingType="whiteCoin"
              size="large"
              tipDisable={true}
              tip={<Text style={{ color: 'white' }}>白币动画适合深色背景</Text>}
            />
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default WithText;
