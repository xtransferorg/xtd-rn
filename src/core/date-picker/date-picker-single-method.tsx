import omit from 'lodash/omit';
import pick from 'lodash/pick';
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
  useMemo,
} from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import DatePickerView from '../date-picker-view';
import type { DatePickerViewProps } from '../date-picker-view/interface';
import { callInterceptor } from '../helpers';
import { usePersistFn } from '../hooks';
import { useLocale } from '../../components/Locale/locale';
import { varCreator as varCreatorPicker } from '../picker/style';
import Popup from '../popup';
import Theme from '../theme';
import { Button, Fill } from '@xrnjs/ui';

import type {
  DatePickerSingleMethodProps,
  DatePickerAction,
} from './interface';
import PopupHeader from '../../components/Popup/PopupHeader';

const DATE_PICKER_VIEW_PROPS_KEYS = [
  'defaultValue',
  'mode',
  'min',
  'max',
  'renderLabel',
];

const DatePickerSingleMethod: React.FC<DatePickerSingleMethodProps> = ({
  title,
  confirmButtonText,
  cancelable = false,
  cancelButtonText,
  onCancel,
  onConfirm,
  onPressOverlay,
  beforeClose,
  CustomHeader,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens();
  const CV_PICKER = Theme.createVar(TOKENS, varCreatorPicker);

  const btnStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      flexDirection: 'row',
      paddingHorizontal: CV_PICKER.picker_bottom_gap,
    }),
    [CV_PICKER.picker_bottom_gap]
  );

  const cancelBtnStyle = useMemo(
    () => ({
      flex: 1,
      marginRight: CV_PICKER.picker_bottom_buttom_margin_right,
    }),
    [CV_PICKER.picker_bottom_buttom_margin_right]
  );

  const confirmBtnStyle = { flex: 1 };

  const locale = useLocale().DatePickerRangeView;
  const insets = useSafeAreaInsets();

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const Value = useRef<Date>(restProps.defaultValue || new Date());

  useEffect(() => {
    setVisible(true);
  }, []);

  const onChange = useCallback((v: Date) => {
    Value.current = v;
  }, []);

  const doAction = usePersistFn((action: DatePickerAction) => {
    setLoading(true);

    callInterceptor(beforeClose, {
      args: [action, Value.current],
      done: () => {
        switch (action) {
          case 'cancel':
            onCancel?.(Value.current);
            break;
          case 'confirm':
            onConfirm?.(Value.current);
            break;
          case 'overlay':
            onPressOverlay?.(Value.current);
            break;
          default:
            break;
        }

        setLoading(false);
        setVisible(false);
      },
      canceled: () => {
        setLoading(false);
      },
    });
  });

  const onPressCancel = useCallback(() => {
    doAction('cancel');
  }, [doAction]);

  const onPressConfirm = useCallback(() => {
    doAction('confirm');
  }, [doAction]);

  const onPressPopupOverlay = useCallback(() => {
    doAction('overlay');
  }, [doAction]);

  const onRequestClose = useCallback(() => {
    onPressPopupOverlay();
    return true;
  }, [onPressPopupOverlay]);

  const dataPickerViewProps = pick(
    restProps,
    DATE_PICKER_VIEW_PROPS_KEYS
  ) as DatePickerViewProps;
  const popupProps = omit(restProps, DATE_PICKER_VIEW_PROPS_KEYS);
  return (
    <Popup
      {...popupProps}
      onRequestClose={onRequestClose}
      visible={visible}
      onPressOverlay={onPressPopupOverlay}
      position="bottom"
      round
    >
      <PopupHeader
        onCancel={onPressCancel}
        onConfirm={onPressConfirm}
        title={title}
        confirmButtonText={confirmButtonText}
        cancelButtonText={cancelButtonText}
        {...CustomHeader}
      />
      <DatePickerView
        {...dataPickerViewProps}
        loading={loading}
        onChange={onChange}
      />

      <View style={btnStyle}>
        {cancelable && (
          <Button
            style={cancelBtnStyle}
            fill={Fill.weak}
            loading={loading}
            onPress={onPressCancel}
          >
            {cancelButtonText ?? locale.resetButtonText}
          </Button>
        )}

        <Button
          style={confirmBtnStyle}
          loading={loading}
          onPress={onPressConfirm}
        >
          {confirmButtonText ?? locale.confirmButtonText}
        </Button>
      </View>

      <View style={{ height: insets.bottom + CV_PICKER.picker_bottom_gap }} />
    </Popup>
  );
};

export default memo(DatePickerSingleMethod);
