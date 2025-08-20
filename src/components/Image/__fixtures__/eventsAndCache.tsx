import Card from '_global/Card';
import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import { Image, Space, Button, Input } from '@xrnjs/ui';

const defaultImage =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

const EventsAndCache = () => {
  const [imageUri, setImageUri] = useState(defaultImage);
  const [eventLogs, setEventLogs] = useState<string[]>([]);
  const [cachePath, setCachePath] = useState<string>('');
  const imageUriRef = useRef(defaultImage);
  const isWeb = Platform.OS === 'web';

  const addLog = (message: string) => {
    if (!isWeb) {
      setEventLogs((prev) => [
        ...prev,
        `${new Date().toLocaleTimeString()}: ${message}`,
      ]);
    }
  };

  const clearLogs = () => {
    setEventLogs([]);
  };

  const updateImageUri = () => {
    setImageUri(imageUriRef.current);
    clearLogs();
  };

  const clearCache = () => {
    Image.clearDiskCache?.();
    Image.clearMemoryCache?.();
    addLog('缓存已清除');
  };

  const getCachePath = async () => {
    try {
      const path = await Image.getCachePathAsync(imageUri);
      path && setCachePath(path);
      addLog(`缓存路径: ${path}`);
    } catch (error) {
      addLog(`获取缓存路径失败: ${error}`);
    }
  };

  return (
    <ScrollView>
      <Space>
        <Card title="图片事件回调">
          <Space>
            <View>
              <Text>当前图片:</Text>
              <Image
                source={{ uri: imageUri }}
                style={{ width: 150, height: 150 }}
                resizeMode="contain"
                onLoadStart={() => addLog('开始加载 (onLoadStart)')}
                onLoad={(event) =>
                  addLog(
                    `加载成功 (onLoad): ${event.source?.width}x${event.source?.height}`
                  )
                }
                onLoadEnd={() => addLog('加载结束 (onLoadEnd)')}
                onProgress={(event) =>
                  addLog(
                    `加载进度 (onProgress): ${event.loaded}/${event.total}`
                  )
                }
                onError={(event) =>
                  addLog(`加载错误 (onError): ${event.error}`)
                }
                onDisplay={() => addLog('显示成功 (onDisplay)')}
              />
            </View>

            <View>
              <Text>图片地址:</Text>
              <Input.TextArea
                defaultValue={imageUri}
                onChange={(value: string) => {
                  imageUriRef.current = value;
                }}
                placeholder="输入图片URL"
              />
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
              <Button onPress={updateImageUri}>更新图片</Button>
              <Button onPress={clearLogs}>清除日志</Button>
            </View>

            <View>
              <Text>事件日志:</Text>
              <Text style={{ fontSize: 12, color: '#666' }}>
                {eventLogs.length > 0 ? eventLogs.join('\n') : '暂无事件日志'}
              </Text>
            </View>
          </Space>
        </Card>

        <Card title="缓存管理">
          <Space>
            <View>
              <Text>缓存策略演示</Text>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <View>
                  <Text>无缓存</Text>
                  <Image
                    source={{ uri: imageUri }}
                    style={{ width: 60, height: 60 }}
                    cachePolicy="none"
                  />
                </View>

                <View>
                  <Text>磁盘缓存</Text>
                  <Image
                    source={{ uri: imageUri }}
                    style={{ width: 60, height: 60 }}
                    cachePolicy="disk"
                  />
                </View>

                <View>
                  <Text>内存缓存</Text>
                  <Image
                    source={{ uri: imageUri }}
                    style={{ width: 60, height: 60 }}
                    cachePolicy="memory"
                  />
                </View>

                <View>
                  <Text>内存+磁盘</Text>
                  <Image
                    source={{ uri: imageUri }}
                    style={{ width: 60, height: 60 }}
                    cachePolicy="memory-disk"
                  />
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
              <Button onPress={clearCache}>清除所有缓存</Button>
              <Button onPress={getCachePath}>获取缓存路径</Button>
            </View>

            {cachePath ? (
              <View>
                <Text>缓存路径:</Text>
                <Text style={{ fontSize: 12, color: '#666' }}>{cachePath}</Text>
              </View>
            ) : null}
          </Space>
        </Card>

        <Card title="自定义缓存键">
          <Space>
            <View>
              <Text>使用自定义缓存键</Text>
              <Image
                source={{
                  uri: imageUri,
                  cacheKey: 'custom-cache-key-001',
                }}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>

            <View>
              <Text>带请求头的图片</Text>
              <Image
                source={{
                  uri: imageUri,
                  headers: {
                    'Authorization': 'Bearer token',
                    'User-Agent': 'XTD-RN-Image',
                  },
                }}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>
          </Space>
        </Card>

        <Card title="回收键 (recyclingKey)">
          <Space>
            <View>
              <Text>用于列表优化的回收键</Text>
              <Image
                source={{ uri: imageUri }}
                style={{ width: 100, height: 100 }}
                recyclingKey={`recycling-${Date.now()}`}
                resizeMode="contain"
              />
            </View>
          </Space>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default EventsAndCache;
