import omit from 'lodash/omit';
import pick from 'lodash/pick';
import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useLocale } from '../../components/Locale/locale';
import PickerView from '../picker-view';
import type { PickerViewProps } from '../picker-view/interface';
import Popup from '../popup';
import Theme from '../theme';

import type { PickerProps } from './interface';
import { varCreator, styleCreator } from './style';

const PICKER_VIEW_PROPS_KEYS = [
  'value',
  'defaultValue',
  'columns',
  'loading',
  'itemHeight',
  'visibleItemCount',
  'onChange',
];

const Picker: React.FC<PickerProps> = ({
  visible,
  title,
  confirmButtonText,
  cancelButtonText,
  toolbarPosition = 'top',
  showToolbar = true,
  onCancel,
  onConfirm,
  headerTitleJSX: propsHeaderTitleJSX,
  popupComponent: propsPopup,

  ...restProps
}) => {
  const locale = useLocale().Picker;
  const TOKENS = Theme.useThemeTokens();
  const CV = Theme.createVar(TOKENS, varCreator);
  // @ts-ignore
  const STYLES = Theme.createStyle(CV, styleCreator);
  const insets = useSafeAreaInsets();

  const headerTitleJSX = propsHeaderTitleJSX ? (
    propsHeaderTitleJSX
  ) : (
    <Popup.Header
      showClose={false}
      title={title}
      leftExtra={
        <Text
          suppressHighlighting
          style={STYLES.cancel_text}
          onPress={restProps.loading ? undefined : onCancel}
        >
          {cancelButtonText ?? locale.cancelButtonText}
        </Text>
      }
      rightExtra={
        <Text
          suppressHighlighting
          style={STYLES.confirm_text}
          onPress={restProps.loading ? undefined : onConfirm}
        >
          {confirmButtonText ?? locale.confirmButtonText}
        </Text>
      }
    />
  );

  const pickerViewProps = pick(
    restProps,
    PICKER_VIEW_PROPS_KEYS
  ) as PickerViewProps;
  const popupProps = omit(restProps, PICKER_VIEW_PROPS_KEYS);

  const PopupComponent = propsPopup || Popup;

  return (
    <PopupComponent {...popupProps} visible={visible} position="bottom" round>
      {showToolbar && toolbarPosition === 'top' ? headerTitleJSX : null}
      <PickerView {...pickerViewProps} />
      {showToolbar && toolbarPosition === 'bottom' ? headerTitleJSX : null}

      <View style={{ height: insets.bottom + CV.picker_bottom_gap }} />
    </PopupComponent>
  );
};

export default memo(Picker);
