import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {},

  disabled: {
    opacity: 0.4,
  },

  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  titleStyle: {
    color: '#999999',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },

  hasSuffix: {
    marginRight: 6,
  },

  divider: {
    margin: 0,
    marginTop: 14,
  },

  contentStyle: {
    color: '#222222',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
});
