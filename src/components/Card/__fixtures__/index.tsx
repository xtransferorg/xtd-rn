import React from 'react';
import { ScrollView } from 'react-native';
import BasicUsage from './basicUsage';
import ImageCardDemo from './imageCardDemo';
import ActionCardDemo from './actionCardDemo';
import SizeDemo from './sizeDemo';
import CustomStyleDemo from './customStyleDemo';
import LoadingDemo from './loadingDemo';
import ComplexLayoutDemo from './complexLayoutDemo';
import { styles } from './style';
import { Space } from '@xrnjs/ui';

const CardDemo = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <Space>
        <BasicUsage />
        <ImageCardDemo />
        <ActionCardDemo />
        <SizeDemo />
        <CustomStyleDemo />
        <LoadingDemo />
        <ComplexLayoutDemo />
      </Space>
    </ScrollView>
  );
};

export default CardDemo;
