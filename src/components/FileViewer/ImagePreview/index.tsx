import React, { ReactNode, useState, Children } from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { ImageViewerProps } from './interface';
import { mergeProps } from '../../../core/helpers';
import ImagePreviewHeader from './ImagePreviewHeader';
import ImagePreviewIndicator from './ImagePreviewIndicator';
import { requestPermission } from '../../QRCode/permissions';
import RNFS from 'react-native-fs';
import { PhoneAuths } from '../../Uploader/enum';
import { useTheme } from '../../Theme';
import Toast from '../../Toast';
import createStyle from './style';
import { useLocale } from '../..//Locale/locale';

const defaultProps = {
  backgroundColor: '#333333',
  index: 0,
  horizontal: true,
};

const PreviewImageModal = (p: ImageViewerProps) => {
  const props = mergeProps(defaultProps, p);
  const token = useTheme();
  const styles = createStyle(token);
  const {
    hiddenPreviewModal,
    previewImageIndex,
    sources,
    backgroundColor,
    children,
    horizontal,
    onDownload,
    gap,
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickNumber, setClickNumber] = useState(0);
  const [visible, setVisible] = useState(false);

  const onPressImg = (i: number) => {
    setVisible(true);
    setClickNumber(i);
    setCurrentIndex(i);
    previewImageIndex?.(i);
  };

  const onClick = () => {
    setVisible(false);
    hiddenPreviewModal?.();
  };

  const onChange = (index?: number) => {
    if (typeof index === 'number') {
      setCurrentIndex(index);
      previewImageIndex?.(index);
    }
  };

  const getMimeType = (mime: string) => {
    // jpeg兜底
    return mime.split('/')?.[1] ?? 'jpeg';
  };

  const locale = useLocale();
  const handleDownload = async () => {
    if (onDownload) {
      return onDownload(currentIndex);
    }

    const granted = requestPermission(PhoneAuths.PhotoLibrary);

    if (!granted) {
      return;
    }

    try {
      const url = sources[currentIndex].uri;
      // 通过头信息判断文件类型，确定文件后缀名
      const response = await fetch(url, { method: 'HEAD' });
      const mimeType = getMimeType(response.headers.get('content-type') ?? '');

      const path = `${RNFS.CachesDirectoryPath}/XT${Date.now}.${mimeType}`;

      const downloadResult = await RNFS.downloadFile({
        fromUrl: url,
        toFile: path,
      }).promise;

      if (downloadResult.statusCode === 200) {
        return CameraRoll.save(path, { type: 'photo' }).then(() => {
          Toast({
            message: locale.FileViewer.saveSuccessText,
            useNative: true,
          });
        });
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  const imgUrls = sources.map((item: { uri: string }) => ({
    ...item,
    url: item.uri,
  }));

  return (
    <View
      style={[
        styles.container,
        { flexDirection: horizontal ? 'row' : 'column', gap },
      ]}
    >
      {Children.map(children, (child: ReactNode, index: number) => (
        <TouchableOpacity key={index} onPress={() => onPressImg(index)}>
          {child}
        </TouchableOpacity>
      ))}
      <Modal visible={visible} transparent={true}>
        <ImageViewer
          onChange={onChange}
          saveToLocalByLongPress={false}
          index={clickNumber}
          imageUrls={imgUrls}
          enableSwipeDown={false}
          onClick={onClick}
          backgroundColor={backgroundColor}
          enableImageZoom
          renderHeader={() => (
            <ImagePreviewHeader
              index={currentIndex}
              onClose={onClick}
              onDownload={handleDownload}
            />
          )}
          renderIndicator={(current, size) => (
            <ImagePreviewIndicator current={current} size={size} />
          )}
        />
      </Modal>
    </View>
  );
};

export default PreviewImageModal;
