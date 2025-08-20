import React from 'react';
import { Title, Space, TitleFontSize } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const FontSizeDemo = () => {
  return (
    <Space>
      <Card>
        <Title
          titleFontSize={TitleFontSize.Size18}
          style={styles.marginBottom10}
        >
          主标题（18号字体）
        </Title>
      </Card>

      <Card style={styles.cardWrapper}>
        <Title>主标题（默认字体）</Title>
      </Card>
    </Space>
  );
};

export default FontSizeDemo;
