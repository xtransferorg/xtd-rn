import React from 'react';
import { ScrollView } from 'react-native';
import { Space, Title } from '@xrnjs/ui';

import BasicUsage from './basicUsage';
import ColorTheme from './colorTheme';
import ExtraContent from './extraContent';
import CustomStyle from './customStyle';
import EventHandling from './eventHandling';

const SearchBarDemo: React.FC = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Title style={{ margin: 10 }}>
        每个NavBar会计算距离顶部的距离，所以看到和浏览器中不一样的顶部距离
      </Title>

      <Space gap={20}>
        <BasicUsage />
        <ColorTheme />
        <ExtraContent />
        <CustomStyle />
        <EventHandling />
      </Space>
    </ScrollView>
  );
};

export default SearchBarDemo;
