import { fill, isArray, isNil, isString } from 'lodash';
import React, { isValidElement, useCallback, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Character, RateProps } from './interface';
import { IconXStar1, IconXStar2 } from '../../icons/index';
import createStyle from './styles/rate.style';
import ShouldRender from '../ShouldRender';
import { useTheme } from '../Theme';
import { useMeasure } from '../../utils';
import { useControllableValue } from 'ahooks';

const Rate = ({
  style,
  count = 5,
  allowClear = true,
  readonly,
  starStyle,
  description = [],
  character,
  onChange,
  single = false,
  background = false,
  size,
  useContainerWidth = false,
  ...resetProps
}: RateProps) => {
  const token = useTheme();

  const [value, setValue] = useControllableValue<number>(resetProps);
  const defaultCharacter = {
    normal: <IconXStar1 size={32} fillColor={token['--color-text-3']} />,
    selected: <IconXStar2 size={32} />,
  };
  const [ref, onLayout, layout] = useMeasure();
  const allMargin = background ? (count - 1) * 2 : 0;
  const width =
    useContainerWidth && layout?.width
      ? (layout?.width - allMargin) / count
      : size?.width;
  const styles = createStyle(
    token,
    count,
    { ...(size || {}), width },
    allMargin
  );
  const characters = useMemo(() => {
    const characterFinal = character || defaultCharacter;
    if (isArray(characterFinal)) {
      return characterFinal.slice(0, count);
    }
    if (characterFinal?.normal && characterFinal?.selected) {
      return fill(Array(count), characterFinal);
    }
    return [];
  }, [character, count]);

  const descriptionNode = useMemo(() => {
    return description[value || 0];
  }, [value, description]);

  const onPress = useCallback(
    (index: number) => {
      if (readonly) return;

      // 点击当前选中的星星
      if (value === index + 1) {
        // 是否允许取消
        if (allowClear) {
          index = -1;
        } else {
          return;
        }
      }
      setValue(index + 1);
      onChange?.(index + 1);
    },
    [setValue, value, allowClear]
  );

  /**
   * 获取渲染的图标&对应的背景cls
   */
  const getIconAndCls = ({
    item,
    index,
    items,
  }: {
    item: Character;
    index: number;
    items: Character[];
  }) => {
    let node;
    const textCls: StyleProp<TextStyle>[] = [styles.text];
    const bgCls: StyleProp<ViewStyle> = [styles.normal];

    if ((!single && value >= index + 1) || (single && value === index + 1)) {
      node = item.selected;
      textCls.push(styles.textActive);
      bgCls.push(styles.active);
    } else {
      node = item.normal;
    }

    index === 0 && bgCls.push(styles.first);
    index + 1 === items?.length && bgCls.push(styles.last);

    if (isString(node)) {
      node = <Text style={textCls}>{node}</Text>;
    }

    return {
      node,
      cls: background ? bgCls : [],
    };
  };

  return (
    <View
      style={StyleSheet.flatten([styles.container, style])}
      testID="rate"
      ref={ref}
      onLayout={onLayout}
    >
      <View style={StyleSheet.flatten([styles.containerStar, starStyle])}>
        {characters.map((item, index) => {
          const { node, cls } = getIconAndCls({
            item,
            index,
            items: characters,
          });
          return (
            <TouchableOpacity
              style={StyleSheet.flatten([styles.star, ...cls])}
              key={index}
              onPress={() => onPress(index)}
              activeOpacity={readonly ? 1 : 0.2}
              testID={`start${index}`}
            >
              {node}
            </TouchableOpacity>
          );
        })}
      </View>
      <ShouldRender condition={!isNil(descriptionNode)}>
        <View>
          <ShouldRender condition={isString(descriptionNode)}>
            <Text
              style={[
                styles.description,
                value ? styles.lightDescriptionColor : {},
              ]}
            >
              {descriptionNode}
            </Text>
          </ShouldRender>
          <ShouldRender condition={isValidElement(descriptionNode)}>
            {descriptionNode}
          </ShouldRender>
        </View>
      </ShouldRender>
    </View>
  );
};

export default Rate;
