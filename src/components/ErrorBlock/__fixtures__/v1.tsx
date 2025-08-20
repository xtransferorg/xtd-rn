import React from 'react';
import { ScrollView } from 'react-native';
import Card from '_global/Card';
import Space from '../../Space';
import ErrorBlock from '../errorBlock';

const Demo = () => {
  return (
    <ScrollView>
      <Space gap={20}>
        <Card>
          <ErrorBlock
            title="无内容类空态"
            description="无内容类空态描述"
            status="empty"
            footerText="转账"
            footerDescriptionText="有疑问？联系客服"
            onFooterDescriptionPress={console.log}
            onFooterPress={console.log}
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default Demo;
