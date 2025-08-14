// @ts-nocheck
import { _ as e, a as l } from './_rollupPluginBabelHelpers-3bc641ae';
import o from 'react';
import { Svg as r, Path as i } from 'react-native-svg';
export default function (t) {
  t.color;
  var n = t.size,
    C = void 0 === n ? '24' : n,
    a = t.fillColor,
    f = void 0 === a ? 'none' : a,
    c = e(t, ['color', 'size', 'fillColor']);
  return o.createElement(
    r,
    l(
      {
        width: C,
        height: C,
        viewBox: '0 0 48 48',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      c
    ),
    o.createElement(i, {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2ZM24 30C22.8954 30 22 30.8954 22 32C22 33.1046 22.8954 34 24 34C25.1046 34 26 33.1046 26 32C26 30.8954 25.1046 30 24 30ZM24 14C23.1716 14 22.5 14.6236 22.5 15.3929V25.6071C22.5 26.3764 23.1716 27 24 27C24.8284 27 25.5 26.3764 25.5 25.6071V15.3929C25.5 14.6236 24.8284 14 24 14Z',
      fill: String(('none' !== f && f) || '#222222'),
    })
  );
}
