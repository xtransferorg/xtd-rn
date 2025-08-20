import React from 'react';
import { View, Text } from 'react-native';
import { Popover, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ThemeUsage: React.FC = () => {
  const handleSelect = (value: any, index?: number) => {
    console.log(`选择了第 ${index} 个选项:`, value);
  };

  const menuActions = [
    { text: '新建文档' },
    { text: '编辑' },
    { text: '删除', color: '#ff4d4f' },
  ];

  return (
    <Card title="主题模式">
      <View style={styles.section}>
        <Text style={styles.description}>
          支持深色和浅色两种主题模式，可根据应用场景选择
        </Text>
        <Space>
          <Popover
            mode="dark"
            content={<Popover.Text text="深色主题的气泡提示" />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>深色主题文字</Button>
          </Popover>

          <Popover
            mode="light"
            content={<Popover.Text text="浅色主题的气泡提示" />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>浅色主题文字</Button>
          </Popover>

          <Popover
            mode="dark"
            actions={menuActions}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>深色主题菜单</Button>
          </Popover>

          <Popover
            mode="light"
            actions={menuActions}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>浅色主题菜单</Button>
          </Popover>
        </Space>
      </View>
    </Card>
  );
};

export default ThemeUsage;
