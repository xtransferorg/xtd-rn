import React from 'react';
import { View, Text } from 'react-native';
import { Popover, Button, Space, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const CustomContentUsage: React.FC = () => {
  const handleSelect = (value: any, index?: number) => {
    console.log(`选择了第 ${index} 个选项:`, value);
  };

  const customContent = (
    <View style={styles.customContent}>
      <Text style={styles.customText}>自定义内容区域</Text>
      <Text style={[styles.customText, { fontSize: 12, marginTop: 8 }]}>
        可以放置任意的 React 组件
      </Text>
    </View>
  );

  const renderCustomContent = (
    nodes: React.ReactNode,
    closePopover: () => void
  ) => {
    return (
      <View
        style={{ padding: 16, backgroundColor: '#f0f0f0', borderRadius: 8 }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          自定义渲染器
        </Text>
        {nodes}
        <Button
          size={Size.small}
          style={{ marginTop: 12 }}
          onPress={closePopover}
        >
          关闭
        </Button>
      </View>
    );
  };

  return (
    <Card title="自定义内容">
      <View style={styles.section}>
        <Text style={styles.description}>
          支持自定义内容和自定义渲染器，可以实现复杂的交互效果
        </Text>
        <Space>
          <Popover
            content={customContent}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>自定义内容</Button>
          </Popover>

          <Popover
            content={[
              <Popover.Item key="1" value="1">
                <Text style={{ color: '#fff' }}>项目一</Text>
              </Popover.Item>,
              <Popover.Item key="2" value="2">
                <Text style={{ color: '#fff' }}>项目二</Text>
              </Popover.Item>,
            ]}
            renderContentComponent={renderCustomContent}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>自定义渲染器</Button>
          </Popover>

          <Popover
            content={[
              <Popover.Item key="1" value="1" divider>
                <View style={styles.menuItem}>
                  <Text style={[styles.menuText, { color: '#fff' }]}>
                    带分割线的项目
                  </Text>
                </View>
              </Popover.Item>,
              <Popover.Item key="2" value="2" disabled>
                <View style={styles.menuItem}>
                  <Text style={[styles.menuText, styles.disabledText]}>
                    禁用的项目
                  </Text>
                </View>
              </Popover.Item>,
            ]}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>Popover.Item 用法</Button>
          </Popover>
        </Space>
      </View>
    </Card>
  );
};

export default CustomContentUsage;
