import Card from '_global/Card';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Image, Space } from '@xrnjs/ui';

const onlineImage =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

const Accessibility = () => {
  return (
    <ScrollView>
      <Space>
        <Card title="无障碍访问">
          <Space>
            <View>
              <Text>带有无障碍标签的图片</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 100, height: 100 }}
                accessible={true}
                accessibilityLabel="这是一张年度账单的背景图片"
                resizeMode="cover"
              />
            </View>

            <View>
              <Text>使用 alt 属性 (accessibilityLabel 的别名)</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 100, height: 100 }}
                accessible={true}
                alt="年度账单背景图片的替代描述"
                resizeMode="cover"
              />
            </View>
          </Space>
        </Card>

        <Card title="测试标识">
          <Space>
            <View>
              <Text>用于自动化测试的图片</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 100, height: 100 }}
                testID="test-image-001"
                accessibilityLabel="测试用图片"
                resizeMode="cover"
              />
            </View>
          </Space>
        </Card>

        <Card title="实时文本交互 (iOS 16.0+)">
          <Space>
            <View>
              <Text>启用实时文本交互</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 150, height: 100 }}
                enableLiveTextInteraction={true}
                resizeMode="cover"
              />
              <Text style={{ fontSize: 12, color: '#666' }}>
                在 iOS 16.0+ 设备上，长按图片可以选择和复制其中的文本
              </Text>
            </View>
          </Space>
        </Card>

        <Card title="图片质量控制">
          <Space>
            <View>
              <Text>允许降采样 (默认开启)</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 100, height: 100 }}
                allowDownscaling={true}
                resizeMode="cover"
              />
            </View>

            <View>
              <Text>禁用降采样 (保持最高质量)</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 100, height: 100 }}
                allowDownscaling={false}
                resizeMode="cover"
              />
              <Text style={{ fontSize: 12, color: '#666' }}>
                禁用降采样可能影响性能，但图片质量更高
              </Text>
            </View>
          </Space>
        </Card>

        <Card title="解码格式 (Android)">
          <Space>
            <View>
              <Text>ARGB 格式 (支持透明度)</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 80, height: 80 }}
                decodeFormat="argb"
                resizeMode="cover"
              />
            </View>

            <View>
              <Text>RGB 格式 (不支持透明度，更节省内存)</Text>
              <Image
                source={{ uri: onlineImage }}
                style={{ width: 80, height: 80 }}
                decodeFormat="rgb"
                resizeMode="cover"
              />
            </View>
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default Accessibility;
