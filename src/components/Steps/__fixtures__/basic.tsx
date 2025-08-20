import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';
import BasicHorizontal from './basicHorizontal';
import CollapseMode from './collapseMode';
import VerticalSteps from './verticalSteps';
import ReverseVertical from './reverseVertical';
import CustomStatus from './customStatus';
import LongTextHandling from './longTextHandling';

const StepsScreen = () => {
  return (
    <ScrollView>
      <Space style={styles.container}>
        <Card style={styles.section}>
          <Text style={styles.title}>基本横向步骤条</Text>
          <BasicHorizontal />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>收起模式</Text>
          <CollapseMode />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>纵向步骤条</Text>
          <VerticalSteps />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>反向纵向步骤条</Text>
          <ReverseVertical />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>自定义状态</Text>
          <CustomStatus />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>长文本处理</Text>
          <LongTextHandling />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default StepsScreen;
