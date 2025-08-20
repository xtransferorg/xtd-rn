/**
 * title: 对齐方式
 * desc: 通过 Row 的 justify 和 align 属性控制列的对齐方式
 */

import React from 'react';
import { Text } from 'react-native';
import { Row, Col, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import { gridStyles } from './style';

const AlignmentUsage: React.FC = () => {
  return (
    <Space>
      <Card>
        <Text style={gridStyles.title}>水平对齐 - justify</Text>
        <Space gap={12}>
          <Text style={gridStyles.subtitle}>
            {'justify="flex-start" (默认)'}
          </Text>
          <Row justify="flex-start">
            <Col span={6}>
              <Text style={gridStyles.colDemo}>Col span 6</Text>
            </Col>
            <Col span={6}>
              <Text style={gridStyles.colDemo2}>Col span 6</Text>
            </Col>
          </Row>

          <Text style={gridStyles.subtitle}>{'justify="center"'}</Text>
          <Row justify="center">
            <Col span={6}>
              <Text style={gridStyles.colDemo}>Col span 6</Text>
            </Col>
            <Col span={6}>
              <Text style={gridStyles.colDemo2}>Col span 6</Text>
            </Col>
          </Row>

          <Text style={gridStyles.subtitle}>{'justify="flex-end"'}</Text>
          <Row justify="flex-end">
            <Col span={6}>
              <Text style={gridStyles.colDemo}>Col span 6</Text>
            </Col>
            <Col span={6}>
              <Text style={gridStyles.colDemo2}>Col span 6</Text>
            </Col>
          </Row>

          <Text style={gridStyles.subtitle}>{'justify="space-between"'}</Text>
          <Row justify="space-between">
            <Col span={6}>
              <Text style={gridStyles.colDemo}>Col span 6</Text>
            </Col>
            <Col span={6}>
              <Text style={gridStyles.colDemo2}>Col span 6</Text>
            </Col>
          </Row>

          <Text style={gridStyles.subtitle}>{'justify="space-around"'}</Text>
          <Row justify="space-around">
            <Col span={6}>
              <Text style={gridStyles.colDemo}>Col span 6</Text>
            </Col>
            <Col span={6}>
              <Text style={gridStyles.colDemo2}>Col span 6</Text>
            </Col>
          </Row>
        </Space>
      </Card>

      <Card>
        <Text style={gridStyles.title}>垂直对齐 - align</Text>
        <Space gap={12}>
          <Text style={gridStyles.subtitle}>{'align="flex-start" (默认)'}</Text>
          <Row align="flex-start">
            <Col span={8}>
              <Text style={gridStyles.colDemoTall}>
                Col span 8{'\n'}多行内容
              </Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.colDemo2}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.colDemo3}>Col span 8</Text>
            </Col>
          </Row>

          <Text style={gridStyles.subtitle}>{'align="center"'}</Text>
          <Row align="center">
            <Col span={8}>
              <Text style={gridStyles.colDemoTall}>
                Col span 8{'\n'}多行内容
              </Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.colDemo2}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.colDemo3}>Col span 8</Text>
            </Col>
          </Row>

          <Text style={gridStyles.subtitle}>{'align="flex-end"'}</Text>
          <Row align="flex-end">
            <Col span={8}>
              <Text style={gridStyles.colDemoTall}>
                Col span 8{'\n'}多行内容
              </Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.colDemo2}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.colDemo3}>Col span 8</Text>
            </Col>
          </Row>

          <Text style={gridStyles.subtitle}>{'align="stretch"'}</Text>
          <Row align="stretch">
            <Col span={8}>
              <Text style={gridStyles.colDemoTall}>
                Col span 8{'\n'}多行内容
              </Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.colDemo2}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={gridStyles.colDemo3}>Col span 8</Text>
            </Col>
          </Row>
        </Space>
      </Card>
    </Space>
  );
};

export default AlignmentUsage;
