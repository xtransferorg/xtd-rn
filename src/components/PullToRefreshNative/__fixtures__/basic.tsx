import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  ListRenderItem,
} from 'react-native';
import { PullToRefreshNative } from '@xrnjs/ui';

// 将数据生成移到组件外部，避免重复创建
const generateData = (count = 50) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `data-${i}`, // 使用 id 而不是 key，更符合 FlatList 的 keyExtractor
    text: `number: ${i}`,
    on: false,
  }));
};

const INITIAL_DATA = generateData();

// 定义数据项类型
interface DataItem {
  id: string;
  text: string;
  on: boolean;
}

// 优化 Item 组件
const Item = React.memo(({ title }: { title: string }) => (
  <View style={styles.item}>
    <Text
      style={styles.title}
      onPress={() => console.log('Item pressed:', title)}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Item ${title} on ${Platform.OS}`}
    >
      {title} <Text style={styles.platform}>{Platform.OS}</Text>
    </Text>
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    color: '#333',
  },
  platform: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  flatList: {
    flex: 1,
  },
});

const PullToRefreshScreen = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  // 使用 useCallback 优化性能
  const onRefresh = useCallback(async () => {
    setLoading(true);
    try {
      // 模拟网络请求
      await new Promise((resolve) => {
        setTimeout(resolve, 2000); // 减少等待时间到 2 秒
      });

      // 模拟数据更新
      setData(generateData(Math.floor(Math.random() * 20) + 30));
    } catch (error) {
      console.error('Refresh failed:', error);
      // 这里可以添加错误提示
    } finally {
      setLoading(false);
    }
  }, []);

  // 使用 useCallback 优化 renderItem
  const renderItem: ListRenderItem<DataItem> = useCallback(
    ({ item }) => <Item title={item.id} />,
    []
  );

  // 使用 useCallback 优化 keyExtractor
  const keyExtractor = useCallback((item: DataItem) => item.id, []);

  // 使用 useMemo 优化 FlatList 的 props
  const flatListProps = useMemo(
    () => ({
      data,
      renderItem,
      keyExtractor,
      bounces: false,
      style: styles.flatList,
      nestedScrollEnabled: true, // Android 需要
      showsVerticalScrollIndicator: true,
      removeClippedSubviews: true, // 性能优化
      maxToRenderPerBatch: 10, // 性能优化
      windowSize: 10, // 性能优化
    }),
    [data, renderItem, keyExtractor]
  );

  return (
    <View style={styles.container}>
      <PullToRefreshNative
        refreshing={loading}
        onRefresh={onRefresh}
        headerStyle={{ backgroundColor: '#fff' }}
        text="下拉刷新数据"
        textStyle={{ color: '#007AFF', fontSize: 16 }}
      >
        <FlatList {...flatListProps} />
      </PullToRefreshNative>
    </View>
  );
};

export default PullToRefreshScreen;
