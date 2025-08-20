import { Dimensions, StyleSheet } from 'react-native';
import { BOLD } from '../../common/weight';
import { Token } from '../Theme/constant';

export const ImageWidth = (Dimensions.get('window').width - 60) / 3;

export default (token: Token) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: token['--spacing-2'],
      marginTop: 0,
      alignItems: 'flex-start',
      flexWrap: 'nowrap',
    },
    left: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'flex-start',
    },

    reuqire: {
      color: '#FF4D4D',
      lineHeight: 21,
    },
    titleContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexShrink: 1,
    },
    title: {
      fontSize: token['--font-size-2'],
      color: token['--color-text-6'],
      minHeight: 21,
      lineHeight: token['--line-height-4'],
      flexWrap: 'wrap',
    },
    option: {
      flexShrink: 0,
    },
    touchableContainer: {
      justifyContent: 'flex-start',
      marginLeft: token['--spacing-1'],
      paddingVertical: 3,
      flexShrink: 0,
    },
    touchableContainerWithOption: {
      marginLeft: 0,
    },
    demoBtn: {
      fontSize: token['--font-size-2'],
      fontWeight: BOLD,
      textAlign: 'right',
      lineHeight: token['--line-height-4'],
      color: token['--color-text-6'],
      textDecorationLine: 'underline',
      marginLeft: token['--spacing-3'],
      flexShrink: 0,
    },
    btnWrapper: {
      height: ImageWidth,
    },
    delete_btn: {
      backgroundColor: token['--smegma-1'],
      width: 20,
      height: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    common_btn: {
      flexGrow: 1,
      flexShrink: 1,
      overflow: 'hidden',
      borderColor: token['--color-border-2'],
      borderWidth: token['--border-1'],
      borderRadius: token['--border-radius-small'],
      width: ImageWidth,
    },
    image_btn: {
      width: ImageWidth,
      height: ImageWidth,
    },
    increase_btn: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: token['--color-border-2'],
      borderWidth: token['--border-1'],
      borderRadius: token['--border-radius-small'],
    },
    error_btn: {
      borderColor: token['--color-danger-7'],
    },
    upload_btn: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: token['--spacing-3'],
      paddingVertical: token['--spacing-4'],
      gap: token['--spacing-3'],
    },
    upload_sub: {
      paddingVertical: 15,
    },
    increase_btn_disable: {
      backgroundColor: token['--color-fill-1'],
      borderColor: token['--color-border-1'],
    },
    loadingContainer: {
      width: ImageWidth,
      height: ImageWidth,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: token['--border-radius-small'],
      borderWidth: token['--border-1'],
      borderColor: token['--color-border-2'],
    },
    image_content: {
      flex: 1,
      resizeMode: 'contain',
    },
    imageWrapper: {
      position: 'relative',
    },
    deleteIconWrap: {
      position: 'absolute',
      top: 4,
      right: 4,
      zIndex: 2,
      elevation: 2,
      width: 22,
      height: 22,
    },
    editIconWrap: {
      position: 'absolute',
      bottom: 0,
      zIndex: 2,
      elevation: 2,
      left: 0,
    },
    desc: {
      fontSize: token['--font-size-2'],
      color: token['--color-text-4'],
      marginTop: token['--spacing-2'],
      marginBottom: 0,
      lineHeight: token['--line-height-4'],
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
    },
    tip: {
      color: token['--color-text-6'],
      textAlign: 'center',
      fontSize: token['--font-size-2'],
      lineHeight: token['--line-height-4'],
      marginTop: token['--spacing-2'],
    },
    sub_tip: {
      color: token['--color-text-3'],
      fontSize: token['--font-size-1'],
      lineHeight: token['--line-height-5'],
      marginTop: token['--spacing-1'],
    },
    tip_upload: {
      fontSize: token['--font-size-2'],
      fontWeight: BOLD,
      textDecorationLine: 'underline',
      color: token['--color-gray-9'],
      marginTop: 0,
    },
    tip_disable: {
      color: token['--color-text-2'],
    },
    tip_wrapper: {
      alignItems: 'flex-start',
      flex: 1,
    },
  });
