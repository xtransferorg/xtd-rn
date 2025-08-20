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
      d: 'M11.6665 2.91943L13.0807 4.33365L9.41361 8.0001L13.0807 11.667L11.6665 13.0812L7.99961 9.4141L4.33316 13.0812L2.91895 11.667L6.58561 8.0001L2.91895 4.33365L4.33316 2.91943L7.99961 6.5861L11.6665 2.91943Z',
      fill: String(('none' !== f && f) || '#181721'),
    })
  );
}
