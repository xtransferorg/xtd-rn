import React from 'react';
import { ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';

interface RadiusViewProps {
  fillColor?: string;
  fillOpacity?: number;
  style?: ViewStyle;
}

const RadiusView = ({ fillColor = '#181721', style }: RadiusViewProps) => {
  return SvgXml ? (
    <SvgXml
      style={style}
      width={16}
      height={16}
      xml={`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H0V16C0 8.83656 5.83656 0 16 0Z" fill="${fillColor}" fill-opacity="1"/>
          </svg>`}
    />
  ) : (
    <></>
  );
};

export default RadiusView;
