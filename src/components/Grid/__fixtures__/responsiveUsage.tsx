/**
 * title: 响应式布局
 * desc: 展示不同屏幕尺寸下的栅格布局效果
 */

import React from 'react';
import { Text } from 'react-native';
import { Row, Col, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { gridStyles } from './style';

const ResponsiveUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={gridStyles.title}>常见布局模式</Text>
        <Space gap={12}>
          <Text style={gridStyles.subtitle}>左侧固定，右侧自适应</Text>
          <Row>
            <Col span={6}>
              <Text style={gridStyles.colDemo}>固定宽度</Text>
            </Col>
            <Col span={18}>
              <Text style={gridStyles.colDemo2}>自适应宽度内容区域</Text>
            </Col>
          </Row>

          <Text style={gridStyles.subtitle}>三栏布局</Text>
          <Row>
            <Col span={4}>
              <Text style={gridStyles.colDemo}>侧边栏</Text>
            </Col>
            <Col span={16}>
              <Text style={gridStyles.colDemo2}>主内容区</Text>
            </Col>
            <Col span={4}>
              <Text style={gridStyles.colDemo3}>侧边栏</Text>
            </Col>
          </Row>

          <Text style={gridStyles.subtitle}>等宽多列</Text>
          <Row gap={8}>
            <Col span={4}>
              <Text style={gridStyles.colDemo}>列1</Text>
            </Col>
            <Col span={4}>
              <Text style={gridStyles.colDemo2}>列2</Text>
            </Col>
            <Col span={4}>
              <Text style={gridStyles.colDemo3}>列3</Text>
            </Col>
            <Col span={4}>
              <Text style={gridStyles.colDemo}>列4</Text>
            </Col>
            <Col span={4}>
              <Text style={gridStyles.colDemo2}>列5</Text>
            </Col>
            <Col span={4}>
              <Text style={gridStyles.colDemo3}>列6</Text>
            </Col>
          </Row>
        </Space>
      </Card>

      <Card>
        <Text style={gridStyles.title}>复杂布局示例</Text>
        <Space gap={12}>
          <Text style={gridStyles.subtitle}>卡片网格</Text>
          <Row gap={12}>
            <Col span={12}>
              <Text style={gridStyles.cardDemo}>
                卡片标题 1{'\n'}这是卡片的描述内容
              </Text>
            </Col>
            <Col span={12}>
              <Text style={gridStyles.cardDemo}>
                卡片标题 2{'\n'}这是卡片的描述内容
              </Text>
            </Col>
          </Row>
          <Row gap={12}>
            <Col span={8}>
              <Text style={gridStyles.cardDemo}>卡片 3{'\n'}内容</Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.cardDemo}>卡片 4{'\n'}内容</Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.cardDemo}>卡片 5{'\n'}内容</Text>
            </Col>
          </Row>

          <Text style={gridStyles.subtitle}>表单布局</Text>
          <Row gap={8}>
            <Col span={8}>
              <Text style={gridStyles.formLabel}>姓名:</Text>
            </Col>
            <Col span={16}>
              <Text style={gridStyles.formInput}>输入框</Text>
            </Col>
          </Row>
          <Row gap={8}>
            <Col span={8}>
              <Text style={gridStyles.formLabel}>邮箱:</Text>
            </Col>
            <Col span={16}>
              <Text style={gridStyles.formInput}>输入框</Text>
            </Col>
          </Row>
          <Row gap={8}>
            <Col span={8}>
              <Text style={gridStyles.formLabel}>地址:</Text>
            </Col>
            <Col span={16}>
              <Text style={gridStyles.formInput}>输入框</Text>
            </Col>
          </Row>
        </Space>
      </Card>
    </Space>
  );
};

export default ResponsiveUsage;
