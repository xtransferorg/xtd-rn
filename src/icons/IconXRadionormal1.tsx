// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as t, Path as l } from 'react-native-svg';
export default function (i) {
  var n = i.color,
    a = void 0 === n ? 'none' : n,
    s = i.size,
    m = void 0 === s ? '24' : s,
    c = (i.fillColor, e(i, ['color', 'size', 'fillColor']));
  return r.createElement(
    t,
    o(
      {
        width: m,
        height: m,
        viewBox: '0 0 22 22',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      c
    ),
    r.createElement(l, {
      d: 'M2 11C2 6.02943 6.02943 2 11 2C15.9706 2 20 6.02943 20 11C20 15.9706 15.9706 20 11 20C6.02943 20 2 15.9706 2 11Z',
      stroke: String(('none' !== a && a) || '#838099'),
      strokeWidth: '2',
    })
  );
}
