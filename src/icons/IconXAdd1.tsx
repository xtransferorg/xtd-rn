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
      d: 'M8.99995 2.00977L8.99977 6.99977L13.9901 6.99995V8.99995L8.99977 8.99977L8.99995 13.9901H6.99995L6.99977 8.99977L2.00977 8.99995V6.99995L6.99977 6.99977L6.99995 2.00977H8.99995Z',
      fill: String(('none' !== m && m) || '#181721'),
    })
  );
}
