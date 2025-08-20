import { StyleSheet } from 'react-native';
import { XL, XSL } from '@xrnjs/ui';
import { T4 } from '@xrnjs/ui';

export default StyleSheet.create({
  cardWrapper: {
    paddingTop: XL,
    paddingLeft: XL,
    paddingRight: XSL,
    minHeight: 100,
  },

  moreText: {
    color: '#999999',
    fontWeight: '400',
    fontSize: T4,
    lineHeight: 21,
  },

  moreIcon: {
    marginLeft: 2,
  },

  extra: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  marginBottom10: {
    marginBottom: 10,
  },

  marginBottom12: {
    marginBottom: 12,
  },
});
