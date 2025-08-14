import React from 'react';
import { Button, Space, Fill, IconPosition } from '@xrnjs/ui';
import { IconMARefresh1 } from '../../../icons/index';
import { IconXLowersmall1 } from '../../../icons/index';
import Card from '_global/Card';

const ButtonIconRightDemo = () => {
  const buttonIconMargin = 8;
  return (
    <Card title="右侧图标">
      <Space>
        <Button
          icon={
            <IconMARefresh1
              size={16}
              fillColor="#fff"
              style={{ marginLeft: buttonIconMargin }}
            />
          }
          iconPosition={IconPosition.right}
        >
          中按钮
        </Button>
        <Button
          icon={
            <IconXLowersmall1
              size={16}
              fillColor="#fff"
              style={{ marginLeft: buttonIconMargin }}
            />
          }
          iconPosition={IconPosition.right}
        >
          中按钮
        </Button>
        <Button
          fill={Fill.weak}
          icon={
            <IconXLowersmall1
              size={16}
              fillColor="#413F57"
              style={{ marginLeft: buttonIconMargin }}
            />
          }
          iconPosition={IconPosition.right}
        >
          Weak
        </Button>
      </Space>
    </Card>
  );
};

export default ButtonIconRightDemo;
