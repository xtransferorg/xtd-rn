import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Platform } from 'react-native';
import { PullToRefreshNative } from '@xrnjs/ui';

const data: any = [];
for (let i = 0; i < 50; i++) {
  data.push({
    key: `data-${i}`,
    text: `number: ${i}`,
    on: false,
  });
}

const Item = ({ title }: { title: string }) => (
  <View style={styles.item}>
    <Text style={styles.title} onPress={console.log}>
      {title} <Text>{Platform.OS}</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
  },
});

const PullToRefreshScreen = () => {
  const [loading, setLoading] = useState(false);

  const onRefresh = () => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve('');
      }, 3000);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <PullToRefreshNative
        refreshing={loading}
        onRefresh={onRefresh}
        headerStyle={{ backgroundColor: '#fff' }}
        text="南美、非洲等国家外汇少，本币报价获得更多商机"
        textStyle={{ color: 'red' }} // 特殊自定义样式 可选
      >
        <FlatList
          bounces={false}
          style={{ overflow: 'scroll' }}
          data={data}
          nestedScrollEnabled // 需要加上，Android需要
          renderItem={(renderItem: any) => {
            const { item } = renderItem;
            return <Item title={item.key} />;
          }}
        />
      </PullToRefreshNative>
    </View>
  );
};

export default PullToRefreshScreen;
