import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { ImageViewer, Space, Button, Size } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const AdvancedFeatures = () => {
  const [dynamicImages, setDynamicImages] = useState([
    {
      url: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]);

  const additionalImages = [
    {
      url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const gifImages = [
    {
      url: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
    },
    {
      url: 'https://media.giphy.com/media/26BRrSvJUa0crqw4E/giphy.gif',
    },
  ];

  const largeImages = [
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
  ];

  const addImages = () => {
    setDynamicImages((prev) => [...prev, ...additionalImages]);
  };

  const removeImages = () => {
    setDynamicImages((prev) => prev.slice(0, 2));
  };

  const handleHiddenModal = () => {
    console.log('图片预览已关闭');
  };

  const handlePreviewIndex = (index: number) => {
    console.log('当前预览图片索引:', index);
  };

  return (
    <ScrollView>
      <Space>
        <Card title="动态图片列表">
          <Text style={styles.description}>
            动态添加或移除图片，当前图片数量: {dynamicImages.length}
          </Text>
          <View style={styles.buttonGroup}>
            <Button size={Size.small} onPress={addImages}>
              添加图片
            </Button>
            <Button size={Size.small} onPress={removeImages}>
              移除图片
            </Button>
          </View>
          <ImageViewer
            hiddenPreviewModal={handleHiddenModal}
            previewImageIndex={handlePreviewIndex}
            imageUrls={dynamicImages}
          >
            {dynamicImages.map((item, index) => (
              <Image
                key={index}
                style={styles.thumbnailImage}
                source={{ uri: item.url }}
                resizeMode="cover"
              />
            ))}
          </ImageViewer>
        </Card>

        <Card title="GIF 动图预览">
          <Text style={styles.description}>支持 GIF 动图预览</Text>
          <ImageViewer
            hiddenPreviewModal={handleHiddenModal}
            previewImageIndex={handlePreviewIndex}
            imageUrls={gifImages}
          >
            {gifImages.map((item, index) => (
              <Image
                key={index}
                style={styles.thumbnailImage}
                source={{ uri: item.url }}
                resizeMode="cover"
              />
            ))}
          </ImageViewer>
        </Card>

        <Card title="高分辨率图片">
          <Text style={styles.description}>
            支持高分辨率图片预览，可缩放查看细节
          </Text>
          <ImageViewer
            hiddenPreviewModal={handleHiddenModal}
            previewImageIndex={handlePreviewIndex}
            imageUrls={largeImages}
          >
            {largeImages.map((item, index) => (
              <Image
                key={index}
                style={styles.thumbnailImage}
                source={{ uri: item.url }}
                resizeMode="cover"
              />
            ))}
          </ImageViewer>
        </Card>

        <Card title="网格布局预览">
          <Text style={styles.description}>多图网格布局展示</Text>
          <View style={styles.gridContainer}>
            <ImageViewer
              hiddenPreviewModal={handleHiddenModal}
              previewImageIndex={handlePreviewIndex}
              imageUrls={dynamicImages}
            >
              {dynamicImages.map((item, index) => (
                <Image
                  key={index}
                  style={styles.gridImage}
                  source={{ uri: item.url }}
                  resizeMode="cover"
                />
              ))}
            </ImageViewer>
          </View>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default AdvancedFeatures;
