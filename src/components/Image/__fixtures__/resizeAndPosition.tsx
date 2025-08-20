import Card from '_global/Card';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Image, Space } from '@xrnjs/ui';

const onlineImage =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

const ResizeAndPosition = () => {
  return (
    <ScrollView>
      <Space>
        <Card title="图片适应模式 (contentFit)">
          <Space>
            <View>
              <Text>cover - 保持宽高比，填满容器</Text>
              <View
                style={{ width: 100, height: 100, backgroundColor: '#f0f0f0' }}
              >
                <Image
                  source={{ uri: onlineImage }}
                  style={{ width: '100%', height: '100%' }}
                  contentFit="cover"
                />
              </View>
            </View>

            <View>
              <Text>contain - 保持宽高比，完整显示</Text>
              <View
                style={{ width: 100, height: 100, backgroundColor: '#f0f0f0' }}
              >
                <Image
                  source={{ uri: onlineImage }}
                  style={{ width: '100%', height: '100%' }}
                  contentFit="contain"
                />
              </View>
            </View>

            <View>
              <Text>fill - 填满容器，可能变形</Text>
              <View
                style={{ width: 100, height: 100, backgroundColor: '#f0f0f0' }}
              >
                <Image
                  source={{ uri: onlineImage }}
                  style={{ width: '100%', height: '100%' }}
                  contentFit="fill"
                />
              </View>
            </View>

            <View>
              <Text>none - 原始尺寸，不缩放</Text>
              <View
                style={{ width: 100, height: 100, backgroundColor: '#f0f0f0' }}
              >
                <Image
                  source={{ uri: onlineImage }}
                  style={{ width: '100%', height: '100%' }}
                  contentFit="none"
                />
              </View>
            </View>

            <View>
              <Text>scale-down - 缩小到适合容器</Text>
              <View
                style={{ width: 100, height: 100, backgroundColor: '#f0f0f0' }}
              >
                <Image
                  source={{ uri: onlineImage }}
                  style={{ width: '100%', height: '100%' }}
                  contentFit="scale-down"
                />
              </View>
            </View>
          </Space>
        </Card>

        <Card title="图片位置 (contentPosition)">
          <Space>
            <View>
              <Text>center - 居中</Text>
              <View
                style={{ width: 100, height: 100, backgroundColor: '#f0f0f0' }}
              >
                <Image
                  source={{ uri: onlineImage }}
                  style={{ width: '100%', height: '100%' }}
                  contentFit="none"
                  contentPosition="center"
                />
              </View>
            </View>

            <View>
              <Text>top left - 左上角</Text>
              <View
                style={{ width: 100, height: 100, backgroundColor: '#f0f0f0' }}
              >
                <Image
                  source={{ uri: onlineImage }}
                  style={{ width: '100%', height: '100%' }}
                  contentFit="none"
                  contentPosition="top left"
                />
              </View>
            </View>

            <View>
              <Text>bottom right - 右下角</Text>
              <View
                style={{ width: 100, height: 100, backgroundColor: '#f0f0f0' }}
              >
                <Image
                  source={{ uri: onlineImage }}
                  style={{ width: '100%', height: '100%' }}
                  contentFit="none"
                  contentPosition="bottom right"
                />
              </View>
            </View>

            <View>
              <Text>自定义位置 - 25% 75%</Text>
              <View
                style={{ width: 100, height: 100, backgroundColor: '#f0f0f0' }}
              >
                <Image
                  source={{ uri: onlineImage }}
                  style={{ width: '100%', height: '100%' }}
                  contentFit="none"
                  contentPosition={{ left: '25%', top: '75%' }}
                />
              </View>
            </View>
          </Space>
        </Card>

        <Card title="兼容 React Native 的 resizeMode">
          <Space>
            <View>
              <Text>cover</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 100, height: 100 }}
                resizeMode="cover"
              />
            </View>

            <View>
              <Text>contain</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>

            <View>
              <Text>stretch</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 100, height: 100 }}
                resizeMode="stretch"
              />
            </View>

            <View>
              <Text>center</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 100, height: 100 }}
                resizeMode="center"
              />
            </View>
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default ResizeAndPosition;
