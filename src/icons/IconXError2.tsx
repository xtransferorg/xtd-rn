// @ts-nocheck
import { _ as e, a as o } from './_rollupPluginBabelHelpers-3bc641ae';
import l from 'react';
import { Svg as r, Path as t } from 'react-native-svg';
export default function (i) {
  i.color;
  var n = i.size,
    a = void 0 === n ? '24' : n,
    L = i.fillColor,
    f = void 0 === L ? 'none' : L,
    m = e(i, ['color', 'size', 'fillColor']);
  return l.createElement(
    r,
    o(
      {
        width: a,
        height: a,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      m
    ),
    l.createElement(t, {
      d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
      fill: String(('none' !== f && f) || '#C72D3C'),
    }),
    l.createElement(t, {
      d: 'M14.7501 8.18945L15.8108 9.25011L13.0605 12L15.8108 14.7501L14.7501 15.8108L12 13.0605L9.25011 15.8108L8.18945 14.7501L10.9395 12L8.18945 9.25011L9.25011 8.18945L12 10.9395L14.7501 8.18945Z',
      fill: String(('none' !== f && f) || 'white'),
    })
  );
}
