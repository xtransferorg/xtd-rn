/**
 * title: 基础用法
 * desc: 展示不同状态的错误块，适用于各种异常场景
 */

import React from 'react';
import { ScrollView } from 'react-native';
import { ErrorBlock, Space } from '@xrnjs/ui';
import Card from '_global/Card';

const BasicUsage: React.FC = () => {
  return (
    <ScrollView>
      <Space>
        <Card>
          <ErrorBlock
            title="暂无数据"
            description="当前没有可显示的内容"
            status="empty"
          />
        </Card>

        <Card>
          <ErrorBlock
            title="网络异常"
            description="网络连接失败，请检查网络设置"
            status="networkError"
          />
        </Card>

        <Card>
          <ErrorBlock
            title="页面不存在"
            description="抱歉，您访问的页面不存在"
            status="notFound"
          />
        </Card>

        <Card>
          <ErrorBlock
            title="未登录"
            description="请先登录后再进行操作"
            status="noLogin"
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default BasicUsage;
