import React from 'react';
import { View, Text } from 'react-native';
import { Popover, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const ArrowShadowUsage: React.FC = () => {
  const handleSelect = (value: any, index?: number) => {
    console.log(`选择了第 ${index} 个选项:`, value);
  };

  const sampleContent = '这是示例内容';

  return (
    <Card title="箭头和阴影">
      <View style={styles.section}>
        <Text style={styles.description}>可以控制是否显示箭头和阴影效果</Text>
        <Space>
          <Popover
            arrow={true}
            shadow={false}
            content={<Popover.Text text={sampleContent} />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>带箭头，无阴影</Button>
          </Popover>

          <Popover
            arrow={false}
            shadow={false}
            content={<Popover.Text text={sampleContent} />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>无箭头，无阴影</Button>
          </Popover>

          <Popover
            arrow={true}
            shadow={true}
            content={<Popover.Text text={sampleContent} />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>带箭头，带阴影</Button>
          </Popover>

          <Popover
            arrow={false}
            shadow={true}
            content={<Popover.Text text={sampleContent} />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>无箭头，带阴影</Button>
          </Popover>
        </Space>
      </View>
    </Card>
  );
};

export default ArrowShadowUsage;
