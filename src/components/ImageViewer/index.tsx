import React, { ReactNode, useState, Children } from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { ImageViewerProps } from './interface';
import { mergeProps } from '../../core/helpers';
import styles from './style';

const defaultProps = {
  backgroundColor: '#333333',
  index: 0,
  horizontal: true,
};

const PreviewImageModal = (p: ImageViewerProps) => {
  const props = mergeProps(defaultProps, p);
  const {
    hiddenPreviewModal,
    previewImageIndex,
    imageUrls,
    backgroundColor,
    children,
    horizontal,
  } = props;

  const [clickNumber, setClickNumber] = useState(0);
  const [visible, setVisible] = useState(false);

  const onPressImg = (i: number) => {
    setClickNumber(i);
    setVisible(true);
    previewImageIndex?.(i);
  };

  const onClick = () => {
    setVisible(false);
    hiddenPreviewModal?.();
  };

  return (
    <View
      style={[
        styles.container,
        { flexDirection: horizontal ? 'row' : 'column' },
      ]}
    >
      {Children.map(children, (child: ReactNode, index: number) => (
        <TouchableOpacity key={index} onPress={() => onPressImg(index)}>
          {child}
        </TouchableOpacity>
      ))}
      <Modal visible={visible} transparent={true}>
        <ImageViewer
          onChange={previewImageIndex as any}
          saveToLocalByLongPress={false}
          index={clickNumber}
          imageUrls={imageUrls}
          enableSwipeDown={false}
          onClick={onClick}
          backgroundColor={backgroundColor}
          enableImageZoom
        />
      </Modal>
    </View>
  );
};

export default PreviewImageModal;
