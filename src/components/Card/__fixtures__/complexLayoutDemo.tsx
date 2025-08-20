import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, Fill, Space, Type } from '@xrnjs/ui';
import { styles } from './style';

const ComplexLayoutDemo = () => {
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 60,
    height: 60,
  };

  return (
    <Space>
      <Card
        type={Type.AllCard}
        title="产品卡片"
        titleLeftExtra={
          <View
            style={{
              width: 3,
              height: 20,
              backgroundColor: '#ff6b35',
              marginRight: 8,
            }}
          />
        }
        extra={
          <Text style={{ color: '#ff6b35', fontSize: 16, fontWeight: 'bold' }}>
            ¥299
          </Text>
        }
        imageSource={logo}
        footer={
          <Space direction="horizontal">
            <Button fill={Fill.outline}>加入购物车</Button>
            <Button fill={Fill.solid}>立即购买</Button>
          </Space>
        }
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>React Native 开发指南 - 从入门到精通</Text>
        <Text
          style={[styles.text, { color: '#666', fontSize: 12, marginTop: 4 }]}
        >
          作者：技术专家 | 出版社：科技出版社
        </Text>
        <View style={[styles.flexRow, { marginTop: 8 }]}>
          <Text style={{ color: '#ff6b35', fontSize: 12 }}>⭐⭐⭐⭐⭐</Text>
          <Text style={{ color: '#666', fontSize: 12, marginLeft: 8 }}>
            4.8分 (128评价)
          </Text>
        </View>
      </Card>

      <Card
        type={Type.NestCard}
        title="信息卡片"
        titleLeftExtra={
          <View
            style={{
              backgroundColor: '#e3f2fd',
              paddingHorizontal: 6,
              paddingVertical: 2,
              borderRadius: 4,
              marginRight: 8,
            }}
          >
            <Text style={{ color: '#1976d2', fontSize: 10 }}>重要</Text>
          </View>
        }
        extra={<Text style={{ color: '#666', fontSize: 12 }}>2小时前</Text>}
        headerDivider={true}
        footerDivider={true}
        footer={
          <View
            style={[
              styles.flexRow,
              { justifyContent: 'space-between', padding: 8 },
            ]}
          >
            <Text style={{ color: '#666', fontSize: 12 }}>阅读量: 1.2k</Text>
            <View style={styles.flexRow}>
              <Text style={{ color: '#666', fontSize: 12, marginRight: 16 }}>
                👍 32
              </Text>
              <Text style={{ color: '#666', fontSize: 12 }}>💬 8</Text>
            </View>
          </View>
        }
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={[styles.text, { fontWeight: 'bold', marginBottom: 8 }]}>
          React Native 0.73 版本发布
        </Text>
        <Text style={styles.text} numberOfLines={3}>
          React Native 团队发布了 0.73
          版本，带来了许多新特性和性能改进。本次更新包括新的架构改进、更好的开发者体验以及多项
          bug 修复。
        </Text>
      </Card>
    </Space>
  );
};

export default ComplexLayoutDemo;
