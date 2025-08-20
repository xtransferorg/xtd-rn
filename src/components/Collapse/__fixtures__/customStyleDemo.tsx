import React from 'react';
import { Text, View } from 'react-native';
import { Collapse, Space } from '@xrnjs/ui';
import { IconMANewpersonnel1 } from '../../../icons/index';
import Card from '_global/Card';
import { styles } from './style';

const CustomStyleDemo = () => {
  return (
    <Card title="自定义样式">
      <Space>
        <Space>
          <Text style={styles.text}>自定义标题样式</Text>
          <Text style={styles.description}>自定义面板标题的颜色和样式</Text>
          <Collapse>
            <Collapse.Item
              title={<Text style={styles.customTitleText}>自定义颜色标题</Text>}
              name="1"
            >
              <Text style={styles.contentText}>自定义标题颜色的面板内容</Text>
            </Collapse.Item>
            <Collapse.Item
              title={
                <View style={styles.customTitleStyle}>
                  <IconMANewpersonnel1 size={16} />
                  <Text style={styles.customTitleWithIcon}>
                    自定义标题+图标
                  </Text>
                </View>
              }
              titleStyle={styles.customTitleStyle}
              name="2"
            >
              <Text style={styles.contentText}>自定义标题和图标的面板内容</Text>
            </Collapse.Item>
          </Collapse>
        </Space>

        <Space>
          <Text style={styles.text}>无边框样式</Text>
          <Text style={styles.description}>移除面板之间的分割线</Text>
          <Collapse>
            <Collapse.Item title="无边框面板 1" name="1" noBorder>
              <Text style={styles.contentText}>这个面板没有底部边框</Text>
            </Collapse.Item>
            <Collapse.Item title="无边框面板 2" name="2" noBorder>
              <Text style={styles.contentText}>这个面板也没有底部边框</Text>
            </Collapse.Item>
          </Collapse>
        </Space>
      </Space>
    </Card>
  );
};

export default CustomStyleDemo;
