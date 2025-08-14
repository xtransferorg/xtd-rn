import React, { useContext, useMemo, useCallback, memo } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { DateData } from './calendars';
import { DayProps } from './calendars/calendar/day';
import { isOutRange } from './utils';
import { CustomDayContextProps } from './interface';
import { createStyle } from './styles/Calendar.style';
import ShouldRender from '../ShouldRender';
import { useTheme } from '../Theme/Theme';

export const CustomDayContext = React.createContext<CustomDayContextProps>({});

type CustomDayProps = DayProps & {
  date?: DateData;
};

interface MemoCustomDayProps extends CustomDayProps {
  context: CustomDayContextProps;
}

function shouldComponentUpdate(
  prevProps: MemoCustomDayProps,
  nextProps: MemoCustomDayProps
) {
  const {
    selectedDate: oldSelectedDate,
    viewYear: oldViewYear,
    viewMonth: oldViewMonth,
    isOpen: oldIsOpen,
    highlightDay: oldHighlightDays,
  } = prevProps.context;
  const { isWeekDay, context, date } = nextProps;
  const {
    days,
    isOpen: newIsOpen,
    disabledWeekLazyUpdate,
    selectedDate: newSelectedDate,
    viewYear: newViewYear,
    viewMonth: newViewMonth,
    markedDays,
    highlightDay: newHighlightDays,
  } = context;

  // 周视图
  if (isWeekDay) {
    if (disabledWeekLazyUpdate) {
      return false;
    }
    return !!newIsOpen;
  }

  const include = days?.some(
    (day) => day.toString('yyyy-MM-dd') === date?.dateString
  );

  // 月份发生变化
  if (oldViewYear !== newViewYear || oldViewMonth !== newViewMonth) {
    return !include;
  }

  // 视图切换后
  if (!oldIsOpen && newIsOpen) {
    return false;
  }

  // 选择日期发生变化
  const needUpdate = [
    oldSelectedDate,
    newSelectedDate,
    oldHighlightDays,
    newHighlightDays,
  ].includes(date?.dateString);

  // 当前日期有事件
  if (markedDays?.includes(date?.dateString as string)) {
    return false;
  }
  return !needUpdate;
}

const CustomDay = memo<MemoCustomDayProps>((props) => {
  const { date, accessibilityLabel, testID, context, onPress, onLongPress } =
    props;
  const themeToken = useTheme();
  const {
    selectedDate,
    today,
    markedDays,
    minDate,
    maxDate,
    viewMonth,
    isOpen,
    highlightDay,
    markedRender,
  } = context;

  const disabled = useMemo(
    () => isOutRange(date?.dateString, minDate, maxDate),
    [date, minDate, maxDate]
  );
  const isShowMarked = useMemo(() => {
    return date && markedDays?.includes(date.dateString);
  }, [markedDays, date]);
  const isCurrentMonth = useMemo(() => {
    return date?.month === viewMonth;
  }, [date, viewMonth]);
  const isOutRangeDate = useMemo(() => {
    return isCurrentMonth && !disabled;
  }, [isCurrentMonth, disabled]);
  const isSelected = useMemo(() => {
    if (highlightDay) {
      return date?.dateString === highlightDay;
    }
    return date?.dateString === selectedDate;
  }, [date, selectedDate]);
  const isToday = useMemo(() => {
    return date?.dateString === today;
  }, [date, today]);
  const onDayPress = useCallback(() => {
    if (!disabled) {
      onPress?.(date);
    }
  }, [disabled, date, onPress]);
  const onDayLongPress = useCallback(() => {
    if (!disabled) {
      onLongPress?.(date);
    }
  }, [disabled, date, onLongPress]);

  const styles = useMemo(() => {
    return createStyle(
      {
        isSelected,
        isToday,
        disabled,
        isCurrentMonth,
        isOpen: !!isOpen,
        isOutRangeDate,
      },
      themeToken
    );
  }, [
    isSelected,
    isToday,
    disabled,
    isCurrentMonth,
    isOpen,
    isOutRangeDate,
    themeToken,
  ]);
  return (
    <TouchableOpacity
      onPress={onDayPress}
      onLongPress={onDayLongPress}
      style={StyleSheet.flatten([styles.dayTouchContainer])}
    >
      <View
        accessibilityLabel={accessibilityLabel}
        testID={testID}
        style={StyleSheet.flatten([styles.dayContainer])}
      >
        <Text style={StyleSheet.flatten([styles.day])}>{date?.day}</Text>
        <ShouldRender condition={!!isShowMarked}>
          {(date && markedRender?.(date)) ?? (
            <View style={StyleSheet.flatten([styles.marked])} />
          )}
        </ShouldRender>
      </View>
    </TouchableOpacity>
  );
}, shouldComponentUpdate);

export const MemoCustomDay = memo<CustomDayProps>((props) => {
  const context = useContext(CustomDayContext);

  return <CustomDay context={context} {...props} />;
});
