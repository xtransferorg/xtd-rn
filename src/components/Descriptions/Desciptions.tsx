import React, { useRef, useState, useCallback, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { isNil, isUndefined } from 'lodash';

import ShouldRender from '../ShouldRender';
import createStyle from './styles/descriptions.style';
import { useTheme } from '../Theme/Theme';
import { DescriptionsProps } from './interface';
import { renderTextLikeJSX } from '../../core/helpers';
import { IconXRightsmall1 } from '../../icons/index';
import { getComputedTitleAndContentStyles } from '../../core/descriptions/helper';

const Descriptions = ({
  bordered = false,
  extra,
  expanded = true,
  value,
  defaultValue = true,
  onChange,
  style,
  horizontal,
  title,
  titleStyle,
  items,
  itemStyle,
  itemTitleStyle,
  itemContentStyle,
  selectable = false,
}: DescriptionsProps) => {
  const token = useTheme();
  const styles = createStyle(token);
  const arrowAnim = useRef(new Animated.Value(0)).current;
  const [isExpanded, setIsExpaned] = useState(defaultValue);
  const isFirst = useRef(true); // 首次渲染动画问题

  const onExpand = useCallback(() => {
    Animated.parallel([
      Animated.timing(arrowAnim, {
        toValue: 1,
        duration: isFirst.current ? 0 : 150,
        useNativeDriver: true,
      }),
    ]).start();
    isFirst.current = false;
  }, [arrowAnim, isFirst]);

  const onClose = useCallback(() => {
    Animated.parallel([
      Animated.timing(arrowAnim, {
        toValue: 0,
        duration: isFirst.current ? 0 : 150,
        useNativeDriver: true,
      }),
    ]).start();
    isFirst.current = false;
  }, [arrowAnim, isFirst]);

  useEffect(() => {
    if (value ?? isExpanded) {
      onExpand();
    } else {
      onClose();
    }
  }, [value, isExpanded, onClose, onExpand]);

  const onPress = () => {
    if (!expanded) return; //不允许操作展开收起

    const nextValue = !(value ?? isExpanded);

    onChange?.(nextValue);

    if (isUndefined(value)) {
      setIsExpaned(nextValue);
    }
  };

  const header = (
    <ShouldRender condition={!isNil(title)}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.header}>
          {renderTextLikeJSX(title, [styles.title, titleStyle])}
          {renderTextLikeJSX(extra, [styles.extra])}
          <ShouldRender condition={expanded}>
            <View style={styles.space} />
            <Animated.View
              style={{
                transform: [
                  {
                    rotate: arrowAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '90deg'],
                    }),
                  },
                ],
              }}
            >
              <IconXRightsmall1
                size={token['--font-size-3']}
                fillColor={token['--color-text-5']}
              />
            </Animated.View>
          </ShouldRender>
        </View>
      </TouchableWithoutFeedback>
    </ShouldRender>
  );

  const listMaxIndex = (items?.length ?? 0) - 1;
  const lists = (
    <>
      <ShouldRender condition={!!items?.length && isExpanded}>
        <Animated.View
          style={StyleSheet.flatten([
            styles.items,
            isNil(title) && styles.itemsNoHead,
            bordered && styles.itemsBorder,
          ])}
        >
          {items?.map((item, i) => {
            const computedTitleAndContentStyles =
              getComputedTitleAndContentStyles(
                item?.title,
                item?.content,
                horizontal
              );

            return (
              <View
                key={`item-${i}`}
                style={StyleSheet.flatten([
                  styles.item,
                  i === listMaxIndex && styles.lastItem, // 最后一项
                  horizontal && styles.itemRow,
                  itemStyle,
                ])}
              >
                {renderTextLikeJSX(item?.title, [
                  styles.itemTitle,
                  horizontal && styles.itemTitleRow,
                  horizontal && computedTitleAndContentStyles.titleStyle,
                  itemTitleStyle,
                ])}
                {renderTextLikeJSX(
                  item?.content,
                  [
                    styles.itemContent,
                    horizontal && styles.itemContentRow,
                    horizontal && computedTitleAndContentStyles.contentStyle,
                    itemContentStyle,
                  ],
                  {
                    selectable,
                  }
                )}
              </View>
            );
          })}
        </Animated.View>
      </ShouldRender>
    </>
  );

  return (
    <View style={StyleSheet.flatten([styles.wrapper, style])}>
      {header}
      {lists}
    </View>
  );
};

export default Descriptions;
