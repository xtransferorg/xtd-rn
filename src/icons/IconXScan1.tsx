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
      d: 'M2 5V3C2 2.44772 2.44772 2 3 2H5M5 14H3C2.44772 14 2 13.5523 2 13V11M14 11V13C14 13.5523 13.5523 14 13 14H11M11 2H13C13.5523 2 14 2.44772 14 3V5M3.33301 8H12.6663',
      stroke: String(('none' !== a && a) || '#181721'),
      strokeWidth: '2',
    })
  );
}
