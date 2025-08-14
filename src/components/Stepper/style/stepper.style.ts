import { StyleSheet } from 'react-native';
import { Token } from 'src/components/Theme/constant';

export const createStyle = (
  inputWidth: number,
  token: Token,
  size: 'default' | 'large'
) => {
  const wrapperWidth = inputWidth + (2 * token['--spacing-2'] + 24) * 2;
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: token['--border-1'],
      borderColor: token['--color-border-2'],
      borderRadius: token['--border-radius-small'],
      width: wrapperWidth,
      height: token[`--size-${size}`],
      padding: token['--spacing-2'],
      overflow: 'hidden',
    },
    wrapperFoucs: {
      borderWidth: token['--border-2'],
      borderColor: token['--color-border-3'],
    },
    wrapDisabled: {
      backgroundColor: token['--color-fill-1'],
      borderColor: token['--color-border-1'],
    },
    wrapDanger: {
      borderColor: token['--color-danger-7'],
    },
    input: {
      paddingHorizontal: 10,
      paddingVertical: 0,
      height: '100%',
      width: inputWidth,
      textAlign: 'center',
      fontWeight: '500',
      color: token['--color-text-6'],
      fontSize: token['--font-size-2'],
    },
    disabled: {
      color: token['--color-text-2'],
    },
    prefix: {
      paddingRight: token['--spacing-2'],
    },
    suffix: {
      paddingLeft: token['--spacing-2'],
    },
  });
};

export const buttonStyle = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: '100%',
  },
});
