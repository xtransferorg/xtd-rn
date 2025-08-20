/**
 * title: 业务场景
 * desc: 不同业务场景下的空状态展示，都需要正确设置 style 尺寸
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Empty, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { emptyStyles } from './style';

const ScenarioUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={emptyStyles.title}>列表为空</Text>
        <Text style={emptyStyles.subtitle}>数据列表没有内容时的展示</Text>
        <View style={emptyStyles.listContainer}>
          <Empty style={{ width: '100%', height: 120 }} />
          <Text style={emptyStyles.emptyText}>暂无数据</Text>
        </View>
      </Card>

      <Card>
        <Text style={emptyStyles.title}>搜索无结果</Text>
        <Text style={emptyStyles.subtitle}>搜索结果为空时的展示</Text>
        <View style={emptyStyles.listContainer}>
          <Empty style={{ width: '100%', height: 100 }} />
          <Text style={emptyStyles.emptyText}>未找到相关内容</Text>
          <Text style={emptyStyles.emptySubText}>试试其他关键词</Text>
        </View>
      </Card>

      <Card>
        <Text style={emptyStyles.title}>网络错误</Text>
        <Text style={emptyStyles.subtitle}>网络异常时的空状态</Text>
        <View style={emptyStyles.listContainer}>
          <Empty
            style={{
              width: '100%',
              height: 100,
              backgroundColor: '#fff2f0',
            }}
            imageStyle={{
              tintColor: '#ff4d4f',
              opacity: 0.8,
            }}
          />
          <Text style={emptyStyles.emptyText}>网络连接失败</Text>
        </View>
      </Card>

      <Card>
        <Text style={emptyStyles.title}>功能引导</Text>
        <Text style={emptyStyles.subtitle}>引导用户进行操作</Text>
        <View style={emptyStyles.listContainer}>
          <Empty
            style={{
              width: '100%',
              height: 100,
              backgroundColor: '#f6ffed',
            }}
            imageStyle={{
              tintColor: '#52c41a',
            }}
          />
          <Text style={emptyStyles.emptyText}>还没有内容</Text>
        </View>
      </Card>
    </Space>
  );
};

export default ScenarioUsage;
