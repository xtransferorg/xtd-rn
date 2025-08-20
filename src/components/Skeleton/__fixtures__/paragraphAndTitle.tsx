import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Skeleton, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ParagraphAndTitle = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Card title="标题配置">
        <Text style={styles.description}>自定义标题占位图的显示</Text>
        <View style={styles.row}>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>显示标题</Text>
            <Skeleton
              loading={loading}
              title={true}
              paragraph={{ rows: 3, widths: [100, 85, 70] }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>隐藏标题</Text>
            <Skeleton
              loading={loading}
              title={false}
              paragraph={{ rows: 3, widths: [100, 85, 70] }}
            />
          </View>
        </View>
        <Button
          size={Size.small}
          onPress={() => setLoading(!loading)}
          style={styles.toggleButton}
        >
          {loading ? '显示内容' : '显示骨架屏'}
        </Button>
      </Card>

      <Card title="自定义标题宽度">
        <Text style={styles.description}>设置标题占位图的宽度</Text>
        <View style={styles.column}>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>标题宽度 30%</Text>
            <Skeleton
              loading={loading}
              title={{ width: 30 }}
              paragraph={{ rows: 2, widths: [90, 70] }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>标题宽度 60%</Text>
            <Skeleton
              loading={loading}
              title={{ width: 60 }}
              paragraph={{ rows: 2, widths: [90, 70] }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>标题宽度 90%</Text>
            <Skeleton
              loading={loading}
              title={{ width: 90 }}
              paragraph={{ rows: 2, widths: [90, 70] }}
            />
          </View>
        </View>
      </Card>

      <Card title="段落行数">
        <Text style={styles.description}>设置不同的段落行数</Text>
        <View style={styles.row}>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>2行</Text>
            <Skeleton
              loading={loading}
              title={false}
              paragraph={{ rows: 2, widths: [100, 80] }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>4行</Text>
            <Skeleton
              loading={loading}
              title={false}
              paragraph={{ rows: 4, widths: [100, 90, 85, 70] }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>6行</Text>
            <Skeleton
              loading={loading}
              title={false}
              paragraph={{ rows: 6, widths: [100, 95, 90, 85, 80, 60] }}
            />
          </View>
        </View>
      </Card>

      <Card title="自定义段落宽度">
        <Text style={styles.description}>为每行设置不同的宽度</Text>
        <View style={styles.column}>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>递减宽度</Text>
            <Skeleton
              loading={loading}
              title={false}
              paragraph={{
                rows: 4,
                widths: [100, 80, 60, 40],
              }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>随机宽度</Text>
            <Skeleton
              loading={loading}
              title={false}
              paragraph={{
                rows: 5,
                widths: [70, 90, 50, 85, 65],
              }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>固定宽度</Text>
            <Skeleton
              loading={loading}
              title={false}
              paragraph={{
                rows: 3,
                widths: [75, 75, 75],
              }}
            />
          </View>
        </View>
      </Card>

      <Card title="复杂布局">
        <Text style={styles.description}>标题、头像和段落的组合使用</Text>
        <View style={styles.column}>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>完整布局</Text>
            <Skeleton
              loading={loading}
              avatar={{ size: 50 }}
              title={{ width: 60 }}
              paragraph={{
                rows: 4,
                widths: [100, 85, 70, 55],
              }}
            />
          </View>
          <View style={styles.skeletonItem}>
            <Text style={styles.itemLabel}>文章布局</Text>
            <Skeleton
              loading={loading}
              title={{ width: 80 }}
              paragraph={{
                rows: 6,
                widths: [100, 100, 90, 95, 85, 60],
              }}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default ParagraphAndTitle;
