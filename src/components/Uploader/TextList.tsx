import { Text, TouchableOpacity, View } from 'react-native';
import { TextListProps } from './interface';
import React from 'react';
import {
  IconXDownload1,
  IconXTrashcan1,
  IconXDoc2,
  IconXPpt2,
  IconXXls2,
  IconXPdf2,
  IconXZip2,
  IconXTxt2,
  IconXOther2,
  IconXPng2,
  IconXMp42,
  IconXMp32,
} from '../../icons/index';
import createStyle from './style.textlist';
import { useTheme } from '../Theme';
import Loading from '../Loading';
import ShouldRender from '../ShouldRender';

const renderIcon = (fileName: string) => {
  const iconSize = 16;
  const fileType = fileName?.split('.')?.pop()?.toLowerCase();
  switch (fileType) {
    case 'doc':
    case 'docx':
      return <IconXDoc2 size={iconSize} />;
    case 'ppt':
    case 'pptx':
      return <IconXPpt2 size={iconSize} />;
    case 'xls':
    case 'xlsx':
      return <IconXXls2 size={iconSize} />;
    case 'pdf':
      return <IconXPdf2 size={iconSize} />;
    case 'zip':
    case 'rar':
      return <IconXZip2 size={iconSize} />;
    case 'txt':
      return <IconXTxt2 size={iconSize} />;
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp':
    case 'ico':
    case 'webp':
      return <IconXPng2 size={iconSize} />;
    case 'mp4':
    case 'avi':
    case 'mkv':
    case 'wmv':
    case 'flv':
    case '3gp':
      return <IconXMp42 size={iconSize} />;
    case 'mp3':
    case 'wav':
    case 'flac':
    case 'acc':
    case 'ogg':
    case 'amr':
      return <IconXMp32 size={iconSize} />;
    default:
      return <IconXOther2 size={iconSize} />;
  }
};

const TextList = (props: TextListProps) => {
  const { files, onDownload, onRemove, onPreviewFile } = props;
  const token = useTheme();
  const styles = createStyle(token);

  return files && files.length > 0 ? (
    <View style={styles.container}>
      {files?.map((file, index) => (
        <View key={`file${index}`} style={styles.item}>
          <TouchableOpacity
            style={styles.itemLeft}
            disabled={!onPreviewFile}
            onPress={() => onPreviewFile?.(file?.uri)}
          >
            {renderIcon(file?.fileName || file?.uri)}
            <View style={styles.textWrapper}>
              <Text
                numberOfLines={1}
                ellipsizeMode={'middle'}
                style={styles.text}
              >
                {file?.fileName || file?.uri}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.itemRight}>
            <ShouldRender condition={!file.hideDownloadIcon}>
              <TouchableOpacity
                disabled={file.status === 'isUploading'}
                onPress={() => onDownload?.(file)}
              >
                {file.status === 'isUploading' ? (
                  <Loading name="loading-xt" loadingType="circle" size="mini" />
                ) : (
                  <IconXDownload1
                    size={token['--font-size-3']}
                    color={token['--color-text-5']}
                  />
                )}
              </TouchableOpacity>
            </ShouldRender>
            <ShouldRender condition={!file.hideDeleteIcon}>
              <TouchableOpacity onPress={() => onRemove?.(index)}>
                <IconXTrashcan1
                  size={token['--font-size-3']}
                  fillColor={token['--color-text-5']}
                />
              </TouchableOpacity>
            </ShouldRender>
          </View>
        </View>
      ))}
    </View>
  ) : null;
};

export default TextList;
