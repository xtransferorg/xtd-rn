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
      d: 'M7.05759 4.86172C7.57829 4.34102 8.42251 4.34102 8.94321 4.86172L14.0408 9.95935L12.6266 11.3736L7.99973 6.74712L3.37417 11.3736L1.95996 9.95935L7.05759 4.86172Z',
      fill: String(('none' !== m && m) || '#181721'),
    })
  );
}
