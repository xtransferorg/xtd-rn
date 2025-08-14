// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as t, Path as i } from 'react-native-svg';
export default function (l) {
  var n = l.color,
    a = void 0 === n ? 'none' : n,
    s = l.size,
    f = void 0 === s ? '24' : s,
    m = l.fillColor,
    c = void 0 === m ? 'none' : m,
    v = e(l, ['color', 'size', 'fillColor']);
  return r.createElement(
    t,
    o(
      {
        width: f,
        height: f,
        viewBox: '0 0 22 22',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      v
    ),
    r.createElement(i, {
      d: 'M2 11.0001C2 6.02946 6.02946 2 11.0001 2C15.9707 2 20.0001 6.02946 20.0001 11.0001C20.0001 15.9707 15.9707 20.0001 11.0001 20.0001C6.02946 20.0001 2 15.9707 2 11.0001Z',
      fill: String(('none' !== c && c) || '#F5F5F7'),
      stroke: String(('none' !== a && a) || '#B3B2C2'),
      strokeWidth: '2',
    })
  );
}
