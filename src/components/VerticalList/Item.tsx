import React, { isValidElement } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { isBoolean, isFunction, isString } from 'lodash';
import styles from './styles/item.style';
import { Divider, ShouldRender } from '@xrnjs/ui';
import { VerticalListItemBase } from './interface';

const isValidString = (v: React.ReactNode) => isString(v) && v !== '';

const ListItemVertical: React.FC<VerticalListItemBase> = (props) => {
  const {
    style,
    title,
    content,
    onPress,
    disabled,
    titleStyle,
    titleWrapperStyle,
    titleSuffix,
    contentStyle,
    extra,
    divider,
  } = props;

  const upArea = (
    <View style={StyleSheet.flatten([styles.titleWrapper, titleWrapperStyle])}>
      <ShouldRender condition={isValidString(title)}>
        <Text
          style={StyleSheet.flatten([
            styles.titleStyle,
            (isValidString(titleSuffix) || isValidElement(titleSuffix)) &&
              styles.hasSuffix,
            titleStyle,
          ])}
        >
          {title}
        </Text>
        <ShouldRender condition={isValidString(titleSuffix)}>
          <Text style={StyleSheet.flatten([styles.titleStyle, titleStyle])}>
            {titleSuffix}
          </Text>
        </ShouldRender>
        <ShouldRender condition={isValidElement(titleSuffix)}>
          {titleSuffix}
        </ShouldRender>
      </ShouldRender>

      <ShouldRender condition={isValidElement(title)}>{title}</ShouldRender>
    </View>
  );

  const downArea = (
    <>
      <ShouldRender condition={isValidString(content)}>
        <Text style={StyleSheet.flatten([styles.contentStyle, contentStyle])}>
          {content}
        </Text>
      </ShouldRender>

      <ShouldRender condition={isValidElement(content)}>{content}</ShouldRender>
    </>
  );

  const handlePress = () => {
    if (!isFunction(onPress)) {
      return;
    }
    onPress();
  };

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        styles.wrapper,
        style,
        disabled && styles.disabled,
      ])}
      // 如果没有onPress事件，则禁用点击效果
      disabled={!isFunction(onPress)}
      onPress={handlePress}
    >
      {upArea}
      {downArea}
      <ShouldRender condition={isValidString(extra)}>
        <Text>{extra}</Text>
      </ShouldRender>
      <ShouldRender condition={isValidElement(extra)}>{extra}</ShouldRender>
      <ShouldRender condition={isBoolean(divider) && divider}>
        <Divider style={styles.divider} />
      </ShouldRender>
      <ShouldRender condition={isValidElement(divider)}>{divider}</ShouldRender>
    </TouchableOpacity>
  );
};

export default ListItemVertical;
