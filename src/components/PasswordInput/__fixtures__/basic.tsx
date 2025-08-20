import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import BasicUsage from './basicUsage';
import ControlUsage from './controlUsage';
import StyleUsage from './styleUsage';
import ControlledUsage from './controlledUsage';
import ValidationUsage from './validationUsage';

const PasswordInputDemo: FC = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <Space direction="vertical" gap="l">
        <BasicUsage />
        <ControlUsage />
        <StyleUsage />
        <ControlledUsage />
        <ValidationUsage />
      </Space>
    </ScrollView>
  );
};

export default PasswordInputDemo;
