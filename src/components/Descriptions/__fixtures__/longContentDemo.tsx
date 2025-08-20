import React from 'react';
import { View, Text } from 'react-native';
import Card from '_global/Card';
import { Descriptions } from '@xrnjs/ui';
import styles from './style';

const LongContentDemo = () => {
  const items = [
    {
      title: '项目名称',
      content: 'React Native 企业级应用开发框架',
    },
    {
      title: '项目描述',
      content:
        '这是一个专为企业级应用开发设计的 React Native 框架，集成了丰富的 UI 组件、状态管理、网络请求、数据持久化等功能模块。框架采用模块化设计，支持按需加载，具有良好的扩展性和维护性。同时提供了完整的开发工具链和文档支持，帮助开发者快速构建高质量的移动应用。',
    },
    {
      title: '技术栈',
      content:
        'React Native, TypeScript, Redux Toolkit, React Navigation, Async Storage, React Hook Form, React Query',
    },
    {
      title: '特性',
      content:
        '跨平台支持、组件化开发、状态管理、路由导航、数据持久化、网络请求封装、表单处理、主题定制、国际化支持、性能优化、代码分割、热更新支持',
    },
  ];

  return (
    <Card style={styles.card}>
      <Text style={styles.groupTitle}>长内容</Text>
      <Text style={styles.groupDescription}>
        展示包含长文本内容的描述列表，支持文本选择
      </Text>

      <View style={styles.spacing}>
        <Descriptions
          title="项目详情"
          items={items}
          selectable={true}
          itemContentStyle={styles.longText}
        />
      </View>
    </Card>
  );
};

export default LongContentDemo;
