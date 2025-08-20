import Card from '_global/Card';
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Image, Space, Button, Switch } from '@xrnjs/ui';

const onlineImage =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
const gifImage =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
const svgSource = require('./assets/close.svg');
const webpImage =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

const EffectsAndAnimation = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [blurRadius, setBlurRadius] = useState(0);
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView>
      <Space>
        <Card title="模糊效果">
          <Space>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Button onPress={() => setBlurRadius(0)}>无模糊</Button>
              <Button onPress={() => setBlurRadius(10)}>轻微模糊</Button>
              <Button onPress={() => setBlurRadius(30)}>重度模糊</Button>
            </View>

            <View>
              <Text>当前模糊半径: {blurRadius}</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 200, height: 150 }}
                resizeMode="cover"
                blurRadius={blurRadius}
              />
            </View>
          </Space>
        </Card>

        <Card title="颜色着色 (tintColor)">
          <Space>
            <View>
              <Text>原始 SVG</Text>
              <Image source={svgSource} style={{ width: 50, height: 50 }} />
            </View>

            <View>
              <Text>红色着色</Text>
              <Image
                source={svgSource}
                style={{ width: 50, height: 50 }}
                tintColor="red"
              />
            </View>

            <View>
              <Text>蓝色着色</Text>
              <Image
                source={svgSource}
                style={{ width: 50, height: 50 }}
                tintColor="blue"
              />
            </View>

            <View>
              <Text>绿色着色</Text>
              <Image
                source={svgSource}
                style={{ width: 50, height: 50 }}
                tintColor="#00ff00"
              />
            </View>
          </Space>
        </Card>

        <Card title="过渡动画">
          <Space>
            <Switch value={checked} onChange={setChecked} />
            <View>
              <Text>快速过渡 (200ms)</Text>
              <Image
                source={{ uri: checked ? webpImage : onlineImage }}
                style={{ width: 100, height: 100 }}
                transition={{ duration: 200, timing: 'ease-in-out' }}
              />
            </View>

            <View>
              <Text>慢速过渡 (1000ms)</Text>
              <Image
                source={{ uri: checked ? webpImage : onlineImage }}
                style={{ width: 100, height: 100 }}
                transition={{
                  duration: 1000,
                  timing: 'ease-in-out',
                  effect: 'cross-dissolve',
                }}
              />
            </View>
          </Space>
        </Card>

        <Card title="GIF 动画控制">
          <Space>
            <Button onPress={() => setAutoPlay(!autoPlay)}>
              {autoPlay ? '暂停动画' : '播放动画'}
            </Button>

            <View>
              <Text>GIF 自动播放: {autoPlay ? '开启' : '关闭'}</Text>
              <Image
                source={{ uri: gifImage, isAnimated: true }}
                style={{ width: 100, height: 100 }}
                autoplay={autoPlay}
                resizeMode="contain"
              />
            </View>
          </Space>
        </Card>

        <Card title="加载优先级">
          <Space>
            <View>
              <Text>高优先级加载</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 80, height: 80 }}
                priority="high"
              />
            </View>

            <View>
              <Text>普通优先级加载</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 80, height: 80 }}
                priority="normal"
              />
            </View>

            <View>
              <Text>低优先级加载</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 80, height: 80 }}
                priority="low"
              />
            </View>
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default EffectsAndAnimation;
