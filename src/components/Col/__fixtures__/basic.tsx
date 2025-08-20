/**
 * title: 综合用法
 * desc: 使用 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。`Row` 的 `justify`、`align` 控制排版，`Col` 的 `span` 设置所占比例。
 */

import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Row, Col, Space, Card } from '@xrnjs/ui';
const Styles = StyleSheet.create({
  card: {
    backgroundColor: '#f30',
    flex: 1,
  },
  card2: {
    backgroundColor: '#680',
    flex: 1,
  },
  card3: {
    backgroundColor: '#876',
    flex: 1,
  },
});

const BasicGrid: React.FC = () => {
  return (
    <ScrollView>
      <Space>
        <Card>
          <Row>
            <Col span={8}>
              <Text style={Styles.card}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card2}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card3}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card3}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card2}>Col span 8</Text>
            </Col>
          </Row>
        </Card>

        <Card>
          <Row gap={12}>
            <Col span={8}>
              <Text style={Styles.card}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card2}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card3}>Col span 8</Text>
            </Col>
          </Row>
        </Card>

        <Card>
          <Row>
            <Col span={18} offset={2}>
              <Text style={Styles.card}>span=18 offset=2</Text>
            </Col>
            <Col span={4}>
              <Text style={Styles.card2}>Col span 4</Text>
            </Col>
          </Row>
        </Card>

        <Card>
          <Text>justify=center</Text>

          <Row justify="center">
            <Col span={8}>
              <Text style={Styles.card}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card2}>Col span 8</Text>
            </Col>
          </Row>

          <Text>justify=flex-end</Text>

          <Row justify="flex-end">
            <Col span={8}>
              <Text style={Styles.card}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card2}>Col span 8</Text>
            </Col>
          </Row>

          <Text>justify=space-between</Text>

          <Row justify="space-between">
            <Col span={8}>
              <Text style={Styles.card}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card3}>Col span 8</Text>
            </Col>
          </Row>
        </Card>

        <Card>
          <Text>align=center</Text>

          <Row align="center">
            <Col span={8}>
              <Text style={Styles.card}>{`Col span 8\nCol span 8`}</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card3}>Col span 8</Text>
            </Col>
          </Row>

          <Text>justify=flex-end align=flex-end</Text>

          <Row justify="flex-end" align="flex-end">
            <Col span={8}>
              <Text style={Styles.card3}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card}>{`Col span 8\nCol span 8`}</Text>
            </Col>
          </Row>

          <Text>justify=center align=stretch</Text>

          <Row justify="center" align="stretch">
            <Col span={8}>
              <Text style={Styles.card3}>Col span 8</Text>
            </Col>
            <Col span={8}>
              <Text style={Styles.card}>{`Col span 8\nCol span 8`}</Text>
            </Col>
          </Row>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default BasicGrid;
