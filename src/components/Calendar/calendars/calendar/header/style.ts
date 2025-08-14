import { StyleSheet, Platform } from 'react-native';
import * as defaultStyle from '../../style';
import { Theme } from '../../types';
import constants from '../../commons/constants';

export default function (theme: Theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  const rtlStyle = constants.isRTL
    ? { transform: [{ scaleX: -1 }] }
    : undefined;
  const header = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: appStyle.headerHeight ?? 44,
    overflow: 'visible',
  };
  if (appStyle.hideHeader) {
    header.height = 0;
    header.overflow = 'hidden';
  }

  return StyleSheet.create({
    header: header,
    partialHeader: {
      paddingHorizontal: 15,
    },
    headerContainer: {
      flexDirection: 'row',
    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: appStyle.monthTextColor,
      margin: 10,
    },
    arrow: {
      padding: 10,
      ...appStyle.arrowStyle,
    },
    arrowImage: {
      ...rtlStyle,
      tintColor: appStyle.arrowColor,
      ...Platform.select({
        web: {
          width: appStyle.arrowWidth,
          height: appStyle.arrowHeight,
        },
      }),
    },
    disabledArrowImage: {
      ...rtlStyle,
      tintColor: appStyle.disabledArrowColor,
    },
    week: {
      marginTop: 7,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 14,
      paddingRight: 14,
    },
    partialWeek: {
      paddingRight: 0,
    },
    dayHeader: {
      marginBottom: 7,
      minWidth: 42,
      flex: 1,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: appStyle.textSectionTitleColor,
    },
    disabledDayHeader: {
      color: appStyle.textSectionTitleDisabledColor,
    },
    // @ts-ignore
    ...(theme['stylesheet.calendar.header'] || {}),
  });
}
