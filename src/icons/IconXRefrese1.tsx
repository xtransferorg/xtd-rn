// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as t, Path as i } from 'react-native-svg';
export default function (n) {
  var l = n.color,
    s = void 0 === l ? 'none' : l,
    a = n.size,
    c = void 0 === a ? '24' : a,
    m = (n.fillColor, e(n, ['color', 'size', 'fillColor']));
  return r.createElement(
    t,
    o(
      {
        width: c,
        height: c,
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      m
    ),
    r.createElement(i, {
      d: 'M10 5H13V2',
      stroke: String(('none' !== s && s) || '#181721'),
      strokeWidth: '2',
      strokeLinecap: 'square',
      strokeLinejoin: 'round',
    }),
    r.createElement(i, {
      d: 'M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C10.0075 2 11.7848 2.98593 12.874 4.5',
      stroke: String(('none' !== s && s) || '#181721'),
      strokeWidth: '2',
    })
  );
}
