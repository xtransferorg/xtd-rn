/**
 * title: 基础用法
 * desc: 使用 Row 和 Col 创建基本的栅格布局，Col 的 span 属性控制所占比例（1-24）
 */

import React from 'react';
import { Text } from 'react-native';
import { Row, Col, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { gridStyles } from './style';

const BasicUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={gridStyles.title}>基础栅格</Text>
        <Space gap={8}>
          <Row>
            <Col span={24}>
              <Text style={gridStyles.colDemo}>Col span 24</Text>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Text style={gridStyles.colDemo}>Col span 12</Text>
            </Col>
            <Col span={12}>
              <Text style={gridStyles.colDemo2}>Col span 12</Text>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Text style={gridStyles.colDemo}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.colDemo2}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.colDemo3}>Col span 8</Text>
            </Col>
          </Row>

          <Row>
            <Col span={6}>
              <Text style={gridStyles.colDemo}>Col span 6</Text>
            </Col>
            <Col span={6}>
              <Text style={gridStyles.colDemo2}>Col span 6</Text>
            </Col>
            <Col span={6}>
              <Text style={gridStyles.colDemo3}>Col span 6</Text>
            </Col>
            <Col span={6}>
              <Text style={gridStyles.colDemo}>Col span 6</Text>
            </Col>
          </Row>
        </Space>
      </Card>
    </Space>
  );
};

export default BasicUsage;
