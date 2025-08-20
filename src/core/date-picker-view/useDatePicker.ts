import { useMemo } from 'react';

import { usePersistFn } from '../hooks';
import { useLangType, useLocale } from '../../components/Locale/locale';
import type { PickerOption, PickerValue } from '../picker-view/interface';

import {
  COLUMN_SERIALIZE_TYPES,
  serializeMode,
  getMonthDays,
  toDateObject,
  getDateBoundary,
  COLUMN_SERIALIZE_TYPES_EN_US,
  COLUMN_SERIALIZE_TYPES_EN_UK,
  ModesMap,
} from './helper';
import type {
  DatePickerColumnMode,
  DatePickerColumnType,
  RenderLabel,
} from './interface';
import useDateMinMax from './useDateMinMax';
import { LangType } from '../../components/Locale/enum';

export interface UseDatePickerOption {
  mode: DatePickerColumnMode;
  value: Date;
  onChange: (value: Date) => void;
  min?: Date;
  max?: Date;
  renderLabel?: RenderLabel;
}

type ColumnItem = PickerOption[];
type Columns = ColumnItem[];
type Values = number[];

const buildColumnData = (
  mode: DatePickerColumnType,
  start: number,
  end: number,
  renderLabel: RenderLabel
  // eslint-disable-next-line max-params
) => {
  const items: PickerOption[] = [];
  for (let index = start; index <= end; index++) {
    items.push({
      value: index,
      label: renderLabel(mode, index),
    });
  }
  return items;
};

const useDatePicker = ({
  mode,
  value,
  onChange,
  min,
  max,
  renderLabel,
}: UseDatePickerOption) => {
  const { DatePickerView: locale, Calendar } = useLocale();
  const lang = useLangType();

  const oldModes = useMemo(
    () => serializeMode(mode.split('-') as DatePickerColumnType[], lang),
    [mode]
  );

  if (lang === LangType.en_US) {
    const modeUs = ModesMap[mode];
    if (modeUs) {
      mode = modeUs;
    }
  }

  const modes = useMemo(
    () => serializeMode(mode.split('-') as DatePickerColumnType[], lang),
    [mode]
  );
  const [minDate, maxDate] = useDateMinMax(mode, min, max);
  const renderLabelPersistFn: RenderLabel = usePersistFn((t, n) => {
    if (renderLabel) {
      return renderLabel(t, n);
    }

    switch (t) {
      case 'Y':
        return lang === LangType.en_US ? `${n}` : `${n}${locale.labelYear}`;
      case 'M':
        return lang === LangType.en_US
          ? `${Calendar.monthNamesShort[n - 1]}`
          : `${n}${locale.labelMonth}`;
      case 'D':
        return lang === LangType.en_US ? `${n}` : `${n}${locale.labelDay}`;
      case 'h':
        return lang === LangType.en_US ? `${n}` : `${n}${locale.labelHour}`;
      case 'm':
        return lang === LangType.en_US ? `${n}` : `${n}${locale.labelMinute}`;
      case 's':
        return lang === LangType.en_US ? `${n}` : `${n}${locale.labelSecond}`;

      default:
        return `${n}`;
    }
  });
  const [pickerValues, pickerColumns] = useMemo<[Values, Columns]>(() => {
    const _columns: Columns = [];
    const _values: Values = [];

    const boundary = getDateBoundary(value, oldModes, {
      defaultMin: minDate,
      defaultMax: maxDate,
      min,
      max,
    });
    const valueDateObject = toDateObject(value);

    let COLUMN_SERIALIZE: DatePickerColumnType[] = [];
    switch (lang) {
      case LangType.en_US:
        COLUMN_SERIALIZE = COLUMN_SERIALIZE_TYPES_EN_US;
        break;
      case LangType.en_UK:
        COLUMN_SERIALIZE = COLUMN_SERIALIZE_TYPES_EN_UK;
        break;
      default:
        COLUMN_SERIALIZE = COLUMN_SERIALIZE_TYPES;
        break;
    }

    // 根据格式化方式挑选值
    COLUMN_SERIALIZE.forEach((key) => {
      const ab = boundary[key];
      const a = key === 'M' ? ab[0] + 1 : ab[0];
      const b = key === 'M' ? ab[1] + 1 : ab[1];
      const v = key === 'M' ? valueDateObject[key] + 1 : valueDateObject[key];

      _values.push(v);
      _columns.push(buildColumnData(key, a, b, renderLabelPersistFn));
    });

    // 挑选值
    const _pickerColumns: Columns = [];
    const _pickerValues: Values = [];
    modes.forEach((key) => {
      const keyIndex = COLUMN_SERIALIZE.findIndex((cst) => cst === key);
      _pickerColumns.push(_columns[keyIndex as number] as ColumnItem);
      _pickerValues.push(_values[keyIndex as number] as number);
    });

    return [_pickerValues, _pickerColumns];
  }, [
    max,
    maxDate,
    min,
    minDate,
    modes,
    oldModes,
    renderLabelPersistFn,
    value,
  ]);

  const onChangePicker = usePersistFn((v: PickerValue[]) => {
    // console.log('values  =>>>>   ', v)

    const newValue = new Date(value);
    modes.forEach((key, index) => {
      const num = v[index] as number;
      switch (key) {
        case 'Y':
          newValue.setFullYear(num);
          break;
        case 'M': {
          // 对 D 进行修正
          const days = getMonthDays(newValue.getFullYear(), num);
          const valueDays = newValue.getDate();
          newValue.setMonth(num - 1, valueDays > days ? days : valueDays);
          break;
        }
        case 'D': {
          // 对 D 进行修正
          const days = getMonthDays(
            newValue.getFullYear(),
            newValue.getMonth() + 1
          );

          newValue.setDate(num > days ? days : num);
          break;
        }
        case 'h':
          newValue.setHours(num);
          break;
        case 'm':
          newValue.setMinutes(num);
          break;
        case 's':
          newValue.setSeconds(num);
          break;
        default:
          break;
      }
    });

    // console.log('newValue？？？？   =>   ', toDateObject(newValue))

    // // 最后边界值判断
    // const _minDate = isDate(min) ? min : defaultMinDate
    // const _maxDate = isDate(max) ? max : defaultMaxDate

    const finallyValue =
      newValue.getTime() >= (minDate as Date).getTime() &&
      newValue.getTime() <= (maxDate as Date).getTime()
        ? newValue
        : newValue.getTime() < (minDate as Date).getTime()
        ? minDate
        : maxDate;

    // console.log('_minDate   =>   ', toDateObject(_minDate))
    // console.log('_maxDate   =>   ', toDateObject(_maxDate))
    // console.log('newValue   =>   ', toDateObject(newValue))
    // console.log('_minDate  t   =>   ', _minDate.getTime())
    // console.log('_maxDate  t   =>   ', _maxDate.getTime())
    // console.log('newValue  t   =>   ', newValue.getTime())
    // console.log('finallyValue   =>   ', toDateObject(finallyValue))
    // console.log(
    //   newValue.getTime() >= _minDate.getTime() &&
    //     newValue.getTime() <= _maxDate.getTime(),
    // )
    // console.log(newValue.getTime() < _minDate.getTime())
    // console.log('finallyValue   =>>>> ', finallyValue.toString())
    // console.log('finallyValue   =========>>>>>>>>>>>>>>>>>>>>>>>>>')

    onChange(finallyValue as Date);
  });

  return [
    pickerValues,
    pickerColumns,
    onChangePicker,
    minDate,
    maxDate,
  ] as const;
};

export default useDatePicker;
