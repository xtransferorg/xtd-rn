---
title: PullToRefreshNative 刷新
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 2
---

# PullToRefreshNative 下拉刷新

> 需要升级 app 包，使用前找负责人确定 app 版本

- 原生组件实现，主要用于列表或者页面的下拉刷新

## 代码演示

> 原生组件不能在浏览器中预览

```tsx | pure
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Platform } from 'react-native';
import { PullToRefreshNative } from '@xrnjs/ui';

const data: any = [];
for (let i = 0; i < 500; i++) {
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
        text="南美、非洲等国家外汇少，本币报价获得更多商机"
      >

        <FlatList
          style={{ overflow: 'scroll' }}
          data={data}
          nestedScrollEnabled
          renderItem={(renderItem: any) => {
            const { item } = renderItem;
            return <Item title={item.key} />;
          }}
        />
      </PullToRefreshNative>
    </View>
  );
};
```

## API

<API src="./PullToRefreshNative.tsx" hideTitle />

## 注意事项
### 1.滚动视图需要加上[nestedScrollEnabled](https://reactnative.cn/docs/scrollview#nestedscrollenabled-android), 否则安卓上下拉刷新会存在问题。
```tsx | pure
<PullToRefreshNative >
  <ScrolllView
    nestedScrollEnabled
  />
 </PullToRefreshNative>
 ```

