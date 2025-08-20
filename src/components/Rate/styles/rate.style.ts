import { StyleSheet } from 'react-native';
import { Token } from 'src/components/Theme/constant';
import { BOLD } from '../../../common/weight';
import { CharacterSize } from '../interface';

const DefaultSize = 48; // 默认的每项大小 正方形

export default (
  token: Token,
  count: number,
  size?: CharacterSize,
  margin?: number
) => {
  const startWidth = size?.width || DefaultSize;
  const startHeight = size?.height || DefaultSize;
  const spacing3 = token['--spacing-3'];
  const containerStarMaxWidth =
    startWidth * count + spacing3 * (count - 1) + (margin || 0);
  const borderRadius = 72;
  return StyleSheet.create({
    container: {},
    containerStar: {
      flexDirection: 'row',
      justifyContent: 'center',
      maxWidth: containerStarMaxWidth,
    },
    star: {
      width: startWidth,
      height: startHeight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    lightDescriptionColor: {
      color: token['--color-primary-6'],
    },
    description: {
      color: token['--color-text-3'],
      fontSize: token['--font-size-1'],
      lineHeight: token['--line-height-5'],
      textAlign: 'center',
    },
    normal: {
      backgroundColor: token['--color-fill-1'],
      marginRight: 2,
    },
    active: {
      backgroundColor: token['--color-primary-1'],
    },
    first: {
      borderBottomLeftRadius: borderRadius,
      borderTopLeftRadius: borderRadius,
    },
    last: {
      borderBottomRightRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      marginRight: 0,
    },
    text: {
      color: token['--color-text-6'],
      lineHeight: token['--line-height-4'],
      fontSize: token['--font-size-2'],
      fontStyle: 'normal',
      fontWeight: '400',
    },
    textActive: {
      color: token['--color-primary-6'],
      fontWeight: BOLD,
    },
  });
};
