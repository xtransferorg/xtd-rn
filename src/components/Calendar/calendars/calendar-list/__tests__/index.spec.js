import React from 'react';
import CalendarList from '../index';
import { CalendarListDriver } from '../driver';

const CURRENT = '2022-09-09';
const testIdCalendarList = 'myCalendarList';
const onMonthChangeMock = jest.fn();
const onVisibleMonthsChangeMock = jest.fn();
const pastScrollRange = 10;
const futureScrollRange = 5;
// const initialVisibleItems = [
//   {
//     "index": 50,
//     "isViewable": true,
//     "item": "2022-09-09T00:00:00.000Z",
//     "key": "50"
//   }
// ];
// const changed = [
//   {
//     "index": 51,
//     "isViewable": true,
//     "item": "2022-10-09T00:00:00.000Z",
//     "key": "51"
//   },
//   {
//     "index": 50,
//     "isViewable": false,
//     "item": "2022-09-09T00:00:00.000Z",
//     "key":"50"
//   }
// ];
// const visibleItems = [
//   {
//     "index": 51,
//     "isViewable": true,
//     "item": "2022-10-09T00:00:00.000Z",
//     "key": "51"
//   }
// ];

const defaultProps = {
  testID: testIdCalendarList,
  current: CURRENT,
  onMonthChange: onMonthChangeMock,
  onVisibleMonthsChange: onVisibleMonthsChangeMock,
};

const TestCase = (props) => {
  return <CalendarList {...defaultProps} {...props} />;
};

describe('CalendarList', () => {
  describe('Props', () => {
    describe('past/futureScrollRange', () => {
      const driver = new CalendarListDriver(
        testIdCalendarList,
        (
          <TestCase
            pastScrollRange={pastScrollRange}
            futureScrollRange={futureScrollRange}
          />
        )
      );

      it('should have correct number of list items', () => {
        expect(driver.getListProps().data.length).toBe(
          pastScrollRange + futureScrollRange + 1
        );
      });
    });
  });
});
