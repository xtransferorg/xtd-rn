import React, { ForwardRefRenderFunction, useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { RNCollapseProps } from './interface';

export const Collapse: ForwardRefRenderFunction<any, RNCollapseProps> = (
  props
  // ref
) => {
  const {
    // 是否开启手风琴模式
    accordion = false,
    // 手风琴模式：string | ''
    // 非手风琴模式：string[]
    activeKey,
    arrow,
    defaultActiveKey,
    onChange,
    children,
  } = props;

  const [activeItem, setActiveItem] = useState(
    activeKey ||
      (accordion
        ? defaultActiveKey || ''
        : Array.isArray(defaultActiveKey)
        ? defaultActiveKey
        : [])
  );

  const defaultValue = accordion ? '' : [];

  useEffect(() => {
    setActiveItem(activeKey ?? defaultActiveKey ?? defaultValue);
  }, [activeKey]);

  /**
   * @description onChange event of each collapse item
   * @param key
   */
  const onItemChange = (key: string) => {
    let newItem = activeItem;
    const isItemVisible = Array.isArray(activeItem)
      ? activeItem.includes(key)
      : activeItem === key;

    if (accordion) {
      newItem = isItemVisible ? '' : key;
    } else {
      if (Array.isArray(activeItem)) {
        newItem = isItemVisible
          ? activeItem.filter((item) => item !== key)
          : [...activeItem, key];
      } else {
        newItem = [key];
      }
    }
    setActiveItem(newItem);
    onChange && onChange(newItem);
  };

  const isExpand = (key: string) => {
    return Array.isArray(activeItem)
      ? activeItem?.includes(key)
      : activeItem === key;
  };

  return (
    <View>
      {React.Children.toArray(children)
        .filter(React.isValidElement)
        .map((child: React.ReactElement, index: number) => {
          const key = child.props.name ?? index;
          return React.cloneElement(child, {
            expanded: isExpand(key),
            onExpand: () => onItemChange(key),
            arrow: child.props?.arrow || arrow,
          });
        })}
    </View>
  );
};
