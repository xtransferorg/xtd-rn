import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../Theme';
import createStyle from './style';

interface ImagePreviewIndicatorProps {
  current?: number;
  size?: number;
}
const ImagePreviewIndicator: FC<ImagePreviewIndicatorProps> = ({
  size,
  current,
}) => {
  const insets = useSafeAreaInsets();
  const token = useTheme();
  const styles = createStyle(token);

  if (!current || !size) {
    return null;
  }

  return (
    <View style={[styles.indicatorWrapper, { bottom: insets.bottom }]}>
      <View style={styles.indicator}>
        <Text style={styles.indicatorText}>
          {current}/{size}
        </Text>
      </View>
    </View>
  );
};

export default ImagePreviewIndicator;
