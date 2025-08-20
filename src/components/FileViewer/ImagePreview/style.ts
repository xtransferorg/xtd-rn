import { StyleSheet } from 'react-native';
import { Token } from 'src/components/Theme/constant';

export default (token: Token) => {
  return StyleSheet.create({
    container: {
      flexWrap: 'wrap',
    },
    header: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      height: 44,
      position: 'absolute',
      left: 0,
      paddingLeft: token['--spacing-3'],
      paddingRight: token['--spacing-3'],
      zIndex: 10,
    },
    iconBg: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: 'rgba(24, 23, 33, 0.40)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    indicatorWrapper: {
      position: 'absolute',
      width: '100%',
      left: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 22,
    },
    indicator: {
      backgroundColor: 'rgba(218, 218, 227, 0.2)',
      paddingVertical: 1,
      paddingHorizontal: token['--spacing-2'],
      lineHeight: token['--line-height-4'],
      borderRadius: token['--border-radius-small'],
    },

    indicatorText: {
      color: token['--color-text-1'],
    },
  });
};
