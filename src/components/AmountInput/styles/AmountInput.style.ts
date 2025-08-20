import { BOLD } from '../../../common/weight';
import { StyleSheet } from '../../Theme/Theme';

export default StyleSheet.createTheme((token) => {
  return {
    container: {
      paddingBottom: 14,
    },
    amount: {
      fontSize: token['--font-size-4'],
      fontWeight: '600',
      textAlignVertical: 'center',
      borderBottomWidth: token['--border-none'],
    },
    placeholderStyle: {
      textAlign: 'right',
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      fontWeight: '400',
    },
    placeholderSuffixStyle: {
      textAlign: 'left',
    },
    descContainer: {
      flexDirection: 'row',
      marginTop: token['--spacing-2'],
      justifyContent: 'flex-start',
    },
    descBalanceContainer: {
      justifyContent: 'flex-end',
    },
    prefixContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    img: {
      width: token['--size-mini'],
      height: token['--size-mini'],
      borderRadius: token['--border-radius-large'],
      marginRight: token['--spacing-2'],
    },
    imgDisabled: {
      opacity: 0.5,
    },
    selectedCurrencyTxt: {
      color: token['--color-text-5'],
      fontSize: token['--font-size-4'],
      fontWeight: '600',
      lineHeight: token['--line-height-2'],
    },
    selectedCurrencyTxtDisabled: {
      color: token['--color-text-2'],
    },
    selectedCurrencyPlaceholder: {
      color: token['--color-text-4'],
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
      fontWeight: BOLD,
    },
    selectedCurrencyPlaceholderDisabled: {
      color: token['--color-text-2'],
    },
    availableBalanceTxt: {
      fontSize: token['--font-size-2'],
      fontWeight: '400',
      lineHeight: token['--line-height-4'],
      color: token['--color-text-4'],
    },
    sellAll: {
      marginLeft: token['--spacing-2'],
      fontSize: token['--font-size-2'],
      fontWeight: BOLD,
      lineHeight: token['--line-height-4'],
      color: token['--color-text-6'],
      textDecorationLine: 'underline',
    },
    forwardIconStyle: {
      marginLeft: token['--spacing-2'],
    },
  };
});
