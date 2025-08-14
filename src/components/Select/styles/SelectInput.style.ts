import { StyleSheet } from '../../Theme';

export default StyleSheet.createTheme((token) => {
  return {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: token['--spacing-3'],
      paddingVertical: token['--spacing-2'],
      borderRadius: token['--border-radius-small'],
      borderWidth: token['--border-1'],
      borderColor: token['--color-border-2'],
      overflow: 'hidden',
    },
    error: {
      borderColor: token['--color-danger-7'],
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      flex: 1,
      overflow: 'hidden',
    },
    text: {
      color: token['--color-text-6'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },
    disabled: {
      borderColor: token['--color-border-1'],
      backgroundColor: token['--color-fill-1'],
    },
    disabledText: {
      color: token['--color-text-2'],
    },
    disabledTag: {
      opacity: 0.5,
    },
    placeholder: {
      color: token['--color-text-4'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },
    tagContainer: {
      paddingVertical: 3,
      paddingLeft: 12,
    },
    small: {
      paddingVertical: 4,
    },
    smallTagContainer: {
      paddingVertical: 0,
    },
    large: {
      paddingVertical: 12,
    },
    largeTagContainer: {
      paddingVertical: 7,
    },
    suffix: {
      flexDirection: 'row',
      alignItems: 'center',
      height: '100%',
      paddingLeft: token['--spacing-2'],
    },
    tags: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      flex: 1,
    },
    tag: {
      margin: token['--spacing-1'],
    },
  };
});
