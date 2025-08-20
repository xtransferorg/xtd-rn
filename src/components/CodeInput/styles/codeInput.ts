import { Dimensions, StyleSheet } from 'react-native';
import { Token } from '../../Theme/constant';
import { BOLD } from '../../../common/weight';

const calculateCellDimensions = (
  cellCount: number,
  containerWidth?: number
) => {
  const isFour = cellCount === 4;
  const paddingSize = isFour ? 32 : 16;
  const scale = isFour ? 1 : 64 / 56;

  const _containerWidth = containerWidth || Dimensions.get('window').width;

  const totalSpacing = (cellCount - 1) * paddingSize;
  const availableWidth = _containerWidth - totalSpacing;

  const cellWidth = Math.floor(availableWidth / cellCount);
  const cellHeight = Math.floor(cellWidth * scale);

  return {
    cellWidth,
    cellHeight,
  };
};

export default (token: Token, cellCount: number, containerWidth?: number) => {
  const { cellWidth, cellHeight } = calculateCellDimensions(
    cellCount,
    containerWidth
  );

  return StyleSheet.create({
    root: {},
    codeFieldRoot: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    cell: {
      width: cellWidth,
      height: cellHeight,
      lineHeight: 45,
      fontSize: 24,
      borderWidth: token['--border-1'],
      borderRadius: token['--border-radius-small'],
      borderColor: token['--color-border-3'],
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fillCell: {
      borderWidth: token['--border-2'],
    },
    errorCell: {
      borderWidth: token['--border-1'],
      borderColor: token['--color-danger-7'],
    },
    cellText: {
      fontSize: cellHeight / 2,
      fontWeight: BOLD,
      color: token['--color-text-6'],
    },
    cursor: {
      fontSize: cellHeight / 2,
      lineHeight: cellHeight / 2,
      fontWeight: '400',
      color: token['--color-primary-6'],
    },
    focusCell: {},
    maskSymbolAndroid: {
      width: 8,
      height: 8,
      borderRadius: token['--border-radius-mini'],
      backgroundColor: '#222',
    },
    maskSymbolIOS: {
      fontSize: cellHeight,
      lineHeight: cellHeight,
      color: '#222',
    },
    extra: {},
  });
};
