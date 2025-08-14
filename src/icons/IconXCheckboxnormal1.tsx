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
      d: 'M2 5C2 3.34314 3.34314 2 5 2H17C18.6568 2 20 3.34315 20 5V17C20 18.6568 18.6568 20 17 20H5C3.34314 20 2 18.6568 2 17V5Z',
      stroke: String(('none' !== a && a) || '#838099'),
      strokeWidth: '2',
    })
  );
}
