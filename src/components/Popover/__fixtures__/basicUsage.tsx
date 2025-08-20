import React from 'react';
import { View, Text } from 'react-native';
import { Popover, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage: React.FC = () => {
  const handleSelect = (value: any, index?: number) => {
    console.log(`选择了第 ${index} 个选项:`, value);
  };

  return (
    <Card title="基础用法">
      <View style={styles.section}>
        <Text style={styles.description}>
          最基本的气泡提示用法，支持文字内容和菜单选项
        </Text>
        <Space>
          <Popover
            content={<Popover.Text text="这是一个简单的气泡提示" />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>简单文字提示</Button>
          </Popover>

          <Popover
            content={
              <Popover.Text text="这是一个较长的气泡提示内容，用于展示多行文字的显示效果" />
            }
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>多行文字提示</Button>
          </Popover>

          <Popover
            actions={[
              { text: '选项一' },
              { text: '选项二' },
              { text: '选项三' },
            ]}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>基础菜单</Button>
          </Popover>
        </Space>
      </View>
    </Card>
  );
};

export default BasicUsage;
