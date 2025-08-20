/**
 * title: 交互功能
 * desc: 展示带有按钮和交互功能的错误块
 */

import React from 'react';
import { ScrollView, Alert } from 'react-native';
import { ErrorBlock, Space } from '@xrnjs/ui';
import Card from '_global/Card';

const InteractiveUsage: React.FC = () => {
  const handleRefresh = () => {
    Alert.alert('提示', '刷新操作');
  };

  const handleRetry = () => {
    Alert.alert('提示', '重试操作');
  };

  const handleContact = () => {
    Alert.alert('提示', '联系客服');
  };

  const handleLogin = () => {
    Alert.alert('提示', '前往登录');
  };

  const handleSecondary = () => {
    Alert.alert('提示', '次要操作');
  };

  return (
    <ScrollView>
      <Space>
        <Card>
          <ErrorBlock
            title="暂无数据"
            description="当前没有可显示的内容"
            status="empty"
            footerText="刷新"
            onFooterPress={handleRefresh}
          />
        </Card>

        <Card>
          <ErrorBlock
            title="网络异常"
            description="网络连接失败，请检查网络设置"
            status="networkError"
            footerText="重试"
            footerSecondText="设置"
            onFooterPress={handleRetry}
            onFooterSecondPress={handleSecondary}
          />
        </Card>

        <Card>
          <ErrorBlock
            title="未登录"
            description="请先登录后再进行操作"
            status="noLogin"
            footerText="立即登录"
            footerDescriptionText="有疑问？联系客服"
            onFooterPress={handleLogin}
            onFooterDescriptionPress={handleContact}
          />
        </Card>

        <Card>
          <ErrorBlock
            title="无权限访问"
            description="您没有访问此内容的权限"
            status="noAuth"
            footerText="申请权限"
            footerSecondText="返回首页"
            footerDescriptionText="权限说明"
            onFooterPress={handleRetry}
            onFooterSecondPress={handleSecondary}
            onFooterDescriptionPress={handleContact}
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default InteractiveUsage;
