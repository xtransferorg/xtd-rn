import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { ImageViewer, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const LayoutAndStyle = () => {
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
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const handleHiddenModal = () => {
    console.log('图片预览已关闭');
  };

  const handlePreviewIndex = (index: number) => {
    console.log('当前预览图片索引:', index);
  };

  return (
    <ScrollView>
      <Space>
        <Card title="水平布局 (默认)">
          <Text style={styles.description}>图片水平排列</Text>
          <ImageViewer
            horizontal={true}
            hiddenPreviewModal={handleHiddenModal}
            previewImageIndex={handlePreviewIndex}
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

        <Card title="垂直布局">
          <Text style={styles.description}>图片垂直排列</Text>
          <ImageViewer
            horizontal={false}
            hiddenPreviewModal={handleHiddenModal}
            previewImageIndex={handlePreviewIndex}
            imageUrls={imageList}
          >
            {imageList.map((item, index) => (
              <Image
                key={index}
                style={styles.thumbnailImageVertical}
                source={{ uri: item.url }}
                resizeMode="cover"
              />
            ))}
          </ImageViewer>
        </Card>

        <Card title="自定义背景色">
          <Text style={styles.description}>深色背景</Text>
          <ImageViewer
            backgroundColor="#000000"
            hiddenPreviewModal={handleHiddenModal}
            previewImageIndex={handlePreviewIndex}
            imageUrls={imageList}
          >
            {imageList.slice(0, 2).map((item, index) => (
              <Image
                key={index}
                style={styles.thumbnailImage}
                source={{ uri: item.url }}
                resizeMode="cover"
              />
            ))}
          </ImageViewer>
        </Card>

        <Card title="浅色背景">
          <Text style={styles.description}>浅色背景</Text>
          <ImageViewer
            backgroundColor="#f5f5f5"
            hiddenPreviewModal={handleHiddenModal}
            previewImageIndex={handlePreviewIndex}
            imageUrls={imageList}
          >
            {imageList.slice(0, 2).map((item, index) => (
              <Image
                key={index}
                style={styles.thumbnailImage}
                source={{ uri: item.url }}
                resizeMode="cover"
              />
            ))}
          </ImageViewer>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default LayoutAndStyle;
