import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';
import { Theme } from '../types';

export default function getStyle(theme: Theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    container: {
      backgroundColor: appStyle.calendarBackground,
    },
    dayContainer: {
      alignItems: 'center',
      flex: 1,
      marginHorizontal: 5,
    },
    emptyDayContainer: {
      flex: 1,
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground,
    },
    week: {
      marginVertical: appStyle.weekVerticalMargin,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 14,
      paddingRight: 14,
    },
    // @ts-ignore
    ...(theme['stylesheet.calendar.main'] || {}),
  });
}
