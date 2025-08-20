import React from 'react';
import { Space, Rate } from '@xrnjs/ui';
import {
  IconXOfuse1,
  IconXOfuse2,
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

const CustomCharacterUsage = () => {
  const numberCharacter = [];
  for (let i = 0; i < 7; ++i) {
    numberCharacter.push({
      normal: String(i + 1),
      selected: String(i + 1),
    });
  }

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
      <Card title="自定义元素 - 图标">
        <Rate
          defaultValue={3}
          character={{ normal: <IconXOfuse1 />, selected: <IconXOfuse2 /> }}
        />
      </Card>

      <Card title="自定义元素 - 表情">
        <Rate single character={cusCharacter} defaultValue={3} />
      </Card>

      <Card title="自定义元素 - 数字">
        <Rate
          single
          background
          character={numberCharacter}
          count={numberCharacter.length}
          defaultValue={4}
        />
      </Card>
    </Space>
  );
};

export default CustomCharacterUsage;
