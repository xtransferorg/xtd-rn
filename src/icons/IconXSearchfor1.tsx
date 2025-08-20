// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as l, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    C = i.fillColor,
    f = void 0 === C ? 'none' : C,
    m = e(i, ['color', 'size', 'fillColor']);
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
      m
    ),
    r.createElement(t, {
      d: 'M7.33301 2C10.6467 2 13.333 4.68629 13.333 8C13.333 9.17393 12.9959 10.2691 12.4131 11.194L14.6507 13.1904L13.319 14.6826L11.0811 12.6856C10.0542 13.5081 8.75104 14 7.33301 14C4.0193 14 1.33301 11.3137 1.33301 8C1.33301 4.68629 4.0193 2 7.33301 2ZM7.33301 4C5.12387 4 3.33301 5.79086 3.33301 8C3.33301 10.2091 5.12387 12 7.33301 12C9.54215 12 11.333 10.2091 11.333 8C11.333 5.79086 9.54215 4 7.33301 4Z',
      fill: String(('none' !== f && f) || '#181721'),
    })
  );
}
