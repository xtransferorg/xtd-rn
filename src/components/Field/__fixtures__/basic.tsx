import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsageDemo from './basicUsage';
import CustomStyleDemo from './customStyle';
import ErrorMessageDemo from './errorMessage';
import WithTitleDemo from './withTitle';

function Demo() {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Space>
        <BasicUsageDemo />
        <WithTitleDemo />
        <ErrorMessageDemo />
        <CustomStyleDemo />
      </Space>
    </ScrollView>
  );
}

export default Demo;
