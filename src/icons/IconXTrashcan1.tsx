// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import r from 'react';
import { Svg as l, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    H = i.fillColor,
    f = void 0 === H ? 'none' : H,
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
      d: 'M10.6667 1.3335V2.66683H14V4.66683H13.234L12.8033 13.3993C12.7683 14.1092 12.1824 14.6668 11.4716 14.6668H4.52837C3.81756 14.6668 3.23172 14.1092 3.19666 13.3993L2.76533 4.66683H2V2.66683H5.33333V1.3335H10.6667ZM11.232 4.66683H4.76733L5.16267 12.6668H10.8367L11.232 4.66683ZM9 6.66683V10.6668H7V6.66683H9Z',
      fill: String(('none' !== f && f) || '#181721'),
    })
  );
}
