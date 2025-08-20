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
      d: 'M8.01538 2V4H4V12H12V8.00701H14V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2H8.01538ZM12.6107 2.00229L14.0206 3.42078L8.03983 9.36549L6.6299 7.94701L12.6107 2.00229Z',
      fill: String(('none' !== m && m) || '#181721'),
    })
  );
}
