import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Loading, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const LottieAnimations = () => {
  return (
    <ScrollView>
      <Space>
        <Card title="圆形动画">
          <View style={styles.wrapper}>
            <View style={styles.lottieRow}>
              <Space>
                <Loading name="loading-xt" loadingType="circle" size="mini" />
                <Text style={styles.lottieLabel}>mini</Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="circle" size="small" />
                <Text style={styles.lottieLabel}>small</Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="circle" size="middle" />
                <Text style={styles.lottieLabel}>middle</Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="circle" size="large" />
                <Text style={styles.lottieLabel}>large</Text>
              </Space>
            </View>
          </View>
        </Card>

        <Card title="点状动画">
          <View style={styles.wrapper}>
            <View style={styles.lottieRow}>
              <Space>
                <Loading name="loading-xt" loadingType="dot" size={20} />
                <Text style={styles.lottieLabel}>20px</Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="dot" size={32} />
                <Text style={styles.lottieLabel}>32px</Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="dot" size={48} />
                <Text style={styles.lottieLabel}>48px</Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="dot" size={64} />
                <Text style={styles.lottieLabel}>64px</Text>
              </Space>
            </View>
          </View>
        </Card>

        <Card title="金币动画">
          <View style={styles.wrapper}>
            <View style={styles.lottieRow}>
              <Space>
                <Loading name="loading-xt" loadingType="goldCoin" size={32} />
                <Text style={styles.lottieLabel}>32px</Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="goldCoin" size={48} />
                <Text style={styles.lottieLabel}>48px</Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="goldCoin" size={64} />
                <Text style={styles.lottieLabel}>64px</Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="goldCoin" size={80} />
                <Text style={styles.lottieLabel}>80px</Text>
              </Space>
            </View>
          </View>
        </Card>

        <Card title="白币动画">
          <View style={[styles.wrapper, styles.darkBackground]}>
            <View style={styles.lottieRow}>
              <Space>
                <Loading name="loading-xt" loadingType="whiteCoin" size={32} />
                <Text style={[styles.lottieLabel, { color: 'white' }]}>
                  32px
                </Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="whiteCoin" size={48} />
                <Text style={[styles.lottieLabel, { color: 'white' }]}>
                  48px
                </Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="whiteCoin" size={64} />
                <Text style={[styles.lottieLabel, { color: 'white' }]}>
                  64px
                </Text>
              </Space>
              <Space>
                <Loading name="loading-xt" loadingType="whiteCoin" size={80} />
                <Text style={[styles.lottieLabel, { color: 'white' }]}>
                  80px
                </Text>
              </Space>
            </View>
          </View>
        </Card>

        <Card title="自定义颜色过滤器">
          <View style={styles.wrapper}>
            <View style={styles.lottieRow}>
              <Space>
                <Loading
                  name="loading-xt"
                  loadingType="circle"
                  size={48}
                  colorFilters={[{ keypath: 'circle', color: '#ff4d4f' }]}
                />
                <Text style={styles.lottieLabel}>红色</Text>
              </Space>
              <Space>
                <Loading
                  name="loading-xt"
                  loadingType="circle"
                  size={48}
                  colorFilters={[{ keypath: 'circle', color: '#52c41a' }]}
                />
                <Text style={styles.lottieLabel}>绿色</Text>
              </Space>
              <Space>
                <Loading
                  name="loading-xt"
                  loadingType="circle"
                  size={48}
                  colorFilters={[{ keypath: 'circle', color: '#faad14' }]}
                />
                <Text style={styles.lottieLabel}>橙色</Text>
              </Space>
              <Space>
                <Loading
                  name="loading-xt"
                  loadingType="circle"
                  size={48}
                  colorFilters={[{ keypath: 'circle', color: '#722ed1' }]}
                />
                <Text style={styles.lottieLabel}>紫色</Text>
              </Space>
            </View>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default LottieAnimations;
