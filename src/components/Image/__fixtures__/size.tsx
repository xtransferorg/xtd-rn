import { View, Text } from 'react-native';
import { useState } from 'react';
import { Image, Button } from '@xrnjs/ui';
import React from 'react';

const pngSoureId = require('./assets/annual_bill_bo.png');
const imagePng =
  'https://static.xtransfer.com/boss/static/wechatqr_6f9e679ec75432d7.png';
const SizeDemo = () => {
  const [size, setSize] = useState(100);
  const sourceSize = size * 1.2;
  const styleSize = size * 1.5;
  return (
    <View style={{ gap: 32 }}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button onPress={() => setSize((prev) => prev + 5)}>放大</Button>
        <Button onPress={() => setSize((prev) => Math.max(5, prev - 5))}>
          缩小
        </Button>
      </View>
      <Text>
        权重：style {'>'} source {'>'} props{' '}
      </Text>
      <View style={{ gap: 10 }}>
        <Text>通过宽高属性设置尺寸</Text>
        <Image source={{ uri: imagePng }} width={size} height={size} />
        <Text>
          当前尺寸: {size}x{size}
        </Text>
      </View>
      <View style={{ gap: 10 }}>
        <Text>通过source宽高属性设置尺寸</Text>
        <Image
          source={{ uri: imagePng, width: sourceSize, height: sourceSize }}
        />
        <Text>
          当前尺寸: {sourceSize}x{sourceSize}
        </Text>
      </View>
      <View style={{ gap: 10 }}>
        <Text>通过style宽高属性设置尺寸</Text>
        <Image
          source={{ uri: imagePng }}
          style={{ width: styleSize, height: styleSize }}
        />
        <Text>
          当前尺寸: {styleSize}x{styleSize}
        </Text>
      </View>

      <View style={{ gap: 10 }}>
        <Text>本地图片不设置尺寸 （本地图片原宽高）</Text>
        <Image source={pngSoureId} />
      </View>
    </View>
  );
};

export default SizeDemo;
