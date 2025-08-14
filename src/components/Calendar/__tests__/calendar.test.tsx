import { render } from '@testing-library/react-native';
import { Calendar } from '..';
import { ReactTestInstance } from 'react-test-renderer';
import React from 'react';

describe('Calendar', () => {
  test('should render correctly', () => {
    const day = '2023-12-28';
    const wrapper = render(
      <Calendar currentDay={day} defaultValue="2023-12-29" testID="calendar" />
    );
    const today = wrapper.getByTestId(
      `calendar.calendarList.item_2023-12.day_${day}`
    );
    expect(today.props.style.borderColor).toBe('#FF7A00');
    const selected = wrapper.getByTestId(
      `calendar.calendarList.item_2023-12.day_2023-12-29`
    );
    expect(selected.props.style.backgroundColor).toBe('#FF7A00');
  });

  test('should render correctly when hideHeader is true', () => {
    const wrapper = render(
      <Calendar hideHeader defaultValue="2023-12-01" testID="calendar" />
    );
    const header = wrapper.queryByTestId(
      'calendar.calendarList.item_2023-12.header'
    );
    expect(
      (header?.children?.[0] as ReactTestInstance)?.props.style?.[0]?.height
    ).toBe(0);
  });
});
