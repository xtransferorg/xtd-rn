import React from 'react';
import { Image, ScrollView } from 'react-native';
import { ImageViewer } from '@xrnjs/ui';
import Card from '_global/Card';

const ImageViewerScreen = () => {
  const previewList = [
    {
      url: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    },
    {
      url: 'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
    },
  ];
  const previewIndex = 0;

  const hiddenPreviewModal = () => {
    console.log('已关闭预览图片modal');
  };
  const previewImageIndex = (index: number) => {
    console.log('index--- ', index);
  };
  return (
    <ScrollView>
      <Card title="基本用法，点击图片弹出浮层">
        <ImageViewer
          hiddenPreviewModal={hiddenPreviewModal}
          previewImageIndex={previewImageIndex}
          initIndex={previewIndex}
          imageUrls={previewList}
        >
          <Image
            style={{ width: 100, height: 100, margin: 10 }}
            source={{
              uri: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
            }}
          />
        </ImageViewer>
      </Card>
    </ScrollView>
  );
};

export default ImageViewerScreen;
