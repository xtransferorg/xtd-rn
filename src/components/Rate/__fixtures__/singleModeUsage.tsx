import React from 'react';
import { Space, Rate } from '@xrnjs/ui';
import {
  IconXHappy2,
  IconXHappy1,
  IconXEasy2,
  IconXEasy1,
  IconXAwkward2,
  IconXAwkward1,
  IconXAngry9,
  IconXAngry8,
  IconXVangry7,
  IconXVangry6,
} from '../../../icons/index';
import Card from '_global/Card';
import { iconSize } from './style';

const SingleModeUsage = () => {
  const cusCharacter = [
    {
      normal: <IconXVangry7 size={iconSize} />,
      selected: <IconXVangry6 size={iconSize} />,
    },
    {
      normal: <IconXAngry9 size={iconSize} />,
      selected: <IconXAngry8 size={iconSize} />,
    },
    {
      normal: <IconXAwkward2 size={iconSize} />,
      selected: <IconXAwkward1 size={iconSize} />,
    },
    {
      normal: <IconXEasy2 size={iconSize} />,
      selected: <IconXEasy1 size={iconSize} />,
    },
    {
      normal: <IconXHappy2 size={iconSize} />,
      selected: <IconXHappy1 size={iconSize} />,
    },
  ];

  return (
    <Space>
      <Card title="单选用法">
        <Rate single defaultValue={3} />
        <Rate single allowClear={false} defaultValue={2} />
        <Rate single character={cusCharacter} defaultValue={4} />
      </Card>
    </Space>
  );
};

export default SingleModeUsage;
