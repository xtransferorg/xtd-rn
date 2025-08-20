import Card from '_global/Card';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Image, Space } from '@xrnjs/ui';

// 本地资源
const pngSource = require('./assets/close.svg');
const svgSource = require('./assets/close.svg');

// 线上资源
const onlineImagePng =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
const onlineImageJpg =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
const onlineImageWebp =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
const onlineImageGif =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
const onlineImageSvg =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

const BasicUsage = () => {
  return (
    <ScrollView>
      <Space>
        <Card title="本地图片资源">
          <Space>
            <View>
              <Text>PNG 格式</Text>
              <Image
                source={pngSource}
                style={{ width: '100%', height: 100 }}
                resizeMode="cover"
              />
            </View>

            <View>
              <Text>SVG 格式</Text>
              <Image
                source={svgSource}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>
          </Space>
        </Card>

        <Card title="线上图片资源">
          <Space>
            <View>
              <Text>PNG 格式</Text>
              <Image
                source={{ uri: onlineImagePng }}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>

            <View>
              <Text>JPG 格式</Text>
              <Image
                source={{ uri: onlineImageJpg }}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>

            <View>
              <Text>GIF 格式</Text>
              <Image
                source={{ uri: onlineImageGif }}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>

            <View>
              <Text>WebP 格式</Text>
              <Image
                source={{ uri: onlineImageWebp }}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>

            <View>
              <Text>SVG 格式</Text>
              <Image
                source={{ uri: onlineImageSvg }}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>
          </Space>
        </Card>

        <Card title="图片尺寸设置">
          <Space>
            <View>
              <Text>通过 props 设置尺寸</Text>
              <Image source={{ uri: onlineImagePng }} width={80} height={80} />
            </View>

            <View>
              <Text>通过 source 设置尺寸</Text>
              <Image
                source={{
                  uri: onlineImagePng,
                  width: 100,
                  height: 100,
                }}
              />
            </View>

            <View>
              <Text>通过 style 设置尺寸（优先级最高）</Text>
              <Image
                source={{
                  uri: onlineImagePng,
                  width: 50,
                  height: 50,
                }}
                width={60}
                height={60}
                style={{ width: 120, height: 120 }}
              />
            </View>
          </Space>
        </Card>

        <Card title="占位符">
          <Space>
            <View>
              <Text>使用占位符图片</Text>
              <Image
                source={{ uri: onlineImageJpg }}
                placeholder={{ uri: onlineImagePng }}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default BasicUsage;
