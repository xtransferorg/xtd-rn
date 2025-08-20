import React from 'react';
import { View, Text } from 'react-native';
import { Popover, Button } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const PlacementUsage: React.FC = () => {
  const handleSelect = (value: any, index?: number) => {
    console.log(`选择了第 ${index} 个选项:`, value);
  };

  const sampleContent = '这是一个示例内容，用于展示不同位置的气泡提示效果';

  return (
    <Card title="位置控制">
      <View style={styles.section}>
        <Text style={styles.description}>
          支持多种弹出位置，包括自动、顶部、底部、左侧、右侧等
        </Text>

        <View style={styles.horizontalContainer}>
          <Popover
            placement="top"
            content={<Popover.Text text={sampleContent} />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>顶部</Button>
          </Popover>

          <Popover
            placement="bottom"
            content={<Popover.Text text={sampleContent} />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>底部</Button>
          </Popover>
        </View>

        <View style={styles.horizontalContainer}>
          <Popover
            placement="right"
            content={<Popover.Text text={sampleContent} />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>右侧</Button>
          </Popover>

          <Popover
            placement="auto"
            content={<Popover.Text text={sampleContent} />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>自动</Button>
          </Popover>

          <Popover
            placement="left"
            content={<Popover.Text text={sampleContent} />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>左侧</Button>
          </Popover>
        </View>

        <View style={styles.horizontalContainer}>
          <Popover
            placement="center"
            content={<Popover.Text text={sampleContent} />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>居中</Button>
          </Popover>

          <Popover
            placement="floating"
            content={<Popover.Text text={sampleContent} />}
            onSelect={handleSelect}
            statusBarTranslucent={false}
          >
            <Button>浮动</Button>
          </Popover>
        </View>
      </View>
    </Card>
  );
};

export default PlacementUsage;
