import React from 'react';
import { Image, ScrollView } from 'react-native';
import { ImageViewer, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const BasicUsage = () => {
  const singleImageList = [
    {
      url: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const multipleImageList = [
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

  const handleHiddenModal = () => {
    console.log('图片预览已关闭');
  };

  const handlePreviewIndex = (index: number) => {
    console.log('当前预览图片索引:', index);
  };

  return (
    <ScrollView>
      <Space>
        <Card title="单张图片预览">
          <ImageViewer
            hiddenPreviewModal={handleHiddenModal}
            previewImageIndex={handlePreviewIndex}
            imageUrls={singleImageList}
          >
            <Image
              style={styles.thumbnailImage}
              source={{ uri: singleImageList[0]!.url }}
              resizeMode="cover"
            />
          </ImageViewer>
        </Card>

        <Card title="多张图片预览">
          <ImageViewer
            hiddenPreviewModal={handleHiddenModal}
            previewImageIndex={handlePreviewIndex}
            imageUrls={multipleImageList}
          >
            {multipleImageList.map((item, index) => (
              <Image
                key={index}
                style={styles.thumbnailImage}
                source={{ uri: item.url }}
                resizeMode="cover"
              />
            ))}
          </ImageViewer>
        </Card>

        <Card title="指定初始预览图片">
          <ImageViewer
            hiddenPreviewModal={handleHiddenModal}
            previewImageIndex={handlePreviewIndex}
            imageUrls={multipleImageList}
            initIndex={1}
          >
            {multipleImageList.map((item, index) => (
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

export default BasicUsage;
