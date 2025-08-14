import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';
import { Token } from 'src/components/Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: token['--spacing-3'],
      borderRadius: token['--border-radius-small'],
    },
    inputWrapper: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
      height: '100%',
    },
    inputWrapperError: {
      borderColor: token['--color-danger-7'],
    },
    inputWrapperWarning: {},
    input: {
      fontSize: token['--font-size-2'],
      // lineHeight: token['--line-height-4'], //  单行不能加lineHeight，iOS上有问题
      color: token['--color-text-6'],
      padding: 0,
      flexGrow: 1,
    },
    placeholderWrapper: {
      position: 'absolute',
      justifyContent: 'center',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      height: '100%',
    },
    harmonyNotEditable: {
      position: 'absolute',
      zIndex: 10,
      top: 0,
      left: 0,
      right: 0,
      height: '100%',
      backgroundColor: '#0000',
    },
    inputDisabled: {
      color: token['--color-text-2'],
    },
    inputWrapperDisabled: {
      backgroundColor: token['--color-fill-1'],
      borderColor: token['--color-border-1'],
    },
    inputWrapperFocus: {
      borderWidth: token['--border-2'],
      borderColor: token['--color-border-3'],
    },
    clearIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      width: token['--font-size-3'],
      height: '100%',
      position: 'absolute',
      right: 0,
      zIndex: 100,
    },
    unitWrapper: {
      flex: 1,
      position: 'relative',
    },
    unitContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      top: -11,
    },
    unitDivider: {
      height: 18,
      width: 1,
      backgroundColor: '#ccc',
      marginRight: 4,
    },
    unitText: {
      fontSize: 12,
      color: '#999',
    },
    unitInputWrapper: {
      paddingTop: 6,
    },
    placeholderWeight: {
      fontWeight: BOLD,
    },
    placeHolderTextStyle: {
      fontSize: token['--font-size-2'],
      color: token['--color-text-4'],
    },
    inputBorder: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      flex: 1,
      borderWidth: token['--border-1'],
      borderColor: token['--color-border-2'],
      borderRadius: token['--border-radius-small'],
    },
    prefix: {
      marginRight: token['--spacing-2'],
    },
    suffix: {
      marginLeft: token['--spacing-2'],
    },
    placeholderReadonly: {
      color: token['--color-text-4'], // 和设计沟通确认，改成和常态提示一样
    },
    placeholderDisabled: {
      color: token['--color-text-2'],
    },
    loading: {
      position: 'absolute',
      justifyContent: 'center',
      top: 0,
      left: 0,
      height: '100%',
    },
  });
