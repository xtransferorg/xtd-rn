import React, { useEffect, useState } from 'react';
import VirtualList from '..';
import { Text, View } from 'react-native';

const newData = Array.from({ length: 20 }, (_, index) => ({
  title: (0 + index + 1).toString(),
}));

const Demo = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    if (data.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setData(newData as never);
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  const reloadData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setData(newData as never);
      setIsLoading(false);
    }, 1000);
  };

  const loadMoreData = () => {
    if (!isLoadingMore) {
      setIsLoadingMore(true);
      setTimeout(() => {
        const newData = Array.from({ length: 20 }, (_, index) => ({
          title: (data.length + index + 1).toString(),
        }));
        setData([...data, ...newData] as never);
        setIsLoadingMore(false);
        if ([...data, ...newData].length > 40) {
          setIsBottom(true);
          setIsLoadingMore(true);
        }
      }, 1000);
    }
  };

  const getItemLayout = (_: any, index: number) => ({
    length: 20, // 确切的项高度
    offset: 20 * index,
    index,
  });

  const renderItem = ({ item }: any) => {
    return (
      <Text
        style={{
          backgroundColor: '#f9c2ff',
          padding: 20,
          marginVertical: 10,
        }}
      >
        {item.title}
      </Text>
    );
  };

  return (
    <View>
      <VirtualList
        data={data}
        style={{ height: '100%' }}
        refreshing={isLoading}
        onRefresh={reloadData}
        onEndReachedThreshold={0.2}
        initialNumToRender={20}
        onEndReached={loadMoreData} // Add this
        getItemLayout={getItemLayout}
        isEndReached={isBottom}
        renderItem={renderItem}
        footerText="到底部啦啦啦啦啦"
        footerTextStyle={{ color: 'red' }}
      />
    </View>
  );
};

export default Demo;
