import PropTypes from 'prop-types';
import XDate from 'xdate';
import isEmpty from 'lodash/isEmpty';
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import GestureRecognizer, {
  // @ts-expect-error
  swipeDirections,
} from 'react-native-swipe-gestures';

import constants from '../commons/constants';
import { page, isGTE, isLTE, sameMonth } from '../dateutils';
import { xdateToData, parseDate, toMarkingFormat } from '../interface';
import { getState } from '../day-state-manager';
import { extractHeaderProps, extractDayProps } from '../componentUpdater';
import { DateData, Theme, MarkedDates, ContextProp } from '../types';
import { useDidUpdate } from '../hooks';
import styleConstructor from './style';
import CalendarHeader, { CalendarHeaderProps } from './header';
import Day, { DayProps } from './day/index';
import BasicDay from './day/basic';

export interface CalendarProps extends CalendarHeaderProps, DayProps {
  /**
   * 指定主题属性以覆盖日历部分的特定样式
   */
  theme?: Theme;
  /**
   * 如果firstDay=1 周从星期一开始。请注意，dayNames 和 dayNamesShort 仍应从星期日开始
   */
  firstDay?: number;
  /**
   * 显示加载指示器
   */
  displayLoadingIndicator?: boolean;
  /**
   * 显示周数
   */
  showWeekNumbers?: boolean;
  /**
   * 指定日历容器元素的样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 不推荐使用
   */
  current?: string; // TODO: migrate to 'initialDate'
  /**
   * 最初可见的月份。如果更改，会将日历初始化为此值
   */
  initialDate?: string;
  /**
   * 可以选择的最小日期，在minDate之前的日期将显示为灰色
   */
  minDate?: string;
  /**
   * 可以选择的最大日期，maxDate之后的日期将显示为灰色
   */
  maxDate?: string;
  /**
   * 必须标记的日期集合
   */
  markedDates?: MarkedDates;
  /**
   * 月份页面不显示其他月份的天数
   */
  hideExtraDays?: boolean;
  /**
   * 每月始终显示六周（仅当 hideExtraDays = false 时）
   */
  showSixWeeks?: boolean;
  /**
   * 在当天按下时执行的处理程序
   */
  onDayPress?: (date: DateData) => void;
  /**
   * 长按一天时执行的处理程序
   */
  onDayLongPress?: (date: DateData) => void;
  /**
   * 当日历中的月份发生变化时执行的处理程序
   */
  onMonthChange?: (date: DateData) => void;
  /**
   * 当日历中可见月份发生变化时执行的处理程序
   */
  onVisibleMonthsChange?: (months: DateData[]) => void;
  /**
   * 单击其他月份的日期时禁用更改月份（当 hideExtraDays 为 false 时）
   */
  disableMonthChange?: boolean;
  /**
   * 启用在月份之间滑动的选项
   */
  enableSwipeMonths?: boolean;
  /**
   * Disable days by default
   */
  disabledByDefault?: boolean;
  /**
   * 样式传递到标题
   */
  headerStyle?: StyleProp<ViewStyle>;
  /**
   * 允许渲染完全自定义的标头
   */
  customHeader?: any;
  /**
   * 允许在minDate之前或maxDate之后选择日期
   */
  allowSelectionOutOfRange?: boolean;
}

/**
 * @description: Calendar component
 * @example: https://github.com/wix/react-native-calendars/blob/master/example/src/screens/calendars.js
 * @gif: https://github.com/wix/react-native-calendars/blob/master/demo/assets/calendar.gif
 */
