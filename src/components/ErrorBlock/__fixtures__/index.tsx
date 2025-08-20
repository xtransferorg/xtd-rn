/**
 * title: ErrorBlock 错误块
 * desc: 错误块组件的完整示例展示
 */

import React from 'react';
import { ScrollView } from 'react-native';
import { Space } from '@xrnjs/ui';
import Card from '_global/Card';

// 导入所有示例组件
import BasicUsage from './basicUsage';
import StatusUsage from './statusUsage';
import InteractiveUsage from './interactiveUsage';
import CustomUsage from './customUsage';
import FullPageUsage from './fullPageUsage';

const ErrorBlockDemo: React.FC = () => {
  return (
    <ScrollView>
      <Space>
        <Card title="基础用法">
          <BasicUsage />
        </Card>

        <Card title="状态类型">
          <StatusUsage />
        </Card>

        <Card title="交互功能">
          <InteractiveUsage />
        </Card>

        <Card title="自定义样式">
          <CustomUsage />
        </Card>

        <Card title="全屏模式">
          <FullPageUsage />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default ErrorBlockDemo;
