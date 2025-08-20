import React from 'react';
import { Text, View } from 'react-native';
import { Collapse, Space } from '@xrnjs/ui';
import { IconMANewpersonnel1 } from '../../../icons/index';
import Card from '_global/Card';
import { styles } from './style';

const IconDescriptionDemo = () => {
  return (
    <Card title="图标和描述">
      <Space>
        <Space>
          <Text style={styles.text}>带图标的面板</Text>
          <Text style={styles.description}>为面板标题添加图标装饰</Text>
          <Collapse accordion>
            <Collapse.Item
              icon={<IconMANewpersonnel1 size={16} />}
              title="自定义图标面板"
              name="1"
            >
              <Text style={styles.contentText}>这个面板使用了自定义图标</Text>
            </Collapse.Item>
            <Collapse.Item icon title="内置图标面板" name="2">
              <Text style={styles.contentText}>这个面板使用了内置图标</Text>
            </Collapse.Item>
            <Collapse.Item title="无图标面板" name="3">
              <Text style={styles.contentText}>这个面板没有图标</Text>
            </Collapse.Item>
          </Collapse>
        </Space>

        <Space>
          <Text style={styles.text}>带描述的面板</Text>
          <Text style={styles.description}>为面板添加详细描述信息</Text>
          <Collapse>
            <Collapse.Item
              icon
              title="用户管理"
              description="管理系统用户信息，包括用户注册、登录、权限设置等功能模块"
              name="1"
            >
              <View style={styles.contentArea}>
                <Text style={styles.contentText}>用户管理模块的详细内容</Text>
              </View>
            </Collapse.Item>
            <Collapse.Item
              icon
              title="系统设置"
              description="系统基础配置，包括主题设置、语言设置、通知设置等"
              name="2"
            >
              <View style={styles.contentArea}>
                <Text style={styles.contentText}>系统设置模块的详细内容</Text>
              </View>
            </Collapse.Item>
          </Collapse>
        </Space>
      </Space>
    </Card>
  );
};

export default IconDescriptionDemo;
