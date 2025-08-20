import isNil from 'lodash/isNil';
import React, { memo, isValidElement } from 'react';
import { Text, View, ScrollView, useWindowDimensions } from 'react-native';

import Button from '../button';
import { Divider } from '@xrnjs/ui';
import { useSafeHeight } from '../hooks';
import ModalPopup from '../popup';
import Popup from '../popup/popup';
import PopupHeader from '../popup/popup-header';
import Theme from '../theme';

import type { ActionSheetProps } from './interface';
import { varCreator, styleCreator } from './style';

/**
 * ActionSheet 动作面板
 * @description 底部弹起的模态面板，包含与当前情境相关的多个选项。
 */
const ActionSheet: React.FC<ActionSheetProps> = ({
  title,
  actions,
  onCancel,
  onSelect,
  cancelText,
  description,
  round = true,
  safeAreaInsetTop,
  useNative = true,
  ...restProps
}) => {
  const { height } = useWindowDimensions();
  const safeHeight = useSafeHeight({ top: safeAreaInsetTop || height * 0.15 });
  const TOKENS = Theme.useThemeTokens();
  const CV = Theme.createVar(TOKENS, varCreator);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);
  const isTitleDef = !isNil(title);
  const isCancelTextDef = !isNil(cancelText);
  const isDescriptionDef = !isNil(description);

  /** 描述文案 纯文字或自定义 JSX */
  const descriptionJSX = isDescriptionDef ? (
    isValidElement(description) ? (
      description
    ) : (
      <>
        <Text
          style={[
            STYLES.description,
            isTitleDef ? null : STYLES.description_alone,
          ]}
          numberOfLines={1}
        >
          {description}
        </Text>
        <Divider />
      </>
    )
  ) : null;

  const Component = useNative ? ModalPopup : Popup;

  return (
    <Component
      {...restProps}
      safeAreaInsetBottom
      position="bottom"
      round={round}
    >
      <View style={{ maxHeight: safeHeight }}>
        {isTitleDef ? <PopupHeader title={title} showClose={false} /> : null}
        {descriptionJSX}

        <ScrollView bounces={false}>
          {actions.map((item, index) => {
            const defaultColor = item.disabled ? '#cccccc' : '#222222';
            return (
              <View key={`${item.name}_${index}`} style={STYLES.button_wrapper}>
                <Button
                  text={item.name}
                  subtext={item.description}
                  disabled={item.disabled}
                  loading={item.loading}
                  color={item.color || defaultColor}
                  type="link"
                  size="xl"
                  textStyle={STYLES.button_text}
                  onPress={() => {
                    if (!item.disabled && !item.loading) {
                      item.callback?.();
                      onSelect?.(item, index);
                    }
                  }}
                />
                {
                  // 最后一个选项不显示分割线
                  index === actions.length - 1 ? null : <Divider />
                }
              </View>
            );
          })}
        </ScrollView>

        {isCancelTextDef ? (
          <>
            <View style={STYLES.gap} />
            <Button
              text={cancelText}
              type="link"
              size="xl"
              color={CV.action_sheet_text_color}
              textStyle={STYLES.button_text}
              onPress={onCancel}
            />
          </>
        ) : null}
      </View>
    </Component>
  );
};

export default memo(ActionSheet);
