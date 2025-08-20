import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';

// 导入拆分的示例组件
import BasicUsage from './basicUsage';
import StateControl from './stateControl';
import CustomStyle from './customStyle';
import EventHandling from './eventHandling';

const SwitchScreen = () => {
  return (
    <ScrollView>
      <Space gap={20}>
        <BasicUsage />
        <StateControl />
        <CustomStyle />
        <EventHandling />
      </Space>
    </ScrollView>
  );
};

export default SwitchScreen;
