import React from 'react';
import { Button, Space, Fill } from '@xrnjs/ui';
import { IconMARefresh1, IconXAdd1 } from '../../../icons/index';
import Card from '_global/Card';

const ButtonIconDemo = () => {
  const buttonIconMargin = 8;
  return (
    <Card title="图标按钮">
      <Space>
        <Button
          icon={
            <IconMARefresh1
              size={16}
              fillColor="#fff"
              style={{ marginRight: buttonIconMargin }}
            />
          }
        >
          中按钮
        </Button>
        <Button
          fill={Fill.dashed}
          icon={
            <IconXAdd1
              size={16}
              fillColor="#413F57"
              style={{ marginRight: buttonIconMargin }}
            />
          }
        >
          添加
        </Button>
      </Space>
    </Card>
  );
};

export default ButtonIconDemo;
