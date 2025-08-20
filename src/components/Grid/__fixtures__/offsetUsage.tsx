/**
 * title: 左右偏移
 * desc: 通过 Col 的 offset 属性设置列的偏移距离
 */

import React from 'react';
import { Text } from 'react-native';
import { Row, Col, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { gridStyles } from './style';

const OffsetUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={gridStyles.title}>基础偏移</Text>
        <Space gap={8}>
          <Row>
            <Col span={8} offset={8}>
              <Text style={gridStyles.colDemo}>span=8 offset=8</Text>
            </Col>
          </Row>

          <Row>
            <Col span={6} offset={6}>
              <Text style={gridStyles.colDemo}>span=6 offset=6</Text>
            </Col>
            <Col span={6} offset={6}>
              <Text style={gridStyles.colDemo2}>span=6 offset=6</Text>
            </Col>
          </Row>

          <Row>
            <Col span={12} offset={6}>
              <Text style={gridStyles.colDemo3}>span=12 offset=6</Text>
            </Col>
          </Row>
        </Space>
      </Card>

      <Card>
        <Text style={gridStyles.title}>复杂偏移布局</Text>
        <Space gap={8}>
          <Row>
            <Col span={18} offset={2}>
              <Text style={gridStyles.colDemo}>span=18 offset=2</Text>
            </Col>
            <Col span={4}>
              <Text style={gridStyles.colDemo2}>span=4</Text>
            </Col>
          </Row>

          <Row>
            <Col span={4}>
              <Text style={gridStyles.colDemo}>span=4</Text>
            </Col>
            <Col span={10} offset={4}>
              <Text style={gridStyles.colDemo2}>span=10 offset=4</Text>
            </Col>
            <Col span={6}>
              <Text style={gridStyles.colDemo3}>span=6</Text>
            </Col>
          </Row>

          <Row>
            <Col span={6} offset={3}>
              <Text style={gridStyles.colDemo}>span=6 offset=3</Text>
            </Col>
            <Col span={6} offset={3}>
              <Text style={gridStyles.colDemo2}>span=6 offset=3</Text>
            </Col>
            <Col span={6}>
              <Text style={gridStyles.colDemo3}>span=6</Text>
            </Col>
          </Row>
        </Space>
      </Card>
    </Space>
  );
};

export default OffsetUsage;
