import React, { FC } from 'react';
import { IconXClosesmall1, IconXDownload1 } from '../../../icons/index';
import { View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import createStyle from './style';
import { useTheme } from '../../Theme';

interface ImagePreviewHeaderProps {
  index: number;
  onDownload: (index: number) => void;
  onClose: () => void;
}
const ImagePreviewHeader: FC<ImagePreviewHeaderProps> = ({
  index,
  onDownload,
  onClose,
}) => {
  const insets = useSafeAreaInsets();
  const token = useTheme();
  const styles = createStyle(token);

  return (
    <View style={[styles.header, { top: insets.top }]}>
      <TouchableOpacity onPress={onClose}>
        <View style={styles.iconBg}>
          <IconXClosesmall1 size={20} fillColor={token['--color-text-1']} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDownload?.(index)}>
        <View style={styles.iconBg}>
          <IconXDownload1 size={20} color={token['--color-text-1']} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePreviewHeader;
