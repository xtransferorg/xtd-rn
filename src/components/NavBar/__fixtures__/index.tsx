import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import MultipleRightButtons from './multipleRightButtons';
import CustomContent from './customContent';
import CustomStyle from './customStyle';
import NoBackArrowAndCustom from './noBackArrowAndCustom';

interface NavBarScreenProps {
  navigation: any;
}

const NavBarScreen: FC<NavBarScreenProps> = () => {
  return (
    <ScrollView>
      <Space>
        <BasicUsage />
        <MultipleRightButtons />
        <CustomContent />
        <CustomStyle />
        <NoBackArrowAndCustom />
      </Space>
    </ScrollView>
  );
};

export default NavBarScreen;
