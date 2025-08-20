import { StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';
import { BOLD } from '../../../common/weight';

export default (token: Token) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    header: {
      width: 4,
      height: 16,
      backgroundColor: token['--color-primary-6'],
      marginRight: token['--spacing-2'],
      borderRadius: 1,
    },
    label: {
      lineHeight: token['--line-height-3'],
      fontSize: token['--font-size-3'],
      color: token['--color-text-6'],
      fontStyle: 'normal',
      fontWeight: BOLD,
    },
  });
