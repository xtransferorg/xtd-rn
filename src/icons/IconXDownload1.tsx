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
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      c
    ),
    r.createElement(l, {
      d: 'M8.00293 11.2998V2M12 7.3335 8.70711 10.6264C8.31658 11.0169 7.68342 11.0169 7.29289 10.6264L4 7.3335M12 14H4',
      stroke: String(('none' !== a && a) || '#181721'),
      strokeWidth: '2',
    })
  );
}
