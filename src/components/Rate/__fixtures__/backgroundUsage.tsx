import React from 'react';
import { Space, Rate } from '@xrnjs/ui';
import Card from '_global/Card';

const BackgroundUsage = () => {
  const numberCharacter = [];
  for (let i = 0; i < 7; ++i) {
    numberCharacter.push({
      normal: String(i + 1),
      selected: String(i + 1),
    });
  }

  return (
    <Space>
      <Card title="开启背景效果">
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

export default BackgroundUsage;
