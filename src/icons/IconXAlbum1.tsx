// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as t, Rect as n, Path as i, Circle as l } from 'react-native-svg';
export default function (a) {
  var s = a.color,
    c = void 0 === s ? 'none' : s,
    d = a.size,
    m = void 0 === d ? '24' : d,
    f = a.fillColor,
    g = void 0 === f ? 'none' : f,
    h = e(a, ['color', 'size', 'fillColor']);
  return r.createElement(
    t,
    o(
      {
        width: m,
        height: m,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      h
    ),
    r.createElement(n, {
      x: '1.75',
      y: '3.75',
      width: '20.5',
      height: '15.5',
      rx: '1.95',
      stroke: String(('none' !== c && c) || '#181721'),
      strokeWidth: '1.5',
    }),
    r.createElement(i, {
      d: 'M2 16.125L6.36844 12.8487C6.44489 12.7914 6.55121 12.7961 6.62223 12.86L10.1179 16.0061C10.1932 16.0739 10.3074 16.0747 10.3836 16.0078L16.375 10.75L22.25 16.125',
      stroke: String(('none' !== c && c) || '#181721'),
      strokeWidth: '1.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
    r.createElement(l, {
      cx: '6.5',
      cy: '7.9375',
      r: '1.5',
      fill: String(('none' !== g && g) || '#181721'),
    })
  );
}
