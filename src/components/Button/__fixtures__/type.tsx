import React from 'react';
import { Button, Space, Fill, Size } from '@xrnjs/ui';
import { IconXEdit1 } from '../../../icons/index';
import { TextType } from '../enum';
import Card from '_global/Card';

const ButtonTypeDemo = () => (
  <Card title="按钮类型">
    <Space>
      <Button fill={Fill.text}>文字按钮</Button>
      <Button fill={Fill.text} textType={TextType.primary}>
        文字(主要按钮)
      </Button>
      <Button fill={Fill.text} textType={TextType.danger}>
        文字(危险按钮)
      </Button>
      <Button
        fill={Fill.text}
        icon={<IconXEdit1 size={16} fillColor="#413F57" />}
      />
      <Button fill={Fill.link} size={Size.large}>
        文字链按钮Large
      </Button>
      <Button fill={Fill.link} textType={TextType.primary}>
        文字链(主要按钮)
      </Button>
      <Button fill={Fill.link} textType={TextType.danger}>
        文字链(危险按钮)
      </Button>
      <Button>中按钮</Button>
      <Button fill={Fill.outline}>中按钮</Button>
      <Button fill={Fill.weak}>中按钮</Button>
      <Button fill={Fill.dashed}>中按钮</Button>
      <Button fill={Fill.danger}>中按钮</Button>
    </Space>
  </Card>
);

export default ButtonTypeDemo;
