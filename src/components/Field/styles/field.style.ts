import { StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';
export default (token: Token) =>
  StyleSheet.create({
    controlHorizontal: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 14,
    },
    label: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    placeholder: {
      marginTop: 14,
    },
    labelHorizontal: {
      marginRight: 24,
    },
    labelVertical: {
      paddingTop: token['--spacing-3'],
      paddingBottom: token['--spacing-2'],
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      maxWidth: '100%',
    },
    labelTextContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexShrink: 1,
    },
    labelText: {
      alignItems: 'center',
      lineHeight: token['--line-height-4'],
      fontSize: token['--font-size-2'],
      color: token['--color-text-6'],
    },
    questionIcon: {
      paddingVertical: 3,
      flexShrink: 0,
      marginLeft: token['--spacing-1'],
    },
    questionIconWithOption: {
      marginLeft: 0,
    },
    option: {
      flexShrink: 0,
    },
    requiredMark: {
      marginRight: 4,
      color: '#FF4D4D',
    },
    error: {
      color: '#FF4D4D',
    },
    dividerLine: {
      borderTopColor: '#eee',
      borderTopWidth: 1,
      marginTop: 6,
      paddingTop: 10,
    },
    dividerLineError: {
      borderTopColor: token['--color-danger-7'],
    },
    errorIcon: {
      marginRight: token['--spacing-1'],
    },
    message: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: token['--spacing-2'],
    },
    messageNormal: {
      paddingTop: token['--spacing-2'],
    },
    messageText: {
      color: token['--color-text-4'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },
    messageTextError: {
      color: token['--color-danger-7'],
      flexGrow: 1,
      flexShrink: 1,
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightContent: {
      flex: 1,
    },
    childrenContainer: {
      flexGrow: 1,
      zIndex: 1,
    },
  });
