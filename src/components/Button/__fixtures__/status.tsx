import React from 'react';
import { Button, Space, Fill, DisabledType } from '@xrnjs/ui';
import { TextType } from '../enum';
import Card from '_global/Card';

const ButtonStatusDemo = () => (
  <Card title="按钮状态">
    <Space>
      <Button fill={Fill.link} disabled>
        文字链按钮(禁用)
      </Button>
      <Button fill={Fill.text} disabled>
        文字按钮(禁用)
      </Button>
      <Button fill={Fill.text} textType={TextType.primary} disabled>
        主要按钮(禁用)
      </Button>
      <Button fill={Fill.text} textType={TextType.danger} disabled>
        危险按钮(禁用)
      </Button>
      <Button disabled>未激活</Button>
      <Button disabled disabledType={DisabledType.fail}>
        不可点击
      </Button>
      <Button fill={Fill.outline} disabled>
        未激活
      </Button>
      <Button fill={Fill.outline} disabled disabledType={DisabledType.fail}>
        不可点击
      </Button>
    </Space>
  </Card>
);

export default ButtonStatusDemo;
