import { ExpandableCalendarProps, Positions } from '../index';
import { toMarkingFormat } from '../../interface';
import { ExpandableCalendarDriver } from '../driver';
import {
  generateExpandableCalendarWithContext,
  testIdExpandableCalendar,
} from './expandableCalendarTestKit';
import { CalendarContextProviderProps } from '../Context/Provider';

import XDate from 'xdate';

const today = new XDate();

const dashedToday = toMarkingFormat(today);
let onDateChanged = jest.fn();
let onMonthChange = jest.fn();

const TestCase = ({
  expandableCalendarProps,
  calendarContextProps,
}: {
  expandableCalendarProps?: Partial<ExpandableCalendarProps>;
  calendarContextProps?: Partial<CalendarContextProviderProps>;
} = {}) => {
  return generateExpandableCalendarWithContext({
    expandableCalendarProps,
    calendarContextProps: {
      date: dashedToday,
      onMonthChange,
      onDateChanged,
      ...calendarContextProps,
    },
  });
};

let driver = new ExpandableCalendarDriver(testIdExpandableCalendar, TestCase());

describe('ExpandableCalendar', () => {
  beforeEach(() => {
    onDateChanged = jest.fn();
    onMonthChange = jest.fn();
    driver = new ExpandableCalendarDriver(
      testIdExpandableCalendar,
      TestCase({
        calendarContextProps: {
          onDateChanged,
          onMonthChange,
        },
      })
    );
    jest.useFakeTimers();
  });

  describe('Props', () => {
    describe('initialPosition', () => {
      const driver = new ExpandableCalendarDriver(
        testIdExpandableCalendar,
        TestCase({
          expandableCalendarProps: { initialPosition: Positions.OPEN },
          calendarContextProps: { onDateChanged, onMonthChange },
        })
      );
      driver.render();

      it('should be expanded if initialPosition prop = "open"', () => {
        expect(driver.isCalendarExpanded()).toBe(true);
      });
    });

    describe('hideKnob', () => {
      const driver = new ExpandableCalendarDriver(
        testIdExpandableCalendar,
        TestCase({ expandableCalendarProps: { hideKnob: true } })
      );

      beforeEach(() => {
        jest.useFakeTimers();
        driver.render();
      });

      it('should hide Knob when hideKnob props = true', () => {
        expect(driver.getKnob()).toBeNull();
      });
    });
  });

  describe('Knob', () => {
    beforeEach(() => {
      driver.render();
    });

    it('should expand expandable header ', () => {
      driver.toggleKnob();
      jest.runAllTimers();

      expect(driver.isCalendarExpanded()).toBe(true);
    });

    it('should not close expandable header on day press when closeOnDayPress is false', () => {
      const driver = new ExpandableCalendarDriver(
        testIdExpandableCalendar,
        TestCase({ expandableCalendarProps: { closeOnDayPress: false } })
      );
      driver.toggleKnob();
      jest.runAllTimers();
      driver.selectDay(dashedToday);
      jest.runAllTimers();
      expect(driver.isCalendarExpanded()).toBe(true);
    });
  });

  describe('numberOfDays', () => {
    beforeEach(() => {
      driver.render();
    });

    it('should be closed when numberOfDays is defined (> 0) ', () => {
      const driver = new ExpandableCalendarDriver(
        testIdExpandableCalendar,
        TestCase({
          calendarContextProps: { numberOfDays: 3 },
          expandableCalendarProps: { initialPosition: Positions.OPEN },
        })
      );
      jest.runAllTimers();
      expect(driver.isCalendarExpanded()).toBe(false);
    });

    it('should hide Knob when numberOfDays > 1', () => {
      const driver = new ExpandableCalendarDriver(
        testIdExpandableCalendar,
        TestCase({ calendarContextProps: { numberOfDays: 3 } })
      );
      expect(driver.getKnob()).toBeNull();
    });

    it('should hide Knob when numberOfDays === 1', () => {
      const driver = new ExpandableCalendarDriver(
        testIdExpandableCalendar,
        TestCase({ calendarContextProps: { numberOfDays: 1 } })
      );
      expect(driver.getKnob()).not.toBeNull();
    });
  });
});
