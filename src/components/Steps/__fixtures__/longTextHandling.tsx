import React from 'react';
import { Steps, Space, Card } from '@xrnjs/ui';
import styles from './style';

const LongTextHandling = () => {
  return (
    <Card>
      <Space>
        <Steps
          current={1}
          data={[
            {
              title: '需求分析阶段',
              description: '深入了解用户需求，进行市场调研和竞品分析',
            },
            {
              title: '产品设计与原型制作',
              description: '基于需求分析结果，设计产品架构和用户界面',
            },
            {
              title: '开发实现',
              description: '技术团队进行功能开发',
            },
          ]}
        />

        <Steps
          style={styles.wrapper}
          direction="vertical"
          current={1}
          data={[
            {
              title: '项目启动会议',
              description:
                '召集所有项目相关人员，明确项目目标、时间节点、资源分配和责任分工，确保团队对项目有统一的理解和认知',
              time: '2024-7-1',
            },
            {
              title: '需求调研与分析',
              description:
                '通过用户访谈、问卷调查、数据分析等多种方式深入了解用户真实需求，并进行需求优先级排序和可行性分析，输出详细的需求文档',
              descriptionProps: { numberOfLines: 3 },
              time: '2024-7-5',
            },
            {
              title: '技术方案设计',
              description:
                '基于需求分析结果，设计技术架构、数据库结构、API接口等技术方案',
              time: '2024-7-10',
            },
          ]}
        />
      </Space>
    </Card>
  );
};

export default LongTextHandling;
