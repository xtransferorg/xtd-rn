import { BOLD } from './../../../common/weight';
import { StyleSheet } from 'react-native';
import type { Token } from '../../Theme/constant';

export default (token: Token) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: token['--color-bg-1'],
      paddingBottom: 34,
      flexDirection: 'column',
    },
    searchInput: {
      marginHorizontal: token['--spacing-3'],
      marginVertical: token['--spacing-2'],
    },
    sideBar: {
      position: 'absolute',
      zIndex: 2,
      right: 6,
      userSelect: 'none',
    },
    scrollViewBar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sideBarText: {
      color: token['--color-text-3'],
      fontSize: token['--font-size-1'],
      fontWeight: '400',
      lineHeight: token['--line-height-5'],
    },
    activeSideBar: { color: token['--color-primary-6'] },

    hotSectionTitle: {
      color: token['--color-text-6'],
      fontSize: token['--font-size-3'],
      fontWeight: BOLD,
      lineHeight: token['--line-height-3'],
      marginBottom: token['--spacing-2'],
      marginTop: token['--spacing-3'],
    },
    hotSection: {
      overflow: 'hidden',
      paddingTop: token['--spacing-2'],
      paddingVertical: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },

    listStyle: { width: '100%', paddingHorizontal: token['--spacing-3'] },
    empty: { paddingVertical: 60 },
    separator: {
      height: 1,
      backgroundColor: token['--color-line-1'],
      marginRight: token['--spacing-2'],
    },
    sectionListHeader: {
      paddingVertical: token['--spacing-1'],
      color: token['--color-text-3'],
      fontSize: token['--font-size-2'],
      fontWeight: '400',
      lineHeight: token['--line-height-4'],
      backgroundColor: token['--color-bg-1'],
    },
    sectionListItem: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: token['--spacing-3'],
      paddingRight: token['--spacing-3'],
    },
    titleWrapper: { display: 'flex' },
    titleWrapperRight: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      maxWidth: 300,
    },
    titleWrapperPrefix: { marginLeft: token['--spacing-2'] },
    title: {
      color: token['--color-text-6'],
      fontSize: token['--font-size-3'],
      fontWeight: '400',
      lineHeight: token['--line-height-3'],
    },
    rightTitle: { marginRight: token['--spacing-2'] },
    description: {
      color: token['--color-text-4'],
      fontSize: token['--font-size-1'],
      fontWeight: '400',
      lineHeight: token['--line-height-5'],
    },
    rightDescription: {
      fontSize: token['--font-size-3'],
      lineHeight: token['--line-height-3'],
    },

    rightNode: { marginLeft: 'auto' },

    value: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      paddingHorizontal: token['--spacing-3'],
      paddingTop: token['--spacing-2'],
    },
    tag: {
      marginRight: token['--spacing-2'],
      marginBottom: token['--spacing-2'],
    },

    footer: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: token['--spacing-3'],
      paddingVertical: token['--spacing-2'],
    },
    linear: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: -6,
      height: 6,
    },
  });
