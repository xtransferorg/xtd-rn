import React from 'react';
import { ScrollView } from 'react-native';
import BasicUsage from './basicUsage';
import ExpandDemo from './expandDemo';
import NoHeaderDemo from './noHeaderDemo';
import LongContentDemo from './longContentDemo';
import BorderedDemo from './borderedDemo';
import HorizontalDemo from './horizontalDemo';
import ExtraContentDemo from './extraContentDemo';
import CustomStyleDemo from './customStyleDemo';
import MultipleDemo from './multipleDemo';
import styles from './style';
import { Space } from '@xrnjs/ui';

export default function DescriptionsDemo() {
  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical">
        <BasicUsage />
        <ExpandDemo />
        <NoHeaderDemo />
        <LongContentDemo />
        <BorderedDemo />
        <HorizontalDemo />
        <ExtraContentDemo />
        <CustomStyleDemo />
        <MultipleDemo />
      </Space>
    </ScrollView>
  );
}
