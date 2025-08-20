import React from 'react';
import { Button, Portal } from '@xrnjs/ui';
import style from './style';

const Basic = () => {
  // Portal 内部的组件在根节点渲染
  return (
    <Portal>
      <Button block={false} style={style.center}>
        我挂载在根结点
      </Button>
    </Portal>
  );
};

export default Basic;
