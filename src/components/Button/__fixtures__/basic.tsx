import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import ButtonSizeDemo from './size';
import ButtonTypeDemo from './type';
import ButtonShapeDemo from './shape';
import ButtonStatusDemo from './status';
import ButtonLoadingDemo from './loading';
import ButtonIconDemo from './icon';
import ButtonIconRightDemo from './iconRight';
import ButtonDisabledTipDemo from './disabledTip';

const ButtonAllDemos = () => (
  <ScrollView>
    <Space>
      <ButtonSizeDemo />
      <ButtonTypeDemo />
      <ButtonShapeDemo />
      <ButtonStatusDemo />
      <ButtonLoadingDemo />
      <ButtonIconDemo />
      <ButtonIconRightDemo />
      <ButtonDisabledTipDemo />
    </Space>
  </ScrollView>
);

export default ButtonAllDemos;
