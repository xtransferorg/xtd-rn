import React from 'react';
import { getTextNodes } from 'react-component-driver';
import { advanceTo, clear as clearDate } from 'jest-date-mock';
import { getDaysArray, partial } from '../../testUtils';
import { CalendarDriver } from '../driver';

describe('Calendar', () => {
  let currentDate;

  beforeEach(() => {
    currentDate = new Date('2020-04-01T12:00:00.002Z');
    advanceTo(currentDate);
  });

  afterEach(() => {
    clearDate();
  });

  describe('Month days', () => {
    it('should render month from `current` prop date', () => {
      const expectedDays = getDaysArray(1, 31);
      expectedDays.push(...getDaysArray(1, 4)); // April days
      const drv = new CalendarDriver()
        .withDefaultProps({ current: '2020-03-01' })
        .render();
      expect(drv.getDays()).toEqual(expectedDays);
    });

    it('should render month from `initialDate` prop date', () => {
      const expectedDays = getDaysArray(1, 31);
      expectedDays.push(...getDaysArray(1, 4)); // April days
      const drv = new CalendarDriver()
        .withDefaultProps({ initialDate: '2020-03-01' })
        .render();
      expect(drv.getDays()).toEqual(expectedDays);
    });

    describe('Basic Day', () => {
      it('should invoke `onDayPress` prop on day press', () => {
        const date = '2020-04-10';
        const onDayPress = jest.fn();
        new CalendarDriver()
          .withDefaultProps({ onDayPress })
          .render()
          .getDay(date)
          .tap();
        expect(onDayPress).toBeCalledWith({
          dateString: date,
          day: 10,
          month: 4,
          timestamp: 1586476800000,
          year: 2020,
        });
      });

      it('should not invoke `onDayPress` on dates with disabled touch events', () => {
        const date = '2020-04-10';
        const onDayPress = jest.fn();
        new CalendarDriver()
          .withDefaultProps({
            onDayPress,
            markedDates: { [date]: { disableTouchEvent: true } },
          })
          .render()
          .getDay(date)
          .tap();
        expect(onDayPress).not.toBeCalled();
      });

      it('should mark selected day', () => {
        const date = '2020-04-10';
        const selectedColor = '#AAAAAA';
        const selectedTextColor = '#BBBBBB';
        const drv = new CalendarDriver()
          .withDefaultProps({
            markedDates: {
              [date]: { selected: true, selectedColor, selectedTextColor },
            },
          })
          .render();
        expect(drv.getDay(date).getStyle()).toEqual(
          partial({ backgroundColor: selectedColor, borderRadius: 16 })
        );
        expect(drv.getDay(date).getTextStyle()).toEqual(
          partial({ color: selectedTextColor })
        );
      });

      it('should mark disabled day', () => {
        const date = '2020-04-10';
        const textDisabledColor = '#AAAAAA';
        const drv = new CalendarDriver()
          .withDefaultProps({
            theme: { textDisabledColor },
            markedDates: { [date]: { disabled: true } },
          })
          .render();
        expect(drv.getDay(date).getTextStyle()).toEqual(
          partial({ color: textDisabledColor })
        );
      });

      it('should mark today day', () => {
        const date = '2020-04-01';
        const todayTextColor = '#AAAAAA';
        const todayBackgroundColor = '#BBBBBB';
        const context = { date: '2020-04-02' };
        const drv = new CalendarDriver()
          .withDefaultProps({
            theme: { todayTextColor, todayBackgroundColor },
            context,
          })
          .render();
        expect(drv.getDay(date).getStyle()).toEqual(
          partial({ backgroundColor: todayBackgroundColor, borderRadius: 16 })
        );
        expect(drv.getDay(date).getTextStyle()).toEqual(
          partial({ color: todayTextColor })
        );
      });
    });
  });

  describe('Header', () => {
    it('should render custom header component via `customHeader` prop', () => {
      const text = 'My Custom Header';
      const customHeader = (props) => React.createElement('Text', props, text);
      const drv = new CalendarDriver()
        .withDefaultProps({ customHeader })
        .render();
      expect(getTextNodes(drv.getComponent())).toContain(text);
    });

    it('should have loading indicator with `displayLoadingIndicator` prop when `markedDates` collection does not have a value for every day of the month', () => {
      expect(
        new CalendarDriver()
          .withDefaultProps({
            current: '2020-04-01',
            displayLoadingIndicator: true,
          })
          .render()
          .getHeader()
          .getLoadingIndicator()
      ).toBeDefined();
    });

    it('should not have loading indicator with `displayLoadingIndicator` prop when `markedDates` collection has a value for every day of the month', () => {
      const date = currentDate;
      const markedDates = {};
      for (let i = 0; i < 30; i++) {
        const string = date.toISOString().split('T')[0];
        markedDates[string] = {};
        date.setDate(date.getDate() + 1);
      }

      expect(
        new CalendarDriver()
          .withDefaultProps({
            current: '2020-04-01',
            displayLoadingIndicator: true,
            markedDates,
          })
          .render()
          .getHeader()
          .getLoadingIndicator()
      ).toBeUndefined();
    });

    describe('Week days', () => {
      it('should render day names', () => {
        const drv = new CalendarDriver().withDefaultProps().render();
        expect(drv.getHeader().getDayNames()).toEqual([
          'Sun',
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat',
        ]);
      });

      it('should support custom first day via `firstDay` prop', () => {
        const drv = new CalendarDriver()
          .withDefaultProps({ firstDay: 4 })
          .render();
        expect(drv.getHeader().getDayNames()).toEqual([
          'Thu',
          'Fri',
          'Sat',
          'Sun',
          'Mon',
          'Tue',
          'Wed',
        ]);
      });

      it('should not render day names with `hideDayNames={true}`', () => {
        const drv = new CalendarDriver()
          .withDefaultProps({ hideDayNames: true })
          .render();
        expect(drv.getHeader().getDayNames()).toEqual([]);
      });
    });

    describe('Arrows', () => {
      it('should not have arrows with `hideArrows={true}` prop', () => {
        const drv = new CalendarDriver()
          .withDefaultProps({ hideArrows: true })
          .render();
        expect(drv.getHeader().getLeftArrow()).toBeUndefined();
        expect(drv.getHeader().getRightArrow()).toBeUndefined();
      });

      it('should render custom arrows using `renderArrow` prop', () => {
        const renderArrow = jest
          .fn()
          .mockImplementation((direction) =>
            React.createElement('Text', {}, direction)
          );
        const drv = new CalendarDriver()
          .withDefaultProps({ renderArrow })
          .render();
        expect(getTextNodes(drv.getHeader().getLeftArrow()).join('')).toBe(
          'left'
        );
        expect(getTextNodes(drv.getHeader().getRightArrow()).join('')).toBe(
          'right'
        );
      });
    });
  });

  describe('Gesture Recognizer', () => {
    it('should not have `GestureRecognizer` root view by default', () => {
      expect(new CalendarDriver().render().isRootGestureRecognizer()).toBe(
        false
      );
    });

    it('should have `GestureRecognizer` root view with `enableSwipeMonths={true}` prop', () => {
      expect(
        new CalendarDriver()
          .withDefaultProps({ enableSwipeMonths: true })
          .render()
          .isRootGestureRecognizer()
      ).toBe(true);
    });

    it('should not have `GestureRecognizer` root view with `enableSwipeMonths={false}` prop', () => {
      expect(
        new CalendarDriver()
          .withDefaultProps({ enableSwipeMonths: false })
          .render()
          .isRootGestureRecognizer()
      ).toBe(false);
    });
  });
});
