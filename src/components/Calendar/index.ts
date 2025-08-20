import { default as ICalendar } from './Calendar';
export * from './calendars/index';
export type {
  CalendarListProps,
  AgendaProps,
  DateData,
} from './calendars/index';

export const Calendar = ICalendar;
