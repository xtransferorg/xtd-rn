import React from 'react';
import { ScrollView } from 'react-native';
import Card from '_global/Card';
import HightLightText from '../HightLightText';

export default () => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <Card title="基本用法">
        <HightLightText text="文本信息文本信息文本信息" highlight="信息" />
      </Card>
    </ScrollView>
  );
};
