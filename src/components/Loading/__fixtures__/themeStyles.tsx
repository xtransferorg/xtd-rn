import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Loading, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ThemeStyles = () => {
  return (
    <ScrollView>
      <Space>
        <Card title="默认主题">
          <View style={styles.wrapper}>
            <Space>
              <Loading name="loading" size="large" />
              <Text>默认主题</Text>
            </Space>
          </View>
        </Card>

        <Card title="浅色背景">
          <View style={[styles.wrapper, styles.lightBackground]}>
            <Space>
              <Loading name="loading" size="large" />
              <Text style={{ color: '#666666' }}>浅色背景</Text>
            </Space>
          </View>
        </Card>

        <Card title="Lottie 动画主题适配">
          <View style={styles.wrapper}>
            <View style={styles.lottieRow}>
              <Space>
                <View style={styles.lightBackground}>
                  <Loading name="loading-xt" loadingType="goldCoin" size={48} />
                </View>
                <Text style={styles.lottieLabel}>金币 - 浅色</Text>
              </Space>
              <Space>
                <View style={styles.darkBackground}>
                  <Loading
                    name="loading-xt"
                    loadingType="whiteCoin"
                    size={48}
                  />
                </View>
                <Text style={styles.lottieLabel}>白币 - 深色</Text>
              </Space>
            </View>

            <View style={styles.lottieRow}>
              <Space>
                <View style={styles.lightBackground}>
                  <Loading name="loading-xt" loadingType="circle" size={48} />
                </View>
                <Text style={styles.lottieLabel}>圆形 - 浅色</Text>
              </Space>
              <Space>
                <View style={styles.darkBackground}>
                  <Loading
                    name="loading-xt"
                    loadingType="circle"
                    size={48}
                    colorFilters={[{ keypath: 'circle', color: '#ffffff' }]}
                  />
                </View>
                <Text style={styles.lottieLabel}>圆形 - 深色</Text>
              </Space>
            </View>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default ThemeStyles;
