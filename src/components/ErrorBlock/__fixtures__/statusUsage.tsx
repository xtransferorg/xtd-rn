/**
 * title: 状态类型
 * desc: 展示所有可用的状态类型和对应的图标
 */

import React from 'react';
import { ScrollView, Text } from 'react-native';
import { ErrorBlock, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { errorBlockStyles } from './style';

const StatusUsage: React.FC = () => {
  const statusList = [
    { status: 'empty', title: '空状态', desc: '暂无数据显示' },
    { status: 'notFound', title: '页面不存在', desc: '您访问的页面不存在' },
    { status: 'networkError', title: '网络异常', desc: '网络连接失败' },
    { status: 'noAuth', title: '无权限', desc: '您没有访问权限' },
    { status: 'noLogin', title: '未登录', desc: '请先登录' },
    { status: 'noData', title: '无数据', desc: '搜索无结果' },
    { status: 'finished', title: '已完成', desc: '操作已完成' },
    { status: 'systemUpgrade', title: '系统升级', desc: '系统升级中' },
    {
      status: 'systemCompatibility',
      title: '兼容问题',
      desc: '系统兼容性问题',
    },
  ] as const;

  return (
    <ScrollView>
      <Space>
        {statusList.map((item) => (
          <Card key={item.status}>
            <Text style={errorBlockStyles.statusLabel}>
              {`status="{${item.status}}"`}
            </Text>
            <ErrorBlock
              title={item.title}
              description={item.desc}
              status={item.status}
            />
          </Card>
        ))}
      </Space>
    </ScrollView>
  );
};

export default StatusUsage;
