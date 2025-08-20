import { BOLD } from '../../../common/weight';
import { StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      paddingHorizontal: 0, //token['--spacing-3'], 和设计刘智沟通去除padding
    },
    spaceItem: {
      flex: 1,
    },
    item: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: token['--spacing-2'],
      paddingHorizontal: token['--spacing-3'], // 先不加，后续可能放开
      borderRadius: token['--border-radius-small'],
      borderWidth: token['--border-1'],
      borderColor: token['--color-border-2'],
      backgroundColor: token['--color-bg-1'],
    },
    horizontal: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    horizontalMargin: { marginRight: token['--spacing-2'] },
    verticalMargin: { marginBottom: token['--spacing-1'] },

    itemDisabled: {
      borderColor: token['--color-border-1'],
      backgroundColor: token['--color-fill-1'],
    },
    itemActive: {
      borderColor: token['--color-border-4'],
    },

    titleWrapper: {
      alignItems: 'flex-start',
      flexGrow: 1,
      flexShrink: 1,
    },
    label: {
      textAlign: 'center',
      // maxWidth: 150, 去除宽度限制
      color: token['--color-text-5'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },
    title: {
      color: token['--color-text-6'],
      fontWeight: BOLD,
    },
    labelActive: {
      color: token['--color-primary-6'],
    },
    labelDisabled: {
      color: token['--color-text-2'],
    },
    description: {
      color: token['--color-text-4'],
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
    },
    descriptionActive: {
      color: token['--color-primary-6'],
    },
    descriptionDisabled: {
      color: token['--color-text-2'],
    },

    iconActive: { color: token['--color-primary-6'] },
    iconDisabled: { color: token['--color-gray-4'] },

    activeMark: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      borderBottomRightRadius: token['--border-radius-small'] - 2,
      overflow: 'hidden',
    },
  });
