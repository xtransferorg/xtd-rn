import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from '../../Theme';
import createStyle from './style';
import { Source } from 'src/components/PdfViewer';
import { IconXPdf2 } from '../../../icons/index';

export interface PdfThumbnailProps {
  source?: Source | number | string;
  size?: number;
  onPreview?: (source?: Source | number | string) => void;
}
const PdfThumbnail: React.FC<PdfThumbnailProps> = ({
  source,
  size,
  onPreview,
}) => {
  const token = useTheme();
  const styles = createStyle(token);
  const cutomSize = size ? { width: size, height: size } : {};
  return (
    <View style={[styles.wrapper, cutomSize]}>
      <TouchableOpacity onPress={() => onPreview?.(source)}>
        <View style={styles.wrapper}>
          <IconXPdf2 size={48} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PdfThumbnail;
