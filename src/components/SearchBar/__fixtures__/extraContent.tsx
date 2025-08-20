import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { SearchBar, Space } from '@xrnjs/ui';
import {
  IconMAReturn1,
  IconMAScan1,
  IconMARobot1,
  IconMAMore1,
  IconCAFilter1,
} from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const ExtraContent = () => {
  const handleScan = () => {
    Alert.alert('扫描', '触发扫描功能');
  };

  const handleFilter = () => {
    Alert.alert('筛选', '触发筛选功能');
  };

  const handleSearch = () => {
    Alert.alert('搜索', '触发搜索功能');
  };

  return (
    <Space gap={20}>
      <Card style={styles.wrapper}>
        <Text style={styles.title}>左侧扩展内容</Text>
        <SearchBar
          placeholder="扫描或输入内容"
          leftExtra={
            <TouchableOpacity onPress={handleScan}>
              <IconMAScan1 size={24} fillColor="#666" />
            </TouchableOpacity>
          }
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>右侧扩展内容</Text>
        <SearchBar
          placeholder="搜索商品"
          rightExtra={
            <TouchableOpacity onPress={handleFilter}>
              <IconCAFilter1 size={24} fillColor="#666" />
            </TouchableOpacity>
          }
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>左右扩展内容</Text>
        <SearchBar
          placeholder="全功能搜索"
          leftExtra={
            <TouchableOpacity onPress={handleScan}>
              <IconMAScan1 size={24} fillColor="#666" />
            </TouchableOpacity>
          }
          rightExtra={
            <TouchableOpacity onPress={handleFilter}>
              <IconMARobot1 size={24} fillColor="#666" />
            </TouchableOpacity>
          }
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>返回按钮 + 搜索按钮</Text>
        <SearchBar
          placeholder="搜索内容"
          leftExtra={
            <TouchableOpacity>
              <IconMAReturn1 size={24} fillColor="#666" />
            </TouchableOpacity>
          }
          rightExtra={
            <TouchableOpacity onPress={handleSearch}>
              <Text style={styles.searchButton}>搜索</Text>
            </TouchableOpacity>
          }
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>主色调 + 扩展内容</Text>
        <SearchBar
          colorType="primary"
          placeholder="主色调搜索"
          leftExtra={
            <TouchableOpacity onPress={handleScan}>
              <IconMAScan1 size={24} fillColor="white" />
            </TouchableOpacity>
          }
          rightExtra={
            <TouchableOpacity>
              <IconMAMore1 size={24} fillColor="white" />
            </TouchableOpacity>
          }
        />
      </Card>
    </Space>
  );
};

export default ExtraContent;
