import React from 'react';
import { View } from 'react-native';
import { Space, Rate } from '@xrnjs/ui';
import Card from '_global/Card';
import { styles, getStarWidth } from './style';

const SizeUsage = () => {
  const numberCharacter = [];
  for (let i = 0; i < 7; ++i) {
    numberCharacter.push({
      normal: String(i + 1),
      selected: String(i + 1),
    });
  }

  const starWidth = getStarWidth();

  return (
    <Space>
      <Card title="自定义尺寸">
        <Rate
          single
          background
          character={numberCharacter}
          count={numberCharacter.length}
          size={{ width: starWidth, height: starWidth }}
          defaultValue={3}
        />
      </Card>

      <Card
        title="开启自适应容器宽度(useContainerWidth)"
        style={styles.container}
      >
        <View style={styles.innerContainer}>
          <Rate
            single
            background
            character={numberCharacter}
            count={numberCharacter.length}
            useContainerWidth
            size={{ width: 18, height: 38 }} // 启用了useContainerWidth会根据容器宽度自动计算，设置的18就无效， 但是高度height: 38依旧有效
            defaultValue={5}
          />
          <Rate single useContainerWidth defaultValue={3} />
        </View>
      </Card>
    </Space>
  );
};

export default SizeUsage;
