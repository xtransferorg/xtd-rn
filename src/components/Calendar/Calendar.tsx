import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import {
  CalendarInstance,
  CalendarProps,
  CustomDayContextProps,
} from './interface';
import {
  ExpandableCalendar,
  CalendarProvider,
  DateData,
  LocaleConfig,
} from './calendars';
import { StyleSheet, View } from 'react-native';
import { Positions } from './calendars/expandableCalendar';
import { Direction } from './calendars/types';
import { createHeaderStyle } from './styles/Calendar.style';
import { xdateToData } from './calendars/interface';
import { isOutRange } from './utils';
import { formatter } from './constant';
import { CustomDayContext, MemoCustomDay } from './Day';
import { Header } from './Header';
import { page } from './calendars/dateutils';
import merge from 'lodash/merge';
import dayjs from 'dayjs';
import Locale from '../Locale';
import XDate from 'xdate';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-hk';
import 'dayjs/locale/en';
import { useTheme } from '../Theme/Theme';
import { BOLD } from '../../common/weight';

const Calendar = forwardRef<CalendarInstance, CalendarProps>((props, ref) => {
  const { hideHeader = false } = props;
  const themeToken = useTheme();
  const styles = createHeaderStyle(themeToken);
  const {
    value,
    defaultValue,
    markedDays,
    markedRender,
    currentDay = dayjs().format(formatter),
    minDate,
    maxDate,
    onSelect,
    locale,
    arrowContainer,
    showSixWeeks = false,
    disabledWeekLazyUpdate = false,
    firstDay,
    openThreshold = 100,
    closeThreshold = 100,
    theme = {
      calendarBackground: themeToken['--color-bg-1'],
      hideHeader,
      headerHeight: 44,
      knob: {
        backgroundColor: themeToken['--color-bg-1'],
      },
      textSectionTitleColor: themeToken['--color-text-6'],
      textDayHeaderFontSize: themeToken['--font-size-1'],
      textDayHeaderFontWeight: BOLD,
    },
    initialPosition = Positions.OPEN,
    headerSize = 36,
    highlightDay,
    onMonthChange: onOutMonthChange,
    onCalendarToggled: onOutCalendarToggled,
    onHeaderTouch,
    renderHeaderLeft,
    renderHeaderRight,
    ...others
  } = props;

  const lang = Locale.useLangType();
  const { Calendar: CalendarLocale } = Locale.getLocale(lang);
  LocaleConfig.locales[lang] = merge(CalendarLocale, locale);
  LocaleConfig.defaultLocale = lang;

  const [current, setCurrent] = useState(value ?? defaultValue);
  const [viewCurrent, setViewCurrent] = useState(dayjs(current)); // 可视区域的日期
  const [position, setPosition] = useState(initialPosition);

  const dayContextValue = useMemo<CustomDayContextProps>(() => {
    const month = dayjs(viewCurrent).month() + 1;
    const year = dayjs(viewCurrent).year();
    return {
      selectedDate: current,
      today: currentDay,
      viewMonth: month,
      viewYear: year,
      days: page(
        new XDate(viewCurrent.format(formatter)),
        firstDay,
        showSixWeeks
      ),
      isOpen: position === Positions.OPEN,
      minDate,
      maxDate,
      disabledWeekLazyUpdate,
      markedDays,
      highlightDay,
      markedRender,
    };
  }, [
    current,
    currentDay,
    markedDays,
    viewCurrent,
    position,
    showSixWeeks,
    firstDay,
    disabledWeekLazyUpdate,
    minDate,
    maxDate,
    highlightDay,
    markedRender,
  ]);

  useEffect(() => {
    if (value && value !== current && !isOutRange(value, minDate, maxDate)) {
      setCurrent(value);
      setViewCurrent(dayjs(value));
    }
  }, [
    value,
    current,
    minDate,
    maxDate,
    viewCurrent,
    setCurrent,
    setViewCurrent,
  ]);

  useImperativeHandle(ref, () => {
    return {};
  });

  const onPress = useCallback(
    (date?: DateData) => {
      if (date) {
        setCurrent(date.dateString);
        onSelect?.(date);
        setViewCurrent(dayjs(date.dateString));
      }
    },
    [viewCurrent, onSelect, setCurrent, setViewCurrent]
  );

  const onMonthChange = useCallback(
    (date: DateData) => {
      setViewCurrent(dayjs(date.dateString));
      onOutMonthChange?.(date);
    },
    [setViewCurrent, onOutMonthChange]
  );

  const onCalendarToggled = useCallback(
    (isOpen: boolean) => {
      setPosition(isOpen ? Positions.OPEN : Positions.CLOSED);
      onOutCalendarToggled?.(isOpen);
    },
    [setPosition, onOutCalendarToggled]
  );

  const renderArrow = useCallback(
    (direction: Direction) => {
      return (
        <View
          style={StyleSheet.flatten([
            {
              width: headerSize,
            },
            styles.arrowContainer,
            arrowContainer,
          ])}
        >
          {direction === 'left'
            ? renderHeaderLeft?.(xdateToData(viewCurrent.format(formatter)))
            : renderHeaderRight?.(xdateToData(viewCurrent.format(formatter)))}
        </View>
      );
    },
    [
      viewCurrent,
      arrowContainer,
      styles,
      headerSize,
      renderHeaderLeft,
      renderHeaderRight,
    ]
  );

  return (
    <CalendarProvider date={current || currentDay}>
      <CustomDayContext.Provider value={dayContextValue}>
        <ExpandableCalendar
          theme={theme}
          dayComponent={MemoCustomDay}
          onDayPress={onPress}
          closeOnDayPress={false}
          initialPosition={position}
          // weekHeight + header
          constantClosedHeight={50 + (hideHeader ? 34 : 78)}
          constantWeekHeight={50}
          headerStyle={styles.headerOverrideStyle}
          disableArrowLeft
          disableArrowRight
          disableWeekScroll
          firstDay={firstDay}
          showSixWeeks={showSixWeeks}
          openThreshold={openThreshold}
          closeThreshold={closeThreshold}
          allowShadow={false}
          customHeaderTitle={
            <Header date={viewCurrent} onHeaderTouch={onHeaderTouch} />
          }
          onMonthChange={onMonthChange}
          onCalendarToggled={onCalendarToggled}
          renderArrow={renderArrow}
          {...others}
        />
      </CustomDayContext.Provider>
    </CalendarProvider>
  );
});

export default Calendar;
