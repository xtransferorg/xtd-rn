import React, { FC } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { IconXClosesmall1, IconXPdf2 } from '../../icons/index';
import createStyle from './style';
import { ImageInfo } from './interface';
import { useTheme } from '../Theme/Theme';
import { filePathOSDisplay } from './help';
import Image from '../Image';
import Loading from '../Loading';

interface ImagePreviewProps {
  file: ImageInfo;
  disabled: boolean;
  deleteIcon?: React.ReactNode;
  showDeleteIcon?: boolean;
  onPreviewImage: () => void;
  onPreviewFile?: (uri: string) => void;
  onRemove: () => void;
  onReUpload?: () => void;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}
const ImagePreview: FC<ImagePreviewProps> = ({
  file,
  disabled,
  deleteIcon,
  showDeleteIcon: outShowDeleteIcon = true,
  onPreviewImage,
  onPreviewFile,
  onRemove,
  style,
  contentStyle,
}) => {
  const { uri, type } = file;
  const fileIsPdf = type === 'application/pdf';
  const token = useTheme();
  const styles = createStyle(token);

  const renderDeleteIcon = () => {
    return deleteIcon ? (
      deleteIcon
    ) : (
      <View style={styles.delete_btn}>
        <IconXClosesmall1 fillColor="white" size={token['--font-size-3']} />
      </View>
    );
  };

  const renderLoading = () => (
    <View style={styles.loading}>
      <Loading name="loading-xt" loadingType="circle" size={'small'} />
    </View>
  );

  const renderContent = () => {
    return fileIsPdf ? (
      <TouchableOpacity onPress={() => onPreviewFile?.(uri)}>
        <View
          style={StyleSheet.flatten([
            styles.image_btn,
            styles.common_btn,
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
            contentStyle,
          ])}
        >
          {file.status === 'isUploading' ? (
            renderLoading()
          ) : (
            <IconXPdf2 size={64} />
          )}
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={onPreviewImage}
        style={StyleSheet.flatten([styles.btnWrapper, contentStyle])}
      >
        <View style={StyleSheet.flatten([styles.common_btn, contentStyle])}>
          {file.status === 'isUploading' ? (
            renderLoading()
          ) : (
            <Image
              resizeMode="contain"
              source={{ uri: filePathOSDisplay(file.uri) }}
              style={StyleSheet.flatten([styles.image_content])}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const showDeleteIcon =
    !disabled && file.status !== 'isUploading' && outShowDeleteIcon;

  return (
    <View style={StyleSheet.flatten([styles.imageWrapper, style])}>
      {showDeleteIcon ? (
        <TouchableOpacity onPress={onRemove} style={styles.deleteIconWrap}>
          {renderDeleteIcon()}
        </TouchableOpacity>
      ) : null}

      {renderContent()}
    </View>
  );
};
export default ImagePreview;
