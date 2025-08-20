import React from 'react';
import { Text } from 'react-native';
import { SearchBar, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ColorTheme = () => {
  return (
    <Space gap={20}>
      <Card style={styles.wrapper}>
        <Text style={styles.title}>默认配色</Text>
        <SearchBar colorType="default" placeholder="默认配色搜索框" />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>主色调配色</Text>
        <SearchBar colorType="primary" placeholder="主色调搜索框" />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>自定义背景色</Text>
        <SearchBar backgroundColor="#F5F5F5" placeholder="自定义背景色" />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>主色调 + 标题</Text>
        <SearchBar
          colorType="primary"
          title="搜索商品"
          placeholder="输入商品名称"
        />
      </Card>
    </Space>
  );
};

export default ColorTheme;
