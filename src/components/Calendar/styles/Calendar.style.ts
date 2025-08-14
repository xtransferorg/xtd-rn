import { StyleSheet } from 'react-native';
import { BOLD } from '../../../common/weight';
import type { Token } from '../../Theme/constant';

export function createHeaderStyle(token: Token) {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: token['--font-size-3'],
      fontWeight: BOLD,
      color: token['--color-text-6'],
    },
    titleIcon: {
      marginLeft: 10,
    },
    headerOverrideStyle: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    arrowContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}

export function createStyle(
  state: {
    isToday: boolean;
    isSelected: boolean;
    disabled: boolean;
    isCurrentMonth: boolean;
    isOpen: boolean;
    isOutRangeDate: boolean;
  },
  token: Token
) {
  const {
    isSelected,
    isToday,
    disabled,
    isCurrentMonth,
    isOpen,
    isOutRangeDate,
  } = state;

  const dayColor = () => {
    if (isSelected) {
      return token['--color-text-1'];
    }
    if (disabled || (!isCurrentMonth && isOpen)) {
      return token['--color-text-2'];
    }
    return token['--color-text-6'];
  };

  const markedBgColor = () => {
    if (isOutRangeDate) {
      return isSelected ? token['--color-text-1'] : token['--color-fill-6'];
    }

    return token['--color-text-2'];
  };

  return StyleSheet.create({
    dayTouchContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dayContainer: {
      height: 36,
      width: 36,
      margin: 3,
      display: 'flex',
      alignItems: 'center',
      borderRadius: token['--border-radius-max'],
      borderWidth: token['--border-1'],
      borderColor:
        isToday && !isSelected ? token['--color-line-1'] : 'transparent',
      backgroundColor: isSelected ? token['--color-fill-6'] : 'transparent',
    },
    day: {
      textAlign: 'center',
      marginTop: 5,
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      fontWeight: isToday || isSelected ? BOLD : 'normal',
      color: dayColor(),
    },
    marked: {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: markedBgColor(),
    },
  });
}
