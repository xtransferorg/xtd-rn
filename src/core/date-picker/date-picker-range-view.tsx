import isNil from 'lodash/isNil';
import React, { useMemo, useRef, useState, useEffect, memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Button, Fill } from '@xrnjs/ui';
import { varCreator as varCreatorButton } from '../button/style';
import Col from '../col';
import DatePickerView from '../date-picker-view';
import { formatDate } from '../date-picker-view/helper';
import useDateMinMax from '../date-picker-view/useDateMinMax';
import { useControllableValue } from 'ahooks';
import { useLangType, useLocale } from '../../components/Locale/locale';
import {
  varCreator as varCreatorPicker,
  styleCreator as styleCreatorPicker,
} from '../picker/style';
import Row from '../row';
import Theme from '../theme';

import type {
  DatePickerRangeViewProps,
  DatePickerRangeValue,
} from './interface';
import { usePersistFn } from '../hooks';

const defaultInitialValue: DatePickerRangeValue = [null, null];

const getRightDate = (v: Date, min: Date, max: Date) => {
  if (v.getTime() < min.getTime()) {
    return min;
  }

  if (v.getTime() > max.getTime()) {
    return max;
  }

  return v;
};

const DatePickerRangeView: React.FC<DatePickerRangeViewProps> = ({
  initialValue,
  confirmButtonText,
  resetButtonText,
  onConfirm,
  placeholder,
  clearable,
  onClear,
  clearButtonText,

  // DateView
  mode = 'Y-D',
  min,
  max,
  renderLabel,
  loading,

  testID,
  ...restProps
}) => {
  const _initialValue = !isNil(initialValue)
    ? initialValue
    : defaultInitialValue;
  const locale = useLocale().DatePickerRangeView;
  const lang = useLangType();
  const TOKENS = Theme.useThemeTokens();
  const CV_BUTTON = Theme.createVar(TOKENS, varCreatorButton);
  const CV_PICKER = Theme.createVar(TOKENS, varCreatorPicker);
  // @ts-ignore
  const STYLES_PICKER = Theme.createStyle(CV_PICKER, styleCreatorPicker);
  const btnStyle = useMemo(
    () => ({
      paddingHorizontal: CV_PICKER.picker_action_gap,
    }),
    [CV_PICKER.picker_action_gap]
  );

  const [value, onChange] = useControllableValue<DatePickerRangeValue>(
    restProps,
    {
      defaultValue: [..._initialValue],
    }
  );
  const [minDateS, maxDateS] = useDateMinMax(mode, min, value[1] || max);
  const [minDateE, maxDateE] = useDateMinMax(mode, value[0] || min, max);
  const currentDate = useMemo(() => new Date(), []);

  const [dayActive, setDayActive] = useState<0 | 1>(0);
  const Values = useRef<DatePickerRangeValue>([...value]);
  const OriginalValues = useRef<DatePickerRangeValue>([..._initialValue]);
  const [limitDates, setLimitDates] = useState<DatePickerRangeValue>([
    min as Date,
    Values.current[1] || (max as Date),
  ]);

  // 同步 value，避免外部 value 清空后，触发 onChangePickView 的时候把旧数据带出来
  useEffect(() => {
    Values.current = [...value];
  }, [value]);

  const onChangePickView = usePersistFn((v: Date) => {
    Values.current[dayActive] = v;
    onChange([...Values.current]);
  });

  const onPressConfirm = usePersistFn(() => {
    onConfirm?.(Values.current);
  });
  const onPressClear = usePersistFn(() => {
    onClear?.(Values.current);
  });

  const onPressDay1 = usePersistFn(() => {
    // 切换的时候没有滚动时间做默认选择
    if (!Values.current[0]) {
      Values.current[0] = getRightDate(currentDate, minDateE, maxDateE);
      onChange([...Values.current]);
    }

    setDayActive(0);
    setLimitDates([min as Date, Values.current[1] || (max as Date)]);
  });

  const onPressDay2 = usePersistFn(() => {
    // 切换的时候没有滚动时间做默认选择
    if (!Values.current[1]) {
      Values.current[1] = getRightDate(
        Values.current[0] || new Date(),
        minDateS as Date,
        maxDateS as Date
      );
      onChange([...Values.current]);
    }

    setDayActive(1);
    setLimitDates([Values.current[0] || (min as Date), max as Date]);
  });

  const onPressReset = usePersistFn(() => {
    Values.current = [...OriginalValues.current];

    onChange([...Values.current]);

    // 最大最小时间使用了 useMemo，等数据重新计算好后再回到开始时间
    setTimeout(() => {
      onPressDay1();
    }, 0);
  });

  // 把开时间提前锁定
  useEffect(() => {
    onPressDay1();
  }, [onPressDay1]);

  return (
    <>
      <View style={STYLES_PICKER.data_range} testID={testID}>
        <TouchableOpacity
          style={STYLES_PICKER.data_range_item}
          onPress={onPressDay1}
          activeOpacity={CV_BUTTON.button_active_opacity}
        >
          <Text style={STYLES_PICKER.data_range_text}>
            {locale.labelStartTime}
          </Text>
          <Text
            style={[
              STYLES_PICKER.data_range_day,
              dayActive === 0 ? STYLES_PICKER.data_range_day_active : null,
            ]}
          >
            {value[0]
              ? formatDate(mode, value[0], lang)
              : placeholder?.[0] ?? locale.placeholder[0]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={STYLES_PICKER.data_range_item}
          onPress={onPressDay2}
          activeOpacity={CV_BUTTON.button_active_opacity}
        >
          <Text style={STYLES_PICKER.data_range_text}>
            {locale.labelEndTime}
          </Text>
          <Text
            style={[
              STYLES_PICKER.data_range_day,
              dayActive === 1 ? STYLES_PICKER.data_range_day_active : null,
            ]}
          >
            {value[1]
              ? formatDate(mode, value[1], lang)
              : placeholder?.[1] ?? locale.placeholder[1]}
          </Text>
        </TouchableOpacity>
      </View>

      <DatePickerView
        mode={mode}
        value={value[dayActive] || currentDate}
        renderLabel={renderLabel}
        onChange={onChangePickView}
        min={limitDates[0] as Date}
        max={limitDates[1] as Date}
        loading={loading}
      />

      <Row gap={CV_PICKER.picker_action_gap} style={btnStyle}>
        {clearable ? (
          <Col span={8}>
            <Button fill={Fill.weak} loading={loading} onPress={onPressClear}>
              {clearButtonText ?? locale.clearButtonText}
            </Button>
          </Col>
        ) : null}

        <Col span={clearable ? 8 : 12}>
          <Button fill={Fill.outline} loading={loading} onPress={onPressReset}>
            {resetButtonText ?? locale.resetButtonText}
          </Button>
        </Col>

        <Col span={clearable ? 8 : 12}>
          <Button loading={loading} onPress={onPressConfirm}>
            {confirmButtonText ?? locale.confirmButtonText}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default memo(DatePickerRangeView);
