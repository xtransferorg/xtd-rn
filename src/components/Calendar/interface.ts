import { ReactNode } from 'react';
import type { DateData, ExpandableCalendarProps } from './calendars';
import type { Positions } from './calendars/expandableCalendar';
import { DayProps } from './calendars/calendar/day';
import { Theme } from './calendars/types';
import { ViewStyle } from 'react-native';
import { Dayjs } from 'dayjs';
import XDate from 'xdate';

export interface CustomDayContextProps {
  selectedDate?: string;
  today?: string;
  markedDays?: string[];
  minDate?: string;
  maxDate?: string;
  viewMonth?: number;
  viewYear?: number;
  days?: XDate[];
  isOpen?: boolean;
  disabledWeekLazyUpdate?: boolean;
  highlightDay?: string;
  markedRender?: (date: DateData) => ReactNode;
}

export interface HeaderProps {
  date: Dayjs;
  onHeaderTouch?: (date: DateData) => void;
}

export interface CalendarInstance {}

export interface CalendarProps extends ExpandableCalendarProps {
  /**
   * 当前日期，默认值为当天
   * @default dayjs().format('YYYY-MM-DD')
   */
  currentDay?: string;
  /**
   * 默认选中的日期
   */
  defaultValue?: string;
  /**
   * 受控的日期
   */
  value?: string;
  /**
   * 日期面板状态
   * @default Positions.OPEN
   */
  initialPosition?: Positions;
  /**
   * 日历切换视图回调，`true` 为月视图，`false` 是周视图
   */
  onCalendarToggled?: (isOpen: boolean) => void;
  /**
   * 有事件的日期列表
   */
  markedDays?: string[];
  /**
   * 最小日期，超过此日期的将禁用
   */
  minDate?: string;
  /**
   * 最大日期，超过此日期的将禁用
   */
  maxDate?: string;
  /**
   * 自定义国际化
   */
  locale?: {
    monthNames?: string[] | undefined;
    monthNamesShort?: string[] | undefined;
    dayNames?: string[] | undefined;
    dayNamesShort?: string[] | undefined;
    amDesignator?: string | undefined;
    pmDesignator?: string | undefined;
  };
  /**
   * 在切换月或者周的时候禁用自动设置 date 为当前范围的第一天
   * @default true
   */
  disableScrollChangeDate?: boolean;
  /**
   * 主题配置
   * @default {
      calendarBackground: '#f9f9f9',
      headerHeight: 44,
      knob: {
        backgroundColor: '#fff',
      },
    }
   */
  theme?: Theme;
  /**
   * header 左右插槽的宽度
   * @default 36
   */
  headerSize?: number;
  /**
   * 左右插槽的样式
   */
  arrowContainer?: ViewStyle;
  /**
   * 显示的年月
   */
  visibleDate?: string;
  /**
   * 隐藏日历头
   * @default false
   */
  hideHeader?: boolean;

  /**
   * 允许滚动到过去的最大月份数
   * @default 50
   */
  pastScrollRange?: number;

  /**
   * 允许滚动到未来的最大月份数
   * @default 50
   */
  futureScrollRange?: number;

  /**
   * 禁用周视图慢更新
   * @default false
   */
  disabledWeekLazyUpdate?: boolean;

  /**
   * 切换为打开状态阈值
   * @default 100
   */
  openThreshold?: number;

  /**
   * 切换为关闭状态阈值
   * @default 100
   */
  closeThreshold?: number;

  /**
   * 高亮的日期，不同于value，设置这个选项不会导致日历重新渲染
   */
  highlightDay?: string;

  /**
   * 自定义节点内容
   */
  renderHeader?: (date?: XDate) => ReactNode;
  /**
   * 左上角渲染插槽
   */
  renderHeaderLeft?: (date: DateData) => ReactNode;
  /**
   * 右上角渲染插槽
   */
  renderHeaderRight?: (date: DateData) => ReactNode;
  /**
   * 自定义假期节点
   */
  markedRender?: (date: DateData) => ReactNode;

  /**
   * 自定义渲染单元格
   */
  dayComponent?: React.ComponentType<DayProps & { date?: DateData }>;
  /**
   * 当日历月份发生变化之后的回调函数
   */
  onMonthChange?: (date: DateData) => void;
  /**
   * 选择日期回调
   */
  onSelect?: (date: DateData) => void;
  /**
   * 顶部 title 点击事件
   */
  onHeaderTouch?: (date: DateData) => void;
}
