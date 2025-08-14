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
      d: 'M11.1378 8.94272C11.6585 8.42202 11.6585 7.5778 11.1378 7.0571L6.04019 1.95947L4.62598 3.37369L9.25242 8.00058L4.62598 12.6261L6.04019 14.0404L11.1378 8.94272Z',
      fill: String(('none' !== m && m) || '#181721'),
    })
  );
}
