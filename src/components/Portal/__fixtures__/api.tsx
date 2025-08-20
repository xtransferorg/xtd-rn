import React, { useState } from 'react';
import { Button, Portal, Space } from '@xrnjs/ui';
import style from './style';
import Card from '_global/Card';

const Api = () => {
  // 该组件销毁时自动移除动态渲染绑定
  const [key, setKey] = useState<number | null>(null);
  const handleCreate = () => {
    if (!key) {
      const newKey = Portal.add(
        <Button block={false} style={style.center}>
          我是动态创建的，挂载在根结点
        </Button>
      );
      setKey(newKey);
    }
  };
  const handleRemove = () => {
    if (key) {
      Portal.remove(key);
      setKey(null);
    }
  };
  // Portal 内部的组件在根节点渲染
  return (
    <Card>
      <Space>
        <Button onPress={handleCreate}>创建Portal组件</Button>
        <Button onPress={handleRemove}>销毁Portal组件</Button>
      </Space>
    </Card>
  );
};

export default Api;
