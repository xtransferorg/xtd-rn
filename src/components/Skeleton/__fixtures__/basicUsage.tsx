import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Skeleton, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Card title="基础骨架屏">
        <Text style={styles.description}>最简单的骨架屏占位效果</Text>
        <View style={styles.demoContainer}>
          <Skeleton loading={loading} />
        </View>
        <Button
          size={Size.small}
          onPress={() => setLoading(!loading)}
          style={styles.toggleButton}
        >
          {loading ? '显示内容' : '显示骨架屏'}
        </Button>
      </Card>

      <Card title="带头像的骨架屏">
        <Text style={styles.description}>包含头像占位图的骨架屏</Text>
        <View style={styles.demoContainer}>
          <Skeleton
            loading={loading}
            avatar
            paragraph={{ rows: 4, widths: [60, 80, 80, 80] }}
          />
        </View>
      </Card>

      <Card title="自定义头像">
        <Text style={styles.description}>自定义头像的大小和形状</Text>
        <View style={styles.row}>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>圆形头像</Text>
            <Skeleton
              loading={loading}
              avatar={{ size: 60, shape: 'circle' }}
              paragraph={{ rows: 2, widths: [100, 80] }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>方形头像</Text>
            <Skeleton
              loading={loading}
              avatar={{ size: 60, shape: 'square' }}
              paragraph={{ rows: 2, widths: [100, 80] }}
            />
          </View>
        </View>
      </Card>

      <Card title="不同尺寸头像">
        <Text style={styles.description}>不同尺寸的头像占位图</Text>
        <View style={styles.row}>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>小头像</Text>
            <Skeleton
              loading={loading}
              avatar={{ size: 40 }}
              paragraph={{ rows: 2, widths: [90, 70] }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>中头像</Text>
            <Skeleton
              loading={loading}
              avatar={{ size: 60 }}
              paragraph={{ rows: 2, widths: [90, 70] }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>大头像</Text>
            <Skeleton
              loading={loading}
              avatar={{ size: 80 }}
              paragraph={{ rows: 2, widths: [90, 70] }}
            />
          </View>
        </View>
      </Card>

      <Card title="动画效果">
        <Text style={styles.description}>控制骨架屏的动画效果</Text>
        <View style={styles.row}>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>有动画</Text>
            <Skeleton
              loading={loading}
              active={true}
              avatar
              paragraph={{ rows: 3, widths: [100, 85, 70] }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>无动画</Text>
            <Skeleton
              loading={loading}
              active={false}
              avatar
              paragraph={{ rows: 3, widths: [100, 85, 70] }}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default BasicUsage;
