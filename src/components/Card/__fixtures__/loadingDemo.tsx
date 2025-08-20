import React, { useState } from 'react';
import { Text } from 'react-native';
import { Button, Card, Fill, Space, Type } from '@xrnjs/ui';
import { styles } from './style';

const LoadingDemo = () => {
  const [loading, setLoading] = useState(false);

  const handleToggleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Space>
      <Card
        type={Type.AllCard}
        title="加载状态卡片"
        loading={loading}
        bodyPadding={{ top: 8, bottom: 8, left: 16, right: 16 }}
      >
        <Text style={styles.text}>
          {loading ? '正在加载内容...' : '内容加载完成！这是卡片的实际内容。'}
        </Text>
      </Card>

      <Button
        fill={Fill.solid}
        onPress={handleToggleLoading}
        disabled={loading}
      >
        {loading ? '加载中...' : '开始加载'}
      </Button>
    </Space>
  );
};

export default LoadingDemo;
