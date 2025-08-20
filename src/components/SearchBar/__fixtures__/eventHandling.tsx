import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import { SearchBar, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const EventHandling = () => {
  const [searchValue, setSearchValue] = useState('');
  const [focusCount, setFocusCount] = useState(0);
  const [blurCount, setBlurCount] = useState(0);

  const handleChange = (value: string | number) => {
    setSearchValue(String(value));
    console.log('搜索内容变化:', value);
  };

  const handleFocus = () => {
    setFocusCount((prev) => prev + 1);
    Alert.alert('焦点事件', '搜索框获得焦点');
  };

  const handleBlur = () => {
    setBlurCount((prev) => prev + 1);
    Alert.alert('失焦事件', '搜索框失去焦点');
  };

  const handleSubmit = () => {
    Alert.alert('提交搜索', `搜索内容: ${searchValue}`);
  };

  const handleClear = () => {
    Alert.alert('清空内容', '搜索内容已清空');
  };

  return (
    <Space gap={20}>
      <Card style={styles.wrapper}>
        <Text style={styles.title}>onChange 事件</Text>
        <SearchBar placeholder="输入内容观察变化" onChange={handleChange} />
        <Text style={styles.eventInfo}>当前值: {searchValue}</Text>
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>onFocus 事件</Text>
        <SearchBar placeholder="点击获得焦点" onFocus={handleFocus} />
        <Text style={styles.eventInfo}>获得焦点次数: {focusCount}</Text>
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>onBlur 事件</Text>
        <SearchBar placeholder="点击其他地方失去焦点" onBlur={handleBlur} />
        <Text style={styles.eventInfo}>失去焦点次数: {blurCount}</Text>
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>onSubmitEditing 事件</Text>
        <SearchBar
          placeholder="输入后按回车键"
          onSubmitEditing={handleSubmit}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>allowClear + onClear 事件</Text>
        <SearchBar
          defaultValue="可清空的内容"
          placeholder="带清空按钮"
          allowClear
          onClear={handleClear}
        />
      </Card>

      <Card style={styles.wrapper}>
        <Text style={styles.title}>综合事件处理</Text>
        <SearchBar
          value={searchValue}
          placeholder="综合事件示例"
          onChange={handleChange}
          onFocus={() => console.log('获得焦点')}
          onBlur={() => console.log('失去焦点')}
          onSubmitEditing={() => console.log('提交搜索')}
          allowClear
          onClear={() => {
            setSearchValue('');
            console.log('清空内容');
          }}
        />
      </Card>
    </Space>
  );
};

export default EventHandling;
