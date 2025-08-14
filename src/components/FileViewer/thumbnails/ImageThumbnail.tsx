import React, { FC } from 'react';
import { View } from 'react-native';
import { useTheme } from '../../Theme';
import createStyle from './style';
import Image from '../../Image';

export interface ImageThumbnailProps {
  source: string;
  size?: number;
}

const ImageThumbnail: FC<ImageThumbnailProps> = ({ source, size }) => {
  const token = useTheme();
  const styles = createStyle(token);
  const cutomSize = size ? { width: size, height: size } : {};
  return (
    <View style={[styles.wrapper, cutomSize]}>
      <Image style={styles.image} source={{ uri: source }} />
    </View>
  );
};

export default ImageThumbnail;
