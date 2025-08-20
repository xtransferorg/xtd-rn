import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Loading, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage = () => {
  return (
    <ScrollView>
      <Space>
        <Card title="基础 Loading">
          <View style={styles.wrapper}>
            <Space>
              <Loading />
              <Text style={styles.sizeLabel}>默认大小</Text>
            </Space>
          </View>
        </Card>

        <Card title="不同尺寸">
          <View style={styles.wrapper}>
            <View style={styles.sizeContainer}>
              <Space>
                <Loading size="mini" />
                <Text style={styles.sizeLabel}>mini</Text>
              </Space>
              <Space>
                <Loading size="small" />
                <Text style={styles.sizeLabel}>small</Text>
              </Space>
              <Space>
                <Loading size="middle" />
                <Text style={styles.sizeLabel}>middle</Text>
              </Space>
              <Space>
                <Loading size="large" />
                <Text style={styles.sizeLabel}>large</Text>
              </Space>
            </View>
          </View>
        </Card>

        <Card title="自定义尺寸">
          <View style={styles.wrapper}>
            <View style={styles.sizeContainer}>
              <Space>
                <Loading size={24} />
                <Text style={styles.sizeLabel}>24px</Text>
              </Space>
              <Space>
                <Loading size={32} />
                <Text style={styles.sizeLabel}>32px</Text>
              </Space>
              <Space>
                <Loading size={48} />
                <Text style={styles.sizeLabel}>48px</Text>
              </Space>
              <Space>
                <Loading size={64} />
                <Text style={styles.sizeLabel}>64px</Text>
              </Space>
            </View>
          </View>
        </Card>

        <Card title="自定义颜色">
          <View style={styles.wrapper}>
            <View style={styles.sizeContainer}>
              <Space>
                <Loading
                  name="loading"
                  fill="#ff4d4f"
                  loadingType="circle"
                  size="large"
                />
                <Text style={styles.sizeLabel}>红色</Text>
              </Space>
              <Space>
                <Loading name="loading" fill="#52c41a" size="large" />
                <Text style={styles.sizeLabel}>绿色</Text>
              </Space>
              <Space>
                <Loading name="loading" fill="#1890ff" size="large" />
                <Text style={styles.sizeLabel}>蓝色</Text>
              </Space>
              <Space>
                <Loading name="loading" fill="#faad14" size="large" />
                <Text style={styles.sizeLabel}>橙色</Text>
              </Space>
            </View>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default BasicUsage;
