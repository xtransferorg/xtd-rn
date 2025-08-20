import React, { useState } from 'react';
import { Text } from 'react-native';
import { SearchBar, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <Space gap={20}>
      <Card style={styles.wrapper}>
        <Text style={styles.title}>基础搜索框</Text>
        <SearchBar
          placeholder="请输入搜索内容"
          value={value1}
          onChange={(val) => val && setValue1(String(val))}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>带默认值</Text>
        <SearchBar defaultValue="默认搜索内容" placeholder="请输入搜索内容" />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>受控模式</Text>
        <SearchBar
          value={value2}
          onChange={(val) => val && setValue2(String(val))}
          placeholder="受控模式搜索框"
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>禁用搜索图标</Text>
        <SearchBar searchIcon={false} placeholder="无搜索图标" />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>带标题</Text>
        <SearchBar title="请选择国家或地区" placeholder="搜索国家或地区" />
      </Card>
    </Space>
  );
};

export default BasicUsage;
