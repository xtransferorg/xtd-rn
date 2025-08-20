// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import l from 'react';
import { Svg as r, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    f = i.fillColor,
    m = void 0 === f ? 'none' : f,
    c = e(i, ['color', 'size', 'fillColor']);
  return l.createElement(
    r,
    o(
      {
        width: a,
        height: a,
        viewBox: '0 0 24 20',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      c
    ),
    l.createElement(t, {
      d: 'M24 20V0L0 20H24Z',
      fill: String(('none' !== m && m) || '#F56A00'),
    }),
    l.createElement(t, {
      d: 'M19.475 9.96484L20.5258 11.0352L15.6085 15.8632C15.2195 16.2451 14.5963 16.2451 14.2073 15.8632L12 13.5L13.0509 12.4297L14.9079 14.4485L19.475 9.96484Z',
      fill: String(('none' !== m && m) || 'white'),
    })
  );
}
