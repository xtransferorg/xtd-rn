import React from 'react';
import { ScrollView } from 'react-native';
import Space from '../../Space';
import BasicUsage from './basicUsage';
import StyleUsage from './styleUsage';
import SearchUsage from './searchUsage';
import ListUsage from './listUsage';
import SpecialUsage from './specialUsage';

export default () => {
  return (
    <ScrollView>
      <Space gap={16}>
        <BasicUsage />
        <StyleUsage />
        <SearchUsage />
        <ListUsage />
        <SpecialUsage />
      </Space>
    </ScrollView>
  );
};
