import React from 'react';
import { NoticeBar, Button, Fill, Space } from '@xrnjs/ui';
import { IconXClosesmall1 } from '../../../icons/index';
import Card from '_global/Card';
import styles from './style';

const InteractiveFeatures = () => {
  const handlePress = () => {
    console.log('通知栏被点击');
  };

  const handleRightPress = () => {
    console.log('右侧按钮被点击');
  };

  return (
    <Space>
      <Card style={styles.section} title="可点击">
        <NoticeBar leftIcon="remind" text="点击我试试" onPress={handlePress} />
      </Card>

      <Card style={styles.section} title="带右侧按钮">
        <NoticeBar
          leftIcon
          text="带有右侧操作按钮的通知栏"
          rightIcon={<Button fill={Fill.link}>操作</Button>}
        />
      </Card>

      <Card style={styles.section} title="带关闭按钮">
        <NoticeBar
          leftIcon="warn"
          text="可以关闭的通知栏"
          onRightPress={handleRightPress}
          rightIcon={<IconXClosesmall1 size={16} />}
        />
      </Card>
    </Space>
  );
};

export default InteractiveFeatures;
