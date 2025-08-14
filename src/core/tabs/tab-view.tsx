import React, { useRef, memo } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { View } from 'react-native';

import type { TabViewProps } from './interface';

const activeStyle: ViewStyle = {};
const inactiveStyle: ViewStyle = { display: 'none' };

const TabView: React.FC<TabViewProps> = ({
  children,
  active,
  lazyRender = true,
  swipe,
  tabWidth,
  onLayout,
}) => {
  const Activated = useRef(!lazyRender);

  if (active) {
    Activated.current = true;
  }

  return (
    <>
      {swipe ? (
        <View
          style={StyleSheet.flatten([{ width: tabWidth }, activeStyle])}
          onLayout={onLayout}
        >
          {children}
        </View>
      ) : (
        <View style={active ? activeStyle : inactiveStyle} onLayout={onLayout}>
          {Activated.current ? children : null}
        </View>
      )}
    </>
  );
};

export default memo(TabView);
