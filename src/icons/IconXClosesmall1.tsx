// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as l, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    L = i.fillColor,
    f = void 0 === L ? 'none' : L,
    m = e(i, ['color', 'size', 'fillColor']);
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
      m
    ),
    r.createElement(t, {
      d: 'M11.6666 2.91895L13.0808 4.33316L9.41373 7.99961L13.0808 11.6665L11.6666 13.0807L7.99973 9.41361L4.33328 13.0807L2.91907 11.6665L6.58573 7.99961L2.91907 4.33316L4.33328 2.91895L7.99973 6.58561L11.6666 2.91895Z',
      fill: String(('none' !== f && f) || '#181721'),
    })
  );
}
