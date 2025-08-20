import React, { useMemo, useState } from 'react';
import { LayoutChangeEvent, View, StyleSheet } from 'react-native';
import { IProps } from './interface';
import Image from '../Image';

const styles = StyleSheet.create({
  emptyWrapper: {
    backgroundColor: '#f9f9f9', // '#f9f9f9'
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});

/**
 * @deprecated 已经废弃
 */
const Empty: React.FC<IProps> = (props) => {
  const { height, width, style, imageStyle } = props;
  const [containerWidth, setContainerWidth] = useState(width || 0);
  const [containerHeight, setContainerHeight] = useState(height || 0);

  /**
   * @description 确定容器的宽高
   * @param event
   */
  const onLayout = (event: LayoutChangeEvent) => {
    const { nativeEvent } = event;
    if (containerWidth !== nativeEvent.layout.width)
      setContainerWidth(nativeEvent.layout.width);
    if (containerHeight !== nativeEvent.layout.height)
      setContainerHeight(nativeEvent.layout.height);
  };

  const paddingLeftRight = useMemo(() => containerWidth / 4, [containerWidth]);

  return (
    <View
      style={[
        styles.emptyWrapper,
        {
          paddingLeft: paddingLeftRight,
          paddingRight: paddingLeftRight,
        },
        style,
      ]}
      onLayout={onLayout}
    >
      {Boolean(containerHeight) && Boolean(containerWidth) && (
        <Image
          style={[styles.emptyImg, imageStyle]}
          source={
            containerWidth > 100
              ? require('./imgs/XtransferLogo.png')
              : require('./imgs/XTLogo.png')
          }
        />
      )}
    </View>
  );
};

export default Empty;
