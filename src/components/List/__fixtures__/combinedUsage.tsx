import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Space, Title, List, Align } from '@xrnjs/ui';
import Card from '_global/Card';

import styles from './style';

const CombinedUsage: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Space direction="vertical" style={styles.demoContainer}>
        <Card>
          <List
            header={
              <Title style={styles.combineTitle} description="Description">
                组合列表-new
              </Title>
            }
            footer={<View style={styles.footer} />}
            separator={false}
          >
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabelNew}
              descriptionStyle={styles.combineDescriptionNew}
              description={'Angola, Afghanistan, Algeria,Angola, Afghanistan,'}
              style={styles.combineItem}
              align={Align.middle}
              arrowStyle={styles.arrowStyleNew}
            >
              Major export area
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabelNew}
              descriptionStyle={styles.combineDescriptionNew}
              description={
                'Angola, Afghanistan, Algeria,Angola, Angola, Afghanistan, Algeria,Angola, Angola, Afghanistan Angola, Afghanistan, Algeria,Angola, Angola, Afghanistan, Algeria,Angola, Angola, Afghanistan'
              }
              descriptionLines={2}
              style={styles.combineItem}
              align={Align.middle}
              arrowStyle={styles.arrowStyleNew}
            >
              Major export area
            </List.Item>
          </List>
        </Card>

        <Card>
          <List
            header={
              <Title style={styles.combineTitle} description="副标题文案">
                组合列表
              </Title>
            }
            footer={<View style={styles.footer} />}
            separator={false}
          >
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={<Text style={styles.combineDescription}>自营出口</Text>}
              style={styles.combineItem}
              align={Align.top}
              rightAlign={Align.top}
              arrowStyle={styles.arrowStyle}
            >
              出口类型
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={
                <Text style={styles.combineDescription}>
                  香蕉、草莓、水蜜桃
                </Text>
              }
              style={styles.combineItem}
              align={Align.top}
              rightAlign={Align.top}
              arrowStyle={styles.arrowStyle}
            >
              出口商品名称
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={
                <Text style={styles.combineDescription}>
                  安哥拉、阿富汗、阿尔及利亚、安哥拉、阿富汗、阿尔
                </Text>
              }
              rightStyle={styles.flexShrink}
              style={styles.combineItem}
              align={Align.middle}
              rightAlign={Align.middle}
              arrowStyle={styles.arrowStyle}
            >
              主要出口地区
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={
                <Text style={styles.combineDescription}>10,000万美元</Text>
              }
              style={styles.combineItem}
              align={Align.top}
              rightAlign={Align.top}
              arrowStyle={styles.arrowStyle}
            >
              历史年出口额
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={
                <Text style={styles.combineDescription}>23,000万美元</Text>
              }
              style={styles.combineItem}
              align={Align.top}
              rightAlign={Align.top}
              arrowStyle={styles.arrowStyle}
            >
              预估年出口额
            </List.Item>
            <List.Item
              onPress={() => {}}
              titleStyle={styles.combineLabel}
              extra={
                <Text style={styles.combineDescription}>www.jaiosf.com</Text>
              }
              style={styles.combineItem}
              align={Align.top}
              rightAlign={Align.top}
              arrowStyle={styles.arrowStyle}
            >
              企业网站
            </List.Item>
          </List>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default CombinedUsage;
