import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { ImageViewer, Space, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const EventsAndCallbacks = () => {
  const [eventLogs, setEventLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const imageList = [
    {
      url: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const addLog = (message: string) => {
    const timestamp = new Date().toTimeString().slice(0, 8);
    setEventLogs((prev) => [`${timestamp}: ${message}`, ...prev.slice(0, 9)]);
  };

  const handleHiddenModal = () => {
    setIsModalVisible(false);
    addLog('图片预览模态框已关闭');
  };

  const handlePreviewIndex = (index: number) => {
    setCurrentIndex(index);
    setIsModalVisible(true);
    addLog(`切换到第 ${index + 1} 张图片`);
  };

  const handleDownload = (index: number) => {
    addLog(`下载第 ${index + 1} 张图片`);
  };

  const clearLogs = () => {
    setEventLogs([]);
  };

  return (
    <ScrollView>
      <Space>
        <Card title="事件回调演示">
          <Text style={styles.description}>点击图片查看事件回调</Text>
          <ImageViewer
            hiddenPreviewModal={handleHiddenModal}
            previewImageIndex={handlePreviewIndex}
            onDownload={handleDownload}
            imageUrls={imageList}
          >
            {imageList.map((item, index) => (
              <Image
                key={index}
                style={styles.thumbnailImage}
                source={{ uri: item.url }}
                resizeMode="cover"
              />
            ))}
          </ImageViewer>
        </Card>

        <Card title="状态信息">
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>
              当前图片索引: {currentIndex + 1}
            </Text>
            <Text style={styles.statusText}>
              模态框状态: {isModalVisible ? '显示中' : '已隐藏'}
            </Text>
            <Text style={styles.statusText}>图片总数: {imageList.length}</Text>
          </View>
        </Card>

        <Card title="事件日志">
          <View style={styles.logContainer}>
            <View style={styles.logHeader}>
              <Text style={styles.logTitle}>事件记录</Text>
              <Button size={Size.small} onPress={clearLogs}>
                清除日志
              </Button>
            </View>
            <View style={styles.logContent}>
              {eventLogs.length > 0 ? (
                eventLogs.map((log, index) => (
                  <Text key={index} style={styles.logItem}>
                    {log}
                  </Text>
                ))
              ) : (
                <Text style={styles.emptyLog}>暂无事件日志</Text>
              )}
            </View>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default EventsAndCallbacks;
