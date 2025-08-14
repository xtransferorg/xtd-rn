import { ViewStyle, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import React, { memo } from 'react';
import { THEME_TOKEN } from '../Theme/constant';

interface ArrowViewProps {
  width?: number;
  height?: number;
  fillColor?: string;
  fillOpacity?: number;
  style?: ViewStyle;
}

const ArrowView = ({
  width = 16,
  height = 8,
  fillColor = THEME_TOKEN['--color-bg-1'],
  style,
}: ArrowViewProps) => {
  return SvgXml ? (
    <View style={style}>
      <SvgXml
        width={width}
        height={height}
        xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="7" viewBox="0 0 16 7" fill="none">
      <path d="M10.8284 1.82842L16 7L0 7L5.17157 1.82843C6.73367 0.266329 9.26633 0.266326 10.8284 1.82842Z" fill="${fillColor}"/>
    </svg>`}
      />
    </View>
  ) : (
    <></>
  );
};

export default memo(ArrowView);