const Calendar = (props: CalendarProps & ContextProp) => {
  const {
    initialDate,
    current,
    theme,
    markedDates,
    minDate,
    maxDate,
    allowSelectionOutOfRange,
    onDayPress,
    onDayLongPress,
    onMonthChange,
    onVisibleMonthsChange,
    disableMonthChange,
    enableSwipeMonths,
    hideExtraDays,
    firstDay,
    showSixWeeks,
    displayLoadingIndicator,
    customHeader,
    headerStyle,
    accessibilityElementsHidden,
    importantForAccessibility,
    testID,
    style: propsStyle,
  } = props;
  const [currentMonth, setCurrentMonth] = useState(
    current || initialDate ? parseDate(current || initialDate) : new XDate()
  );
  const style = useRef(styleConstructor(theme));
  const header = useRef();
  const weekNumberMarking = useRef({ disabled: true, disableTouchEvent: true });

  useEffect(() => {
    if (initialDate) {
      setCurrentMonth(parseDate(initialDate));
    }
  }, [initialDate]);

  useDidUpdate(() => {
    const _currentMonth = currentMonth!.clone();
    onMonthChange?.(xdateToData(_currentMonth));
    onVisibleMonthsChange?.([xdateToData(_currentMonth)]);
  }, [currentMonth]);

  const updateMonth = useCallback(
    (newMonth: XDate) => {
      if (sameMonth(newMonth, currentMonth)) {
        return;
      }
      setCurrentMonth(newMonth);
    },
    [currentMonth]
  );

  const addMonth = useCallback(
    (count: number) => {
      const newMonth = currentMonth!.clone().addMonths(count, true);
      updateMonth(newMonth);
    },
    [currentMonth, updateMonth]
  );

  const handleDayInteraction = useCallback(
    (date: DateData, interaction?: (date: DateData) => void) => {
      const day = new XDate(date.dateString);

      if (
        allowSelectionOutOfRange ||
        (!(minDate && !isGTE(day, new XDate(minDate))) &&
          !(maxDate && !isLTE(day, new XDate(maxDate))))
      ) {
        if (!disableMonthChange) {
          updateMonth(day);
        }
        if (interaction) {
          interaction(date);
        }
      }
    },
    [
      minDate,
      maxDate,
      allowSelectionOutOfRange,
      disableMonthChange,
      updateMonth,
    ]
  );

  const _onDayPress = useCallback(
    (date?: DateData) => {
      if (date) handleDayInteraction(date, onDayPress);
    },
    [handleDayInteraction, onDayPress]
  );

  const onLongPressDay = useCallback(
    (date?: DateData) => {
      if (date) handleDayInteraction(date, onDayLongPress);
    },
    [handleDayInteraction, onDayLongPress]
  );

  const onSwipeLeft = useCallback(() => {
    // @ts-expect-error
    header.current?.onPressRight();
  }, [header]);

  const onSwipeRight = useCallback(() => {
    // @ts-expect-error
    header.current?.onPressLeft();
  }, [header]);

  const onSwipe = useCallback(
    (gestureName: string) => {
      const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

      switch (gestureName) {
        case SWIPE_UP:
        case SWIPE_DOWN:
          break;
        case SWIPE_LEFT:
          constants.isRTL ? onSwipeRight() : onSwipeLeft();
          break;
        case SWIPE_RIGHT:
          constants.isRTL ? onSwipeLeft() : onSwipeRight();
          break;
      }
    },
    [onSwipeLeft, onSwipeRight]
  );

  const renderWeekNumber = (weekNumber: number) => {
    return (
      <View
        style={style.current.dayContainer}
        key={`week-container-${weekNumber}`}
      >
        <BasicDay
          key={`week-${weekNumber}`}
          marking={weekNumberMarking.current}
          // state='disabled'
          theme={theme}
          testID={`${testID}.weekNumber_${weekNumber}`}
        >
          {weekNumber}
        </BasicDay>
      </View>
    );
  };

  const renderDay = (day: XDate, id: number) => {
    const dayProps = extractDayProps(props);

    if (!sameMonth(day, currentMonth) && hideExtraDays) {
      return <View key={id} style={style.current.emptyDayContainer} />;
    }

    const dateString = toMarkingFormat(day);
    const isControlled = isEmpty(props.context);

    return (
      <View style={style.current.dayContainer} key={id}>
        <Day
          {...dayProps}
          testID={`${testID}.day_${dateString}`}
          date={dateString}
          state={getState(day, currentMonth!, props, isControlled)}
          marking={markedDates?.[dateString]}
          onPress={_onDayPress}
          onLongPress={onLongPressDay}
        />
      </View>
    );
  };

  const renderWeek = (days: XDate[], id: number) => {
    const week: JSX.Element[] = [];

    days.forEach((day: XDate, id2: number) => {
      week.push(renderDay(day, id2));
    }, this);

    if (props.showWeekNumbers) {
      // @ts-ignore
      week.unshift(renderWeekNumber(days[days.length - 1].getWeek()));
    }

    return (
      <View style={style.current.week} key={id}>
        {week}
      </View>
    );
  };

  const renderMonth = () => {
    const shouldShowSixWeeks = showSixWeeks && !hideExtraDays;
    const days = page(currentMonth!, firstDay, shouldShowSixWeeks);
    const weeks: JSX.Element[] = [];

    while (days.length) {
      weeks.push(renderWeek(days.splice(0, 7), weeks.length));
    }

    return <View style={style.current.monthView}>{weeks}</View>;
  };

  const shouldDisplayIndicator = useMemo(() => {
    if (currentMonth) {
      const lastMonthOfDay = toMarkingFormat(
        currentMonth.clone().addMonths(1, true).setDate(1).addDays(-1)
      );
      if (displayLoadingIndicator && !markedDates?.[lastMonthOfDay]) {
        return true;
      }
    }
    return false;
  }, [currentMonth, displayLoadingIndicator, markedDates]);

  const renderHeader = () => {
    const headerProps = extractHeaderProps(props);
    const ref = customHeader ? undefined : header;
    const CustomHeader = customHeader;
    const HeaderComponent = customHeader ? CustomHeader : CalendarHeader;

    return (
      <HeaderComponent
        {...headerProps}
        testID={`${testID}.header`}
        style={headerStyle}
        ref={ref}
        month={currentMonth}
        addMonth={addMonth}
        displayLoadingIndicator={shouldDisplayIndicator}
      />
    );
  };

  const GestureComponent = enableSwipeMonths ? GestureRecognizer : View;
  const swipeProps = {
    onSwipe: (direction: string) => onSwipe(direction),
  };
  const gestureProps = enableSwipeMonths ? swipeProps : undefined;

  return (
    <GestureComponent {...gestureProps}>
      <View
        style={[style.current.container, propsStyle]}
        testID={testID}
        accessibilityElementsHidden={accessibilityElementsHidden} // iOS
        importantForAccessibility={importantForAccessibility} // Android
      >
        {renderHeader()}
        {renderMonth()}
      </View>
    </GestureComponent>
  );
};

export default Calendar;
Calendar.displayName = 'Calendar';
Calendar.propTypes = {
  ...CalendarHeader.propTypes,
  ...Day.propTypes,
  theme: PropTypes.object,
  firstDay: PropTypes.number,
  displayLoadingIndicator: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  current: PropTypes.string,
  initialDate: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  markedDates: PropTypes.object,
  hideExtraDays: PropTypes.bool,
  showSixWeeks: PropTypes.bool,
  onDayPress: PropTypes.func,
  onDayLongPress: PropTypes.func,
  onMonthChange: PropTypes.func,
  onVisibleMonthsChange: PropTypes.func,
  disableMonthChange: PropTypes.bool,
  enableSwipeMonths: PropTypes.bool,
  disabledByDefault: PropTypes.bool,
  headerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
  customHeader: PropTypes.any,
  allowSelectionOutOfRange: PropTypes.bool,
};
