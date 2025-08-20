// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as l, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    f = i.fillColor,
    m = void 0 === f ? 'none' : f,
    s = e(i, ['color', 'size', 'fillColor']);
  return r.createElement(
    l,
    o(
      {
        width: a,
        height: a,
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      s
    ),
    r.createElement(t, {
      d: 'M4.8622 8.94272C4.3415 8.42202 4.3415 7.5778 4.8622 7.0571L9.95984 1.95947L11.374 3.37369L6.74761 8.00058L11.374 12.6261L9.95984 14.0404L4.8622 8.94272Z',
      fill: String(('none' !== m && m) || '#181721'),
    })
  );
}
