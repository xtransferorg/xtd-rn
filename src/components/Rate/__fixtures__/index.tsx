import React, { useState } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Button, Space } from '@xrnjs/ui';
import {
  IconXOfuse1,
  IconXOfuse2,
  IconXHappy2,
  IconXHappy1,
  IconXEasy1,
  IconXAwkward2,
  IconXAwkward1,
  IconXAngry9,
  IconXAngry8,
  IconXVangry7,
  IconXVangry6,
} from '../../../icons/index';
import Card from '_global/Card';
import Rate from '../Rate';

const Demo = () => {
  const [value, setValue] = useState(1);
  const numberCharacter = [];

  for (let i = 0; i < 7; ++i) {
    numberCharacter.push({
      normal: String(i + 1),
      selected: String(i + 1),
    });
  }
  const iconSize = 32;
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
      normal: <IconXEasy1 size={iconSize} />,
      selected: <IconXEasy1 size={iconSize} />,
    },
    {
      normal: <IconXHappy2 size={iconSize} />,
      selected: <IconXHappy1 size={iconSize} />,
    },
  ];
  const { width: screenWidth } = Dimensions.get('window');
  const starWidth = (screenWidth - 32) / 7;

  return (
    <ScrollView>
      <Space>
        <Card
          title="开启自适应容器宽度(useContainerWidth)"
          style={{ backgroundColor: '#eee' }}
        >
          <View
            style={{
              marginHorizontal: 50,
              backgroundColor: '#fff',
              padding: 8,
            }}
          >
            <Rate
              single
              background
              character={numberCharacter}
              count={numberCharacter.length}
              useContainerWidth
              size={{ width: 18, height: 38 }} // 启用了useContainerWidth会根据容器宽度自动计算，设置的18就无效， 但是高度height: 38依旧有效
            />
            <Rate single useContainerWidth />
          </View>
        </Card>
        <Card title="单选用法(新增)">
          <Rate single />
          <Rate single allowClear={false} />
          <Rate single character={cusCharacter} />
        </Card>
        <Card title="开启背景效果(新增)">
          <Rate
            single
            background
            character={numberCharacter}
            count={numberCharacter.length}
          />
        </Card>
        <Card title="自定义尺寸(新增)">
          <Rate
            single
            background
            character={numberCharacter}
            count={numberCharacter.length}
            size={{ width: starWidth, height: starWidth }}
          />
        </Card>
        <Card title="基本用法">
          <Rate count={5} />
        </Card>

        <Card title="受控value">
          <Rate value={value} onChange={setValue} />
          <Button onPress={() => setValue(3)}>设置为3</Button>
        </Card>

        <Card title="只读">
          <Rate defaultValue={2} readonly />
          <Rate defaultValue={4} readonly />
        </Card>

        <Card title="不可取消">
          <Rate allowClear={false} />
        </Card>

        <Card title="描述信息">
          <Rate
            defaultValue={3}
            description={[
              'Your rating will be submitted automatically',
              'VERY BAD',
              'POOR',
              'AVERAGE',
              'GOOD',
              'EXCELLENT',
            ]}
          />
        </Card>

        <Card title="任意长度(7)">
          <Rate defaultValue={6} count={7} />
        </Card>

        <Card title="自定义元素">
          <Rate
            defaultValue={3}
            character={{ normal: <IconXOfuse1 />, selected: <IconXOfuse2 /> }}
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default Demo;
