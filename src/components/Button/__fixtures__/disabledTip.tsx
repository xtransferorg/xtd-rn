import React from 'react';
import { Button, Fill, Toast } from '@xrnjs/ui';
import TouchableView from './TouchableView';
import Card from '_global/Card';

const ButtonDisabledTipDemo = () => (
  <Card title="禁用提示">
    <TouchableView
      onPress={() =>
        Toast({
          position: 'bottom',
          message: '该按钮不可操作',
          forbidPress: true,
        })
      }
    >
      <Button
        disabled
        fill={Fill.dashed}
        onPress={() => console.log('不会响应')}
      >
        不可操作 点击给出提示
      </Button>
    </TouchableView>
  </Card>
);

export default ButtonDisabledTipDemo;
