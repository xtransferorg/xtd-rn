import { ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';
import React, { memo } from 'react';
import { THEME_TOKEN } from '../Theme/constant';

interface RadiusViewProps {
  size?: number;
  fillColor?: string;
  fillOpacity?: number;
  style?: ViewStyle;
}

const RadiusView = ({
  size = 8,
  fillColor = THEME_TOKEN['--color-bg-1'],
  fillOpacity = 0.4,
  style,
}: RadiusViewProps) => {
  return SvgXml ? (
    <SvgXml
      style={style}
      width={size}
      height={size}
      xml={`<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H0V8C0 3.58172 3.58172 0 8 0Z" fill="${fillColor}" fill-opacity="${fillOpacity}"/>
          </svg>`}
    />
  ) : (
    <></>
  );
};

export default memo(RadiusView);
