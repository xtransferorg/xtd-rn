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
      d: 'M8.94321 11.1383C8.42251 11.659 7.57829 11.659 7.05759 11.1383L1.95996 6.04068L3.37417 4.62646L8.00107 9.2529L12.6266 4.62646L14.0408 6.04068L8.94321 11.1383Z',
      fill: String(('none' !== m && m) || '#181721'),
    })
  );
}
