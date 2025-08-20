import React from 'react';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { PreviewProps } from './interface';

export const PreviewImageModal = (props: PreviewProps) => {
  const { visible, onRequestClose, index, imageUrls, onSwipeDown, onClick } =
    props;

  return (
    <Modal visible={visible} transparent={true} onRequestClose={onRequestClose}>
      <ImageViewer
        saveToLocalByLongPress={false}
        index={index ? index : 0}
        // @ts-ignore
        imageUrls={imageUrls}
        enableSwipeDown={true}
        onSwipeDown={onSwipeDown}
        onClick={onClick}
        backgroundColor={'#33333396'}
        enableImageZoom
      />
    </Modal>
  );
};
