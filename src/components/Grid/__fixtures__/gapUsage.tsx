/**
 * title: 区块间隔
 * desc: 通过 Row 的 gap 属性设置列之间的间距
 */

import React from 'react';
import { Text } from 'react-native';
import { Row, Col, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { gridStyles } from './style';

const GapUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={gridStyles.title}>无间距</Text>
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
      </Card>

      <Card>
        <Text style={gridStyles.title}>间距 8px</Text>
        <Row gap={8}>
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
      </Card>

      <Card>
        <Text style={gridStyles.title}>间距 16px</Text>
        <Row gap={16}>
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
      </Card>

      <Card>
        <Text style={gridStyles.title}>间距 24px</Text>
        <Row gap={24}>
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
      </Card>
    </Space>
  );
};

export default GapUsage;
