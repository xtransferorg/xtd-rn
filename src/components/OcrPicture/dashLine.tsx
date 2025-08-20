import React from 'react';
import { ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';

interface LightIconProps {
  style?: ViewStyle;
}

const DashLine = ({ style }: LightIconProps) => {
  return SvgXml ? (
    <SvgXml
      style={style}
      xml={`<svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="314" y2="1" stroke="#fff" stroke-width="2" stroke-dasharray="10 10"/>
            </svg>
          `}
    />
  ) : (
    <></>
  );
};

export default DashLine;
